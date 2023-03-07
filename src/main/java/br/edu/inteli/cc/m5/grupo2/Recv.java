package br.edu.inteli.cc.m5.grupo2;

import com.rabbitmq.client.*;
import com.google.gson.*;

public class Recv {

    // Nome da fila a ser consumida
    private String QUEUE_NAME;
    // URI de conexão com o RabbitMQ
    private String URI;

    public Recv() {
        this.QUEUE_NAME = "process";
        this.URI = "amqp://guest:guest@localhost:5672";
    }

    // Cria uma conexão com o RabbitMQ utilizando a URI de conexão definida
    public Connection createConnection() throws Exception {
        ConnectionFactory factory = new ConnectionFactory();
        factory.setUri(this.URI);
        return factory.newConnection();
    }

    // Cria um canal de comunicação com o RabbitMQ
    public Channel createChannel(Connection connection) throws Exception {
        return connection.createChannel();
    }

    // Declara a fila a ser consumida pelo canal
    public void declareQueue(Channel channel) throws Exception {
        // Define os argumentos de declaração da fila
        boolean durable = true; // Fila persistente
        boolean exclusive = false; // Fila não exclusiva
        boolean autoDelete = false; // Fila não é excluída automaticamente
        // Define as propriedades adicionais da fila
        // Nesse caso, é passado como argumento apenas o nome da fila
        // Mas podem ser definidas outras propriedades, como argumentos
        // de política de fila, por exemplo.
        AMQP.Queue.DeclareOk declareOk = channel.queueDeclare(QUEUE_NAME, durable, exclusive, autoDelete, null);
        // Imprime uma mensagem informando que a fila foi declarada com sucesso
        System.out.println(" [*] Waiting for messages. To exit press CTRL+C");
    }

    public void consumeMessages(Channel channel) throws Exception {
        Gson gson = new Gson();
        DeliverCallback deliverCallback = (consumerTag, delivery) -> {
            String message = new String(delivery.getBody(), "UTF-8");

            JsonObject json = gson.fromJson(message, JsonObject.class);
            System.out.println(" [x] Received new processing request for project " + json.get("id") + ".");

            channel.basicAck(delivery.getEnvelope().getDeliveryTag(), false);
        };
        channel.basicConsume(QUEUE_NAME, false, deliverCallback, consumerTag -> { });
    }

}
