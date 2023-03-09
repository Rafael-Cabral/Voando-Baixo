import { Connection, Channel, connect, Message } from "amqplib";

export default class RabbitMQServer {

	public conn: Connection;
	private channel: Channel;
	private uri: string;

	constructor(uri: string) {

		this.uri = uri;
		this.start();
	
	}

	private async start(): Promise<void> {

		try {

			this.conn = await connect(this.uri);
			this.channel = await this.conn.createChannel();
			console.log("RabbitMQ connection established successfully.");
		
		} catch (error) {

			console.log(error);
		
		}
		
	
	}

	public async publishInQueue(queue: string, message: string) {

		return this.channel.sendToQueue(queue, Buffer.from(message));
	
	}

	public async publishInExchange(
		exchange: string,
		routingKey: string,
		message: string
	): Promise<boolean> {

		return this.channel.publish(exchange, routingKey, Buffer.from(message));
	
	}

	public async consume(queue: string, callback: (message: Message) => void) {

		return this.channel.consume(queue, (message) => {

			callback(message);
			this.channel.ack(message);
		
		});
	
	}

}