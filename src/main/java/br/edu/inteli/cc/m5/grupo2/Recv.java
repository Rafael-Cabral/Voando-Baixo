package br.edu.inteli.cc.m5.grupo2;

import com.rabbitmq.client.*;
import com.google.gson.*;

import java.util.ArrayList;
import java.util.Locale;
import java.util.concurrent.atomic.AtomicInteger;

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
        System.out.println(" [*] Waiting for new items in queue to process.");
    }

    public void consumeMessages(Channel channel) throws Exception {
        Gson gson = new Gson();
        DeliverCallback deliverCallback = (consumerTag, delivery) -> {
            String message = new String(delivery.getBody(), "UTF-8");

            JsonObject json = gson.fromJson(message, JsonObject.class);

            String objectKey = json.get("objectKey").getAsString();
            String projectId = json.get("id").getAsString();

            System.out.println(" [*] Received new processing request for project " + json.get("id") + ".");
            System.out.println(" [ ] Downloading file from S3...");

            DownloadFileFromS3 downloadFileFromS3 = new DownloadFileFromS3();
            downloadFileFromS3.downloadFileFromS3(objectKey, projectId);

            // Exiba uma mensagem de confirmação
            System.out.println(" [*] File downloaded successfully.");

            // Instancing a new graph.
            Graph graph = new Graph();

            // Path to DTED file.
            String path = System.getProperty("user.dir") + "/downloads/" + projectId + ".dt2";;

            double[][] map = Dted.readDted(path, 180);

            System.out.println(" [*] File read  successfully.");
            System.out.println(" [ ] Loading graph instance...");

            // Sending all Vertices to the graph created.
            for (int i = 0;i < map.length - 1; i++) {
                graph.addVertex(map[i][1], map[i][2], map[i][0]);
            }

            System.out.println(" [*] Graph loaded successfully.");

            int rows = (int) map[map.length - 1][1];
            int cols = (int) map[map.length - 1][2];

            System.out.println(" [ ] Connecting graph vertices...");

            // Creating all possible connections in the graph.
            graph.connectVertices(180, rows, cols);

            System.out.println(" [*] Graph vertices connected successfully.");

            Neo4j neo4j = new Neo4j();

            ArrayList<Vertex> graphVertices = graph.getVertices();
            AtomicInteger currentVertex = new AtomicInteger();
            int quantityOfVertices = graphVertices.size();

            graphVertices.forEach(vertex -> {
                neo4j.createVertex(vertex);
                System.out.print("\r [ ] Persisting vertices in Neo4j: " +  String.format(Locale.US, "%.4f", ((double) currentVertex.get() / quantityOfVertices)) + "%");
                currentVertex.getAndIncrement();
            });

            System.out.println(" [*] Vertices persisted successfully.");

            currentVertex.set(0);

            graph.getVertices().forEach(vertex -> {
                neo4j.connectVertex(vertex);
                System.out.print("\r [ ] Linking vertices in Neo4j: " + String.format(Locale.US, "%.4f", ((double) currentVertex.get() / quantityOfVertices)) + "%");
                currentVertex.getAndIncrement();
            });

            System.out.println(" [*] Vertices linked successfully.");

        };
        channel.basicConsume(QUEUE_NAME, true, deliverCallback, consumerTag -> { });
    }

}
