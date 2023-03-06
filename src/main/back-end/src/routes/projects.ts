import express from "express";
import ProjectsController from "../controllers/projects";

// Getting the projectController's required methods.
const { createProject } = ProjectsController;

// Creating the base-router.
const router = express.Router();

// POST /api/projects
router.post("/", createProject);

// Exporting the base-router.
export default router;