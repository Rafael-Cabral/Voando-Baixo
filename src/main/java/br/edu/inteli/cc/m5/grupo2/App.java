package br.edu.inteli.cc.m5.grupo2;

public class App {
    public static void main(String[] args) {

        // Instancing a new graph.
        Graph graph = new Graph();

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
        graph.getConnectionsOf(19000).forEach(connection -> {
            System.out.println(connection.getArrivalVertex().getId());
        });
    }
}
