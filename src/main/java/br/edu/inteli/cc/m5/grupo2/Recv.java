package br.edu.inteli.cc.m5.grupo2;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.rabbitmq.client.*;

import java.io.IOException;
import java.net.URISyntaxException;
import java.security.KeyManagementException;
import java.security.NoSuchAlgorithmException;
import java.util.List;
import java.util.concurrent.TimeoutException;

public class Recv {
    private static final String URI = "amqp://guest:guest@localhost:5672";//URI for RabbitMQ server

    public void startConsuming() {

        java.util.logging.Logger.getLogger("com.rabbitmq.client").setLevel(java.util.logging.Level.WARNING);//Sets logging level for RabbitMQ
        //try-with-resources block to create connection and channel, and to declare queues
        try (Connection connection = createConnection();

         Channel channel = createChannel(connection)) {
                declareQueue(channel, "findroute");
                declareQueue(channel, "process");

            Gson gson = new Gson();//Creates Gson object for deserializing JSON messages

            while (true) {
                 //Receives messages from "findroute" queue
                GetResponse response = channel.basicGet("findroute", true);

                if (response != null) {

                    String message = new String(response.getBody(), "UTF-8");//Converts message body to string
                    JsonObject json = gson.fromJson(message, JsonObject.class);//Deserializes JSON message into JsonObject
                    String projectId = json.get("id").getAsString();//Gets project ID from JSON
                    JsonObject origin = json.getAsJsonObject("origin");//Gets origin coordinates from JSON
                    JsonObject destination = json.getAsJsonObject("destination");//Gets destination coordinates from JSON
                    double originLatitude = origin.get("latitude").getAsDouble();//Gets latitude of origin
                    double originLongitude = origin.get("longitude").getAsDouble();//Gets longitude of origin
                    double destinationLatitude = destination.get("latitude").getAsDouble();//Gets latitude of destination
                    double destinationLongitude = destination.get("longitude").getAsDouble(); //Gets longitude of destination
                    //Prints received message and coordinates to console
                    System.out.println("\n===============================================================================================\n");
                    System.out.println(" Received new find route request from project '" + projectId + "'.\n");
                    System.out.println(" Origin -----------------------------------------------------------------");
                    System.out.println("     Latitude: " + originLatitude);
                    System.out.println("     Longitude: " + originLongitude);
                    System.out.println(" Destination ------------------------------------------------------------");
                    System.out.println("     Latitude: " + destinationLatitude);
                    System.out.println("     Longitude: " + destinationLongitude);

                    Graph graph = createGraph(projectId);//Creates graph instance for project

                    Vertex originVertex = graph.findNearestVertex(originLatitude, originLongitude);//Finds nearest vertex to origin coordinates
                    Vertex destinationVertex = graph.findNearestVertex(destinationLatitude, destinationLongitude);//Finds nearest vertex to destination coordinates

                    List<Vertex> route = AStar.findPath(originVertex, destinationVertex);//Finds path using A* algorithm
                    //Prints route to console
                    System.out.println("\n Route found for project '" + projectId + "'.");
                    System.out.println("\n===============================================================================================\n");

                }
                  //Receives messages from "process" queue
                response = channel.basicGet("process", true);

                if (response != null) {

                    String message = new String(response.getBody(), "UTF-8");//Converts message body to string
                    JsonObject json = gson.fromJson(message, JsonObject.class);//Deserializes JSON message into JsonObject
                    String projectId = json.get("id").getAsString();//Gets project ID from JSON
                    System.out.println("\n===============================================================================================\n");
                    System.out.println(" Received new processing request for project '" + projectId + "'.\n");
                    System.out.println(" Downloading file from S3...");

                    try {

                        DownloadFileFromS3 downloadFileFromS3 = new DownloadFileFromS3();
                        downloadFileFromS3.downloadFileFromS3(json.get("objectKey").getAsString(), projectId);
                        System.out.println(" File downloaded successfully.");
                        processMessage(projectId);
                        System.out.println("\n Processing finished for project '" + projectId + "'.");
                        System.out.println("\n===============================================================================================\n");

                    } catch (Exception e) {

                        System.out.println(" Error while processing message for project " + projectId + ": " + e);

                    }

                }

                Thread.sleep(1000);

            }

        } catch (Exception e) {

            System.out.println(" Error while consuming messages: " + e);

        }

    }


    private Connection createConnection() throws IOException, TimeoutException, URISyntaxException, NoSuchAlgorithmException, KeyManagementException, TimeoutException {

        ConnectionFactory factory = new ConnectionFactory();
        factory.setUri(URI);
        return factory.newConnection();

    }

    private Channel createChannel(Connection connection) throws IOException {

        return connection.createChannel();

    }

    private void declareQueue(Channel channel, String queueName) throws IOException {

        channel.queueDeclare(queueName, true, false, false, null);
        System.out.println(" Waiting for new messages in queue '" + queueName + "'.");

    }

    private void processMessage(String projectId) throws Exception {

        Graph graph = createGraph(projectId);
        Neo4j neo4j = new Neo4j();
        neo4j.persistMapBounds(graph, getRows(projectId), projectId);

    }

    private Graph createGraph(String projectId) throws Exception {

        String path = System.getProperty("user.dir") + "/downloads/" + projectId + ".dt2";
        double[][] map = Dted.readDted(path, 180);

        System.out.println(" File read successfully.");
        System.out.println(" Loading graph instance.");

        Graph graph = new Graph();
        for (int i = 0; i < map.length - 1; i++) {
            graph.addVertex(map[i][1], map[i][2], map[i][0]);
        }

        System.out.println(" Graph loaded successfully.");
        System.out.println(" Connecting graph vertices...");

        int rows = (int) map[map.length - 1][1];
        int cols = (int) map[map.length - 1][2];
        graph.connectVertices(180, rows, cols);

        System.out.println(" Graph vertices connected successfully.");

        return graph;

    }

    private int getRows(String projectId) throws Exception {

        String path = System.getProperty("user.dir") + "/downloads/" + projectId + ".dt2";
        double[][] map = Dted.readDted(path, 180);
        return (int) map[map.length - 1][1];

    }
}
