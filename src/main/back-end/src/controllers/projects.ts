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

	public async getAllProjects(req : Request, res : Response) : Promise<Response> {

		try {

			const projects = await ProjectsService.getAll();
			
			return responseBuilder(res, "success", success.projectsRetrievedSuccessfully, projects);
		
		} catch (err) {

			console.error(err);

			return responseBuilder(res, "error", error.unableToRetrieveProjects);
		
		}

	}

	public async getProject(req : Request, res : Response) : Promise<Response> {
		
		const { projectId } = req.params;

		try {

			const project = await ProjectsService.get(projectId);
			
			return responseBuilder(res, "success", success.projectRetrievedSuccessfully, project);
		
		} catch (err) {

			console.error(err);

			return responseBuilder(res, "error", error.unableToRetrieveProject);
		
		}

	}

	public async updateProject(req : Request, res : Response) : Promise<Response> {
		
		const { projectId } = req.params;
		const { project } = req.body;

		try {

			const updatedProject = await ProjectsService.update(projectId, project);
			
			return responseBuilder(res, "success", success.projectUpdatedSuccessfully, updatedProject);
		
		} catch (err) {

			console.error(err);

			return responseBuilder(res, "error", error.unableToUpdateProject);
		
		}

	}

	public async deleteProject(req : Request, res : Response) : Promise<Response> {

		const { projectId } = req.params;

		try {

			const deletedProject = await ProjectsService.delete(projectId);
			
			return responseBuilder(res, "success", success.projectDeletedSuccessfully, deletedProject);
		
		} catch (err) {

			console.error(err);

			return responseBuilder(res, "error", error.unableToDeleteProject);
		
		}

	}

	public async requestBestRouteProcessing(req : Request, res : Response) : Promise<Response> {

		const { projectId } = req.params;
		const { origin, destination } = req.body.route;

		try {

			const bestRoute = await ProjectsService.requestBestRouteProcessing(projectId, origin, destination);
			
			return responseBuilder(res, "success", success.bestRouteRequestedSuccessfully, bestRoute);
		
		} catch (err) {

			console.error(err);

			return responseBuilder(res, "error", error.unableToRequestBestRoute);
		
		}


	}

}

export default new ProjectsController();