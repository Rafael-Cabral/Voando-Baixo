import { Request, Response } from "express";
import { responseBuilder } from "../helpers/responseBuilder";
import { error } from "../constants/error";
import { success } from "../constants/success";
import ProjectsService from "../services/projects";

class ProjectsController {

	public async createProject(req : Request, res : Response) : Promise<Response> {

		const { project } = req.body;

		try {

			const newProject = await ProjectsService.create(project);
			
			return responseBuilder(res, "success", success.projectCreatedSuccessfully, newProject);
		
		} catch (err) {

			console.error(err);

			return responseBuilder(res, "error", error.unableToCreateProject);
		
		}

	}

}

export default new ProjectsController();