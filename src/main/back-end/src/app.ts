import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import express, { Application } from "express";
import core from "./routes/index";
import projects from "./routes/projects";
import Database from "./database";

export default class App {

	public app : Application;
	public database : Database;

	constructor() {

		this.app = express();
		this.config();
		this.routes();
	
	}

	private config() : void {

		dotenv.config();

		this.database = new Database();

		this.app.use(express.json());
		this.app.use(express.urlencoded({ extended: true }));
		this.app.use(cors());
		this.app.use(helmet());
	
	}

	private routes() : void {

		this.app.use("/api/", core);
		this.app.use("/api/projects", projects);
	
	}

}