package br.edu.inteli.cc.m5.grupo2;

import org.testng.annotations.Test;

import static org.testng.AssertJUnit.assertEquals;

public class GraphTest {

    @Test
    public void testConnectVertices() {
        String path = "src/main/resources/dted/SaoPaulo/W045_S23.dt2";
        double[][] newMap = Dted.readDted(path, 180);
        Graph graph = new Graph();
        for (int i = 0;i < newMap.length - 1; i++) {
            graph.addVertex(newMap[i][1], newMap[i][2], newMap[i][0]);
        }

        int rows = (int) newMap[newMap.length - 1][1];
        int cols = (int) newMap[newMap.length - 1][2];

        // Creating all possible connections in the graph
        graph.connectVertices(180, rows, cols);

        // Check that each vertex has the correct number of edges
        assertEquals(3, graph.getVertices().get(0).getAllConnections().size());
    }
}
