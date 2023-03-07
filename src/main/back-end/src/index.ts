import { Application } from "express";
import App from "./app";
import HttpServer from "./httpServer";
import dotenv from "dotenv";

class Setup {

	public app : App;

	constructor() {

		dotenv.config();

		this.app = new App();

		const { app } = this.app;
		
		this.up(app);

	}

	private up(app : Application) {

		new HttpServer(app, 3000);

	}

}

const setup = new Setup();

export default setup;