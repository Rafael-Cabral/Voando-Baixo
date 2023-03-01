package br.edu.inteli.cc.m5.grupo2;

import org.testng.annotations.Test;

import static org.testng.AssertJUnit.assertEquals;
import static org.testng.AssertJUnit.assertNotNull;

public class VertexTest {

    @Test // Tests creating a vertex
    private void getAttributes(){
        Vertex vertex = new Vertex(1, 1.0, 1.0, 100.0);

        assertEquals(1, vertex.getId());
        assertEquals(1.0, vertex.getLatitude());
        assertEquals(1.0, vertex.getLongitude());
        assertEquals(100.0, vertex.getAltitude());
    }

    /*
        This test two vertexes are created and vertex 1 is connected to vertex 2 and the method
        getConnectionAt is called to return the edge connecting these vertexes
     */
    @Test // Tests getting the connection of a vertex on number X
    private void getConnectionAt(){
        Vertex vertex = new Vertex(1, 1.0, 1.0, 100.0);
        Vertex vertex2 = new Vertex(2, 2.0, 2.0, 200.0);

        vertex.addConnectionTo(vertex2);

        assertNotNull(vertex.getConnectionAt(0));
    }

    /*
        3 vertexes are created and vertexes 2 and 3 are connected to vertex 1.
        Method getAllConnections is called to return all edges connecting to
        vertex 1
     */
    @Test // Tests getting all vertexes connected to one specific vertex
    private void getAllConnections(){
        Vertex vertex = new Vertex(1, 1.0, 1.0, 100.0);
        Vertex vertex2 = new Vertex(2, 2.0, 2.0, 200.0);
        Vertex vertex3 = new Vertex(3, 3.0, 3.0, 300.0);

        vertex.addConnectionTo(vertex2);
        vertex.addConnectionTo(vertex3);

        assertNotNull(vertex.getAllConnections());
    }

    /*
        3 vertexes are created and vertexes 2 and 3 are connected to vertex 1.
        Method getNumberOfConnections is called to check how many edges connect
        to vertex 1
     */
    @Test // Tests the number of connections of a vertex
    private void getNumberOfConnections(){
        Vertex vertex = new Vertex(1, 1.0, 1.0, 100.0);
        Vertex vertex2 = new Vertex(2, 2.0, 2.0, 200.0);
        Vertex vertex3 = new Vertex(3, 3.0, 3.0, 300.0);

        vertex.addConnectionTo(vertex2);
        vertex.addConnectionTo(vertex3);

        assertEquals(2, vertex.getNumberOfConnections());
    }

    /*
        2 vertexes are created and vertex 2 is connected to vertex 1.
        Method getWeight is called to get the weight of the edge
        and getArrivalVertex checks the other vertex connected to that edge
     */
    @Test // Tests the connection of two vertexes
    private void testConnection(){
        Vertex v1 = new Vertex(1, 1.0, 1.0, 100.0);
        Vertex v2 = new Vertex(2, 2.0, 2.0, 200.0);

        v1.addConnectionTo(v2);
        assertEquals(300, v1.getConnectionAt(0).getWeight());
        assertEquals(v2, v1.getConnectionAt(0).getArrivalVertex());
    }

    /*
     2 vertexes are created and vertex 2 is connected to vertex 1.
     Method getAdjacencyListAsString is called to return the adjacency list of vertex 1.
     */
    @Test // Tests the adjacency list of a vertex
    private void assureAdjacencyList(){
        Vertex v1 = new Vertex(1, 1.0, 1.0, 100.0);
        Vertex v2 = new Vertex(2, 2.0, 2.0, 200.0);

        v1.addConnectionTo(v2);

        assertEquals("1: 2", v1.getAdjacencyListAsString());
    }
}
