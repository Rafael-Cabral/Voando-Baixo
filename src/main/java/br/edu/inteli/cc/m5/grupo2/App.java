package br.edu.inteli.cc.m5.grupo2;

public class App {
    public static void main(String[] args) {

        int intervalMeters = 200;

        // Instancing a new graph.
        Graph graph = new Graph();

        String[] paths = new String[]{"C:/Users/Beny Frid/Documents/GitHub/grupo2/src/main/resources/dted/SaoPaulo/W047_S23.dt2"};
        double[][] map = new double[0][];

        for (int i = 0; i < paths.length; i++) {
            double[][] newMap = Dted.readDted(paths[0], intervalMeters);
            map = Dted.mergeDted(map, newMap);
        }

        // Sorting map
        map = Dted.sortDted(map);

        // Sending all Vertices to the graph created
        for (double[] doubles : map) {
            graph.addVertex(doubles[1], doubles[2], doubles[0]);
        }

        // Creating all possible connections in the graph
        graph.connectVertices(intervalMeters);

        // Printing the connections of id = 6 vertex.
        graph.getConnectionsOf(6).forEach(connection -> {
            System.out.println(connection.getArrivalVertex().getId());
        });
    }
}
