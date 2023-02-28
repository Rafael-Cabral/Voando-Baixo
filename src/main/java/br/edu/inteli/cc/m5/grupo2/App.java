package br.edu.inteli.cc.m5.grupo2;

public class App {
    public static void main(String[] args) {

        // Instancing a new graph.
        Graph graph = new Graph();

        String path = "src/main/resources/dted/SaoPaulo/W045_S23.dt2";

        double[][] map = Dted.readDted(path, 180);

        // Sending all Vertices to the graph created
        for (double[] doubles : map) {
            graph.addVertex(doubles[1], doubles[2], doubles[0]);
        }

        // Creating all possible connections in the graph
        graph.connectVertices(180);

        // Printing the connections of id = 6 vertex.
        graph.getConnectionsOf(6).forEach(connection -> {
            System.out.println(connection.getArrivalVertex().getId());
        });
    }
}
