import setup from "..";
import { IProject } from "../interfaces/IProject";
import { v4 as uuid } from "uuid";
import { ICoordinate } from "../interfaces/ICoordinate";

class ProjectsService {

	public async create(project: IProject) {

		const session = setup.app.database.driver.session();

		const res = await session.run(
			`
			MERGE (p:Project {
				id: "${uuid()}", 
				name: "${project.name}",
				objectKey: "${project.objectKey}",
				status: "processing",
				createdAt: "${new Date()}"})
			
			RETURN p
			`
		);

		session.close();

		await setup.rabbitMQServer.publishInQueue("process", JSON.stringify(res.records[0].get(0).properties));

		return res.records[0].get(0).properties;

	}

	public async getAll() {

		const session = setup.app.database.driver.session();

		const res = await session.run(
			`
			MATCH (p:Project)
			RETURN p
			`
		);

		session.close();

		return res.records.map((record) => record.get(0).properties);

	}

	public async get(projectId: string) {
		
		const session = setup.app.database.driver.session();

		const resProject = await session.run(
			`
			MATCH (p:Project {id: "${projectId}"})
			RETURN p
			`
		);

		const project = resProject.records[0].get(0).properties;

		if(project.status === "processing") {

			return project;
		
		} else if (project.status === "processed" || project.status === "routing") {

			const resMap = await session.run(
				`
				MATCH (p:Project {id: "${projectId}"})-[:HAS]->(m:Map)
				RETURN m
				`
			);

			const map = resMap.records[0].get(0).properties;

			session.close();

			const res = {
				...project,
				map
			};

			return res;

		} else if (project.status === "routed") {

			const resMap = await session.run(
				`
				MATCH (p:Project {id: "${projectId}"})-[:HAS]->(m:Map)
				RETURN m
				`
			);

			const map = resMap.records[0].get(0).properties;

			const resRoute = await session.run(
				`
				MATCH (p:Project {id: "${projectId}"})-[:HAS]->(r:Route)
				RETURN r
				`
			);

			const vertices = JSON.parse(resRoute.records[0].get(0).properties.vertices);

			session.close();

			const res = {
				...project,
				map,
				vertices
			};

			return res;
		
		}

	}

	public async update(projectId: string, project: IProject) {
		
		const session = setup.app.database.driver.session();

		const res = await session.run(
			`
			MATCH (p:Project {id: "${projectId}"})
			SET p.name = "${project.name}", 
				p.updatedAt = "${new Date()}"
			RETURN p
			`
		);

		session.close();

		return res.records[0].get(0).properties;

	}

	public async delete(projectId: string) {
		
		const session = setup.app.database.driver.session();

		const res = await session.run(
			`
			MATCH (p:Project {id: "${projectId}"})
			DETACH DELETE p
			RETURN p
			`
		);

		session.close();

		return res.records[0].get(0).properties;

	}

	public async requestBestRouteProcessing(projectId: string, origin : ICoordinate, destination : ICoordinate) {

		const session = setup.app.database.driver.session();

		const res = await session.run(
			`
			MATCH (p:Project {id: "${projectId}"})
				SET p.status = "routing"
				RETURN p
			`
		);
		
		session.close();

		const project = res.records[0].get(0).properties;

		await setup.rabbitMQServer.publishInQueue("findroute", JSON.stringify({
			id: project.id,
			objectKey: project.objectKey,
			origin,
			destination
		}));

		return project;

	}

}

export default new ProjectsService();