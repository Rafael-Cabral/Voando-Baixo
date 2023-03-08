import { Application } from "express";
import { Server } from "http";

export default class HttpServer {

	public app : Application;
	public port : number;
	public server : Server;

	constructor(app : Application, port : number) {

		this.app = app;
		this.port = port;
		this.server = new Server(this.app);
		
		this.up();

	}

	private up() : void {
		
		this.server.listen(this.port, () => {

			console.log(`Http server started successfully. Server is running on port ${this.port}.`);

		});

	}

}