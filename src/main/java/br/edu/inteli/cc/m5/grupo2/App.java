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

        String[] paths = new String[]{"C:/Users/Beny Frid/Documents/GitHub/grupo2/src/main/resources/dted/SaoPaulo/W047_S23.dt2"};
        double[][] map = new double[0][];

        for (int i = 0; i < paths.length; i++) {
            double[][] newMap = Dted.readDted(paths[0]);
            map = Dted.mergeDted(map, newMap);
        }

        map = Dted.sortDted(map);

        // Printing all latitudes, longitudes and altitudes readed
        for (int i = 0; i < map.length; i++) {
            System.out.println("latitude: " + map[i][1] + "   longitude: " + map[i][2] + "   altitude: " + map[i][0]);
        }
    }
}
