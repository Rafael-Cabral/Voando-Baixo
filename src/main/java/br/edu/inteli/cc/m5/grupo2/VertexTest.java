package br.edu.inteli.cc.m5.grupo2;

import org.testng.annotations.Test;

import static org.testng.AssertJUnit.assertEquals;

public class VertexTest {

    @Test
    private void testConnection(){
        Vertex v1 = new Vertex(1, 1.0, 1.0, 100.0);
        Vertex v2 = new Vertex(2, 2.0, 2.0, 200.0);

        v1.addConnectionTo(v2);
        assertEquals(300, v1.getConnectionAt(0).getWeight());
        assertEquals(v2, v1.getConnectionAt(0).getArrivalVertex());
    }

    @Test
    private void assureAdjacencyList(){
        Vertex v1 = new Vertex(1, 1.0, 1.0, 100.0);
        Vertex v2 = new Vertex(2, 2.0, 2.0, 200.0);

        v1.addConnectionTo(v2);

        assertEquals("1: 2", v1.getAdjacencyListAsString());
    }
}
