import setup from "..";
import { IProject } from "../interfaces/IProject";

class ProjectsService {

	public async create(project: IProject) {

		const session = setup.app.database.driver.session();

		const res = await session.run(
			`
			MERGE (p:Project { 
				name: "${project.name}",
				createdAt: "${new Date()}",
				updatedAt: "${new Date()}"})
			
			RETURN p
			`
		);

		return res.records[0].get(0).properties;

	}

}

export default new ProjectsService();