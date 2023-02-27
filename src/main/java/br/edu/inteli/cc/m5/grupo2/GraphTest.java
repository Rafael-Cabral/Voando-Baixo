package br.edu.inteli.cc.m5.grupo2;

import org.testng.annotations.Test;

import static org.testng.AssertJUnit.assertEquals;

public class GraphTest {

    @Test
    public void testConnectVertices() {
        String path = "src/main/resources/dted/SaoPaulo/W045_S23.dt2";
        double[][] newMap = Dted.readDted(path, 180);
        Graph graph = new Graph();
        for (double[] doubles : newMap) {
            graph.addVertex(doubles[1], doubles[2], doubles[0]);
        }
        graph.connectVertices(180);

        // Check that each vertex has the correct number of edges
        assertEquals(3, graph.getVertices().get(0).getAllConnections().size());
    }
}
