package br.edu.inteli.cc.m5.grupo2;

import org.testng.annotations.Test;

import static org.testng.AssertJUnit.assertEquals;
import static org.testng.AssertJUnit.assertNotNull;

public class VertexTest {

    @Test
    private void getAttributes(){
        Vertex vertex = new Vertex(1, 1.0, 1.0, 100.0);

        assertEquals(1, vertex.getId());
        assertEquals(1.0, vertex.getLatitude());
        assertEquals(1.0, vertex.getLongitude());
        assertEquals(100.0, vertex.getAltitude());
    }

    @Test
    private void getConnectionAt(){
        Vertex vertex = new Vertex(1, 1.0, 1.0, 100.0);
        Vertex vertex2 = new Vertex(2, 2.0, 2.0, 200.0);

        vertex.addConnectionTo(vertex2);

        assertNotNull(vertex.getConnectionAt(0));
    }

    @Test
    private void getAllConnections(){
        Vertex vertex = new Vertex(1, 1.0, 1.0, 100.0);
        Vertex vertex2 = new Vertex(2, 2.0, 2.0, 200.0);
        Vertex vertex3 = new Vertex(3, 3.0, 3.0, 300.0);

        vertex.addConnectionTo(vertex2);
        vertex.addConnectionTo(vertex3);

        assertNotNull(vertex.getAllConnections());
    }

    @Test
    private void getNumberOfConnections(){
        Vertex vertex = new Vertex(1, 1.0, 1.0, 100.0);
        Vertex vertex2 = new Vertex(2, 2.0, 2.0, 200.0);
        Vertex vertex3 = new Vertex(3, 3.0, 3.0, 300.0);

        vertex.addConnectionTo(vertex2);
        vertex.addConnectionTo(vertex3);

        assertEquals(2, vertex.getNumberOfConnections());
    }

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
