package br.edu.inteli.cc.m5.grupo2;

public class App {
    public static void main(String[] args) {

        // Instancing a new graph.
        Graph graph = new Graph();

        // Adding vertices to the created graph.
        graph.addVertex(200.32419, 120.54193, 1000);
        graph.addVertex(300.32419, 120.54193, 1000);
        graph.addVertex(400.32419, 120.54193, 1000);
        graph.addVertex(500.32419, 120.54193, 1000);

        graph.addVertex(200.32419, 220.54193, 750);
        graph.addVertex(300.32419, 220.54193, 750);
        graph.addVertex(400.32419, 220.54193, 750);
        graph.addVertex(500.32419, 220.54193, 750);

        graph.addVertex(200.32419, 320.54193, 500);
        graph.addVertex(300.32419, 320.54193, 500);
        graph.addVertex(400.32419, 320.54193, 500);
        graph.addVertex(500.32419, 320.54193, 500);

        graph.addVertex(500.32419, 420.54193, 1250);
        graph.addVertex(300.32419, 420.54193, 1250);
        graph.addVertex(400.32419, 420.54193, 1250);
        graph.addVertex(500.32419, 420.54193, 1250);

        // Creating directed connections between vertices from a departure vertex to an arrival vertex, eg. a (id) -> b (id).
        graph.addEdge(0, 1);
        graph.addEdge(0, 2);
        graph.addEdge(1, 2);
        graph.addEdge(1, 3);
        graph.addEdge(2, 3);

        // Printing all vertices id's.
        graph.getVertices().forEach(vertex -> {
            System.out.println(vertex.getId());
        });

        // Printing the connections of id = 0 vertex.
        graph.getConnectionsOf(0).forEach(connection -> {
            System.out.println(connection.getArrivalVertex().getId());
        });

        graph.connectVertices(100);

        graph.getConnectionsOf(0).forEach(connection -> {
            System.out.println(connection.getArrivalVertex().getId());
        });
    }
}
