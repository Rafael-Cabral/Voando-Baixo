import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import express, { Application } from "express";
import core from "./routes/index";

export default class App {

	public app : Application;

	constructor() {

		this.app = express();
		this.config();
		this.routes();
	
	}

	private config() : void {

		this.app.use(express.json());
		this.app.use(express.urlencoded({ extended: true }));
		this.app.use(cors());
		this.app.use(helmet());
		dotenv.config();
	
	}

	private routes() : void {

		this.app.use("/api/", core);
	
	}

}

export const app = new App();