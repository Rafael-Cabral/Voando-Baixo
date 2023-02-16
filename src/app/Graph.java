import java.util.ArrayList;
import java.util.LinkedList;

public class Graph {

    private final ArrayList<Vertex> vertices;
    private int nextVertexId = 0;

    public Graph() {

        this.vertices = new ArrayList<Vertex>();

    }

    public Vertex addVertex(double latitude, double longitude, double altitude) {

        Vertex vertex = new Vertex(nextVertexId++, latitude, longitude, altitude);

        this.vertices.add(vertex);

        return vertex;

    }

    public void addEdge(int vertexId, int arrivalVertex) {

        this.vertices.get(vertexId).addConnectionTo(this.vertices.get(arrivalVertex));

    }

    public ArrayList<Vertex> getVertices() {

        return this.vertices;

    }

    public LinkedList<Edge> getConnectionsOf(int vertexId) {

        return this.vertices.get(vertexId).getAllConnections();

    }

}
