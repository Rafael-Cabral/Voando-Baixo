import neo4j, {Driver} from "neo4j-driver";

export default class Database {

	driver : Driver;

	constructor() {

		this.setDriver();
		this.checkConnection();

	}

	private setDriver() : void {

		this.driver = neo4j.driver(
			`neo4j://${process.env.NEO4J_HOST}:${process.env.NEO4J_PORT}`, 
			neo4j.auth.basic(
				process.env.NEO4J_USER, 
				process.env.NEO4J_PASSWORD));

	}

	private checkConnection() : void {

		this.driver.getServerInfo().then(() => {
			
			console.log("Neo4j database connection established successfully.");

		}).catch((error : Error) => {

			console.log(error);

		});

	}

}