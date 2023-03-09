import { Application } from "express";
import App from "./app";
import HttpServer from "./httpServer";
import dotenv from "dotenv";
import RabbitMQServer from "./rabbitmqSever";

class Setup {

	public app : App;
	public httpServer : HttpServer;
	public rabbitMQServer : RabbitMQServer;

	constructor() {

		dotenv.config();

		this.app = new App();

		const { app } = this.app;
		
		this.up(app);

	}

	private up(app : Application) {

		this.httpServer = new HttpServer(app, 3000);
		this.rabbitMQServer = new RabbitMQServer(`amqp://${process.env.RABBITMQ_USER}:${process.env.RABBITMQ_PASSWORD}@${process.env.RABBITMQ_HOST}:${process.env.RABBITMQ_PORT}`);

	}

}

const setup = new Setup();

export default setup;