package br.edu.inteli.cc.m5.grupo2;

public class App {
    public static void main(String[] args) {

        // Instancing a new graph.
        Graph graph = new Graph();

        // Adding vertices to the created graph.
        graph.addVertex(200.32419, 120.54193, 1000);
        graph.addVertex(300.32419, 120.54193, 750);
        graph.addVertex(400.32419, 120.54193, 300);
        graph.addVertex(500.32419, 120.54193, 500);

        graph.addVertex(200.32419, 220.54193, 750);
        graph.addVertex(300.32419, 220.54193, 1200);
        graph.addVertex(400.32419, 220.54193, 400);
        graph.addVertex(500.32419, 220.54193, 1100);

        graph.addVertex(200.32419, 320.54193, 500);
        graph.addVertex(300.32419, 320.54193, 600);
        graph.addVertex(400.32419, 320.54193, 900);
        graph.addVertex(500.32419, 320.54193, 800);

        graph.addVertex(200.32419, 420.54193, 1250);
        graph.addVertex(300.32419, 420.54193, 1100);
        graph.addVertex(400.32419, 420.54193, 850);
        graph.addVertex(500.32419, 420.54193, 700);

        graph.addVertex(200.32419, 520.54193, 1550);
        graph.addVertex(300.32419, 520.54193, 1200);
        graph.addVertex(400.32419, 520.54193, 600);
        graph.addVertex(500.32419, 520.54193, 900);

        // Printing all vertices id's.
        graph.getVertices().forEach(vertex -> {
            System.out.println(vertex.getId());
        });

        // Creating all possible connections in the graph
        graph.connectVertices(100);

        // Printing the connections of id = 6 vertex.
        graph.getConnectionsOf(6).forEach(connection -> {
            System.out.println(connection.getArrivalVertex().getId());
        });
    }
}
