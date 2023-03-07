import setup from "..";
import { IProject } from "../interfaces/IProject";

class ProjectsService {

	public async create(project: IProject) {

		const session = setup.app.database.driver.session();

		const res = await session.run(
			`
			MERGE (p:Project { 
				name: "${project.name}",
				dt2File: "${project.dt2File}",
				createdAt: "${new Date()}"})
			
			RETURN p
			`
		);

		session.close();

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

}

export default new ProjectsService();