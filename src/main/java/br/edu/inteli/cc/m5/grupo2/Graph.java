package br.edu.inteli.cc.m5.grupo2;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.LinkedList;
import java.util.PriorityQueue;

public class Graph {

    private final ArrayList<Vertex> vertices;
    private int nextVertexId = 0;

    public Graph() {
        this.vertices = new ArrayList<>();
    }

    public Vertex addVertex(double latitude, double longitude, double altitude) {
        Vertex vertex = new Vertex(nextVertexId++, latitude, longitude, altitude);
        this.vertices.add(vertex);
        return vertex;
    }

    public Vertex addVertex(Vertex vertex) {
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

    public void connectVertices(int intervalDistance, int rows, int cols) {

        // Amount of vertices per latitude (y) and longitude (x)
        double lat1 = this.vertices.get(0).getLatitude();
        double lat2 = this.vertices.get(this.vertices.size() - 1).getLatitude();
        double lon1 = this.vertices.get(0).getLongitude();
        double lon2 = this.vertices.get(this.vertices.size() - 1).getLongitude();

        double latDiff = Math.abs(Math.abs(lat1) - Math.abs(lat2));
        double latDistance = latDiff * 111319.9;

        double lonDiff = Math.abs(Math.abs(lon1) - Math.abs(lon2));
        double lonDistance = lonDiff * 111319.9;

        int y = (int) latDistance / intervalDistance;
        int x = (int) lonDistance / intervalDistance;

        // Loop to verify where it is possible to add new connections
        int currentVertex = 0;
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                if (i > 0 && i < rows - 1 && j > 0 && j < cols - 1) {
                    this.addEdge(currentVertex, currentVertex - cols);
                    this.addEdge(currentVertex, currentVertex - 1);
                    this.addEdge(currentVertex, currentVertex + 1);
                    this.addEdge(currentVertex, currentVertex + cols);
                } else if (i == 0 && j > 0 && j < cols - 1) {
                    this.addEdge(currentVertex, currentVertex - 1);
                    this.addEdge(currentVertex, currentVertex + 1);
                    this.addEdge(currentVertex, currentVertex + cols);
                } else if (i == rows - 1 && j > 0 && j < cols - 1) {
                    this.addEdge(currentVertex, currentVertex - cols);
                    this.addEdge(currentVertex, currentVertex - 1);
                    this.addEdge(currentVertex, currentVertex + 1);
                } else if (j == 0 && i > 0 && i < rows - 1) {
                    this.addEdge(currentVertex, currentVertex - cols);
                    this.addEdge(currentVertex, currentVertex + 1);
                    this.addEdge(currentVertex, currentVertex + cols);
                } else if (j == cols - 1 && i > 0 && i < rows - 1) {
                    this.addEdge(currentVertex, currentVertex - cols);
                    this.addEdge(currentVertex, currentVertex - 1);
                    this.addEdge(currentVertex, currentVertex + cols);
                } else if (i == 0 && j == 0) {
                    this.addEdge(currentVertex, currentVertex + 1);
                    this.addEdge(currentVertex, currentVertex + cols);
                } else if (i == 0 && j == cols - 1) {
                    this.addEdge(currentVertex, currentVertex - 1);
                    this.addEdge(currentVertex, currentVertex + cols);
                } else if (i == rows - 1 && j == 0) {
                    this.addEdge(currentVertex, currentVertex - cols);
                    this.addEdge(currentVertex, currentVertex + 1);
                } else if (i == rows - 1 && j == cols - 1) {
                    this.addEdge(currentVertex, currentVertex - cols);
                    this.addEdge(currentVertex, currentVertex - 1);
                }
                currentVertex++;
            }
        }
    }

    public LinkedList<Vertex> findPath(Vertex initial, Vertex arrival) {

        PriorityQueue<Vertex> queue = new PriorityQueue<>(new Comparator<Vertex>() {
            public int compare(Vertex o1, Vertex o2) {
                return Double.compare(o1.getTotalCost(), o2.getTotalCost());
            }
        });

        LinkedList<Vertex> path = new LinkedList<>();
        boolean pathFound = false;

        initial.setCostFromStart(0);
        initial.setTotalCost(initial.getHeuristicCost(arrival));

        queue.add(initial);
        
        return path;
    }
}
