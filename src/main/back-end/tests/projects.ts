import setup from "../src/index";
import request from "supertest";
import { success } from "../src/constants/success";
import { error } from "../src/constants/error";
import { IProject } from "../src/interfaces/IProject";

const { app } = setup.app;
const project: IProject = {
	name: "Operação 12",
	objectKey: "084e1eaa-4e28-4d9e-8b96-bce5f8459471-W045_S23.dt2"
};

describe("ProjectsController", () => {

	describe("POST /api/projects", () => {

		it("should create a new project", async () => {

			const response = await request(app)
				.post("/api/projects")
				.send({ project });

			project.id = response.body.success.data.id;

			expect(response.status).toBe(success.projectCreatedSuccessfully.status);
			expect(response.body).toMatchObject({
				status: success.projectCreatedSuccessfully.status,
				success: {
					code: success.projectCreatedSuccessfully.code,
					title: success.projectCreatedSuccessfully.title,
					description: success.projectCreatedSuccessfully.description,
					data: {
						name: "Operação 12",
						status: "processing"
					}
				}
			});
		
		});
	
	});

	describe("GET /api/projects", () => {

		it("should return all projects", async () => {

			const response = await request(app).get("/api/projects");
			expect(response.status).toBe(success.projectsRetrievedSuccessfully.status);
			expect(response.body).toMatchObject({
				status: success.projectsRetrievedSuccessfully.status,
				success: {
					code: success.projectsRetrievedSuccessfully.code,
					title: success.projectsRetrievedSuccessfully.title,
					description: success.projectsRetrievedSuccessfully.description,
					data: expect.any(Array)
				}
			});
		
		});
	
	});

	describe("GET /api/projects/:id", () => {

		it("should return a project", async () => {

			const response = await request(app).get(`/api/projects/${project.id}`);
			expect(response.status).toBe(success.projectRetrievedSuccessfully.status);
			expect(response.body).toMatchObject({
				status: success.projectRetrievedSuccessfully.status,
				success: {
					code: success.projectRetrievedSuccessfully.code,
					title: success.projectRetrievedSuccessfully.title,
					description: success.projectRetrievedSuccessfully.description,
					data: {
						name: "Operação 12",
						status: "processing"
					}
				}
			});
		
		});

		it("should return a not found error for an invalid project id", async () => {

			const response = await request(app).get("/api/projects/12345");
			expect(response.status).toBe(error.unableToRetrieveProject.status);
			expect(response.body).toMatchObject({
				status: error.unableToRetrieveProject.status,
				error: {
					code: error.unableToRetrieveProject.code,
					title: error.unableToRetrieveProject.title,
					description: error.unableToRetrieveProject.description
				}
			});
		
		});
	
	});

	describe("PUT /api/projects/:id", () => {

		it("should update a project", async () => {

			const response = await request(app)
				.put(`/api/projects/${project.id}`)
				.send({ project: { name: "Operação 12 - Renomeada" } });

			expect(response.status).toBe(success.projectUpdatedSuccessfully.status);
			expect(response.body).toMatchObject({
				status: success.projectUpdatedSuccessfully.status,
				success: {
					code: success.projectUpdatedSuccessfully.code,
					title: success.projectUpdatedSuccessfully.title,
					description: success.projectUpdatedSuccessfully.description,
					data: {
						name: "Operação 12 - Renomeada",
						status: "processing"
					}
				}});

		});

	});

	describe("DELETE /api/projects/:id", () => {
		
		it("should delete a project", async () => {

			const response = await request(app).delete(`/api/projects/${project.id}`);
			expect(response.status).toBe(success.projectDeletedSuccessfully.status);
			expect(response.body).toMatchObject({
				status: success.projectDeletedSuccessfully.status,
				success: {
					code: success.projectDeletedSuccessfully.code,
					title: success.projectDeletedSuccessfully.title,
					description: success.projectDeletedSuccessfully.description
				}
			});
		
		});
	
	});

});

afterAll(async () => {

	setup.httpServer.server.close();
	setup.rabbitMQServer.conn.close();

});