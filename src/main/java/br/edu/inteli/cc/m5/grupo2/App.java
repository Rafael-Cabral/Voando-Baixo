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

        String[] paths = new String[]{"../main/resources/dted/SaoPaulo/W045_S23.dt2", "../main/resources/dted/SaoPaulo/W045_S24.dt2", "../main/resources/dted/SaoPaulo/W046_S23.dt2", "../main/resources/dted/SaoPaulo/W046_S24.dt2", "../main/resources/dted/SaoPaulo/W047_S23.dt2", "../main/resources/dted/SaoPaulo/W047_S24.dt2"};
        double[][] map = new double[0][];

        for (int i = 0; i < paths.length - 1; i++){
            double[][] newMap = Dted.readDted(paths[0]);
            map = Dted.mergeDted(map, newMap);
        }

//        double[][] map0 = Dted.readDted(paths[0]);
//        double[][] map1 = Dted.readDted(paths[1]);
//        double[][] map2 = Dted.readDted(paths[2]);
//        double[][] map3 = Dted.readDted(paths[3]);
//        double[][] map4 = Dted.readDted(paths[4]);
//        double[][] map5 = Dted.readDted(paths[5]);
//
//        double[][] map6 = Dted.mergeDted(map0, map1);
//        double[][] map7 = Dted.mergeDted(map6, map2);
//        double[][] map8 = Dted.mergeDted(map7, map3);
//        double[][] map9 = Dted.mergeDted(map8, map4);

//        double[][] finalMap = Dted.mergeDted(map9, map5);

//        finalMap = Dted.sortDted(finalMap);

        for (int i = 0; i < map.length; i++){
            System.out.println("latitude: " + map[i][1] + "   longitude: " + map[i][2] + "   altitude: " + finalMap[i][0]);
        }
    }
}
