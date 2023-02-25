package br.edu.inteli.cc.m5.grupo2;

public class App {
    public static void main(String[] args) {

        // Instancing a new graph.
        Graph graph = new Graph();

        String[] paths = new String[]{"src/main/resources/dted/SaoPaulo/W045_S23.dt2", "src/main/resources/dted/SaoPaulo/W045_S24.dt2", "src/main/resources/dted/SaoPaulo/W046_S23.dt2", "src/main/resources/dted/SaoPaulo/W046_S24.dt2", "src/main/resources/dted/SaoPaulo/W047_S23.dt2", "src/main/resources/dted/SaoPaulo/W047_S24.dt2"};
        double[][] map = new double[0][];

        for (int i = 0; i < paths.length; i++) {
            double[][] newMap = Dted.readDted(paths[i], 180);
            map = Dted.mergeDted(map, newMap);
        }

        // Sorting map
        map = Dted.sortDted(map);

        // Sending all Vertices to the graph created
        for (int i = 0; i < map.length; i++) {
            graph.addVertex(map[i][1], map[i][2], map[i][0]);
        }

        // Creating all possible connections in the graph
        graph.connectVertices(180);

        // Printing the connections of id = 6 vertex.
        graph.getConnectionsOf(6).forEach(connection -> {
            System.out.println(connection.getArrivalVertex().getId());
        });
    }
}
