import express from "express";
import ProjectsController from "../controllers/projects";

// Getting the projectController's required methods.
const { createProject, getAllProjects, getProject, updateProject } = ProjectsController;

// Creating the base-router.
const router = express.Router();

// POST /api/projects
router.post("/", createProject);

// GET /api/projects
router.get("/", getAllProjects);

// GET /api/projects/:projectId
router.get("/:projectId", getProject);

// PUT /api/projects/:projectId
router.put("/:projectId", updateProject);

// Exporting the base-router.
export default router;