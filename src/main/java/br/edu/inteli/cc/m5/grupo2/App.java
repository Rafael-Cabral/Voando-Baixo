package br.edu.inteli.cc.m5.grupo2;

import com.rabbitmq.client.Channel;
import com.rabbitmq.client.Connection;

public class App {
    public static void main(String[] args) throws Exception {

        // Instancing a new graph.
        Graph graph = new Graph();

        // Instanciando rabbitmq.
        Recv recv = new Recv();

        // Cria uma conexão com o RabbitMQ
        Connection connection = recv.createConnection();
        // Cria um canal para comunicação com o RabbitMQ
        Channel channel = recv.createChannel(connection);
        // Declara a fila a ser consumida
        recv.declareQueue(channel);
        // Inicia o consumo de mensagens da fila
        recv.consumeMessages(channel);

        // path to DTED file
        String path = "src/main/resources/dted/SaoPaulo/W045_S23.dt2";

        double[][] map = Dted.readDted(path, 180);

        // Sending all Vertices to the graph created
        for (int i = 0;i < map.length - 1; i++) {
            graph.addVertex(map[i][1], map[i][2], map[i][0]);
        }

        int rows = (int) map[map.length - 1][1];
        int cols = (int) map[map.length - 1][2];

        // Creating all possible connections in the graph
        graph.connectVertices(180, rows, cols);

        // Printing the connections of id = 6 vertex.
        graph.getConnectionsOf(720).forEach(graphConnection -> {
            System.out.println(graphConnection.getArrivalVertex().getId());
        });
    }
}
