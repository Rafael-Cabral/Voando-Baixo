package br.edu.inteli.cc.m5.grupo2;

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

    public void connectVertices(int distance) {

        double lat1 = this.vertices.get(0).getLongitude();
        double lat2 = this.vertices.get(this.vertices.size() - 1).getLatitude();
        double lon1 = this.vertices.get(0).getLongitude();
        double lon2 = this.vertices.get(this.vertices.size() - 1).getLongitude();

        double latDiff = Math.abs(lat1 - lat2);
        double latDistance = latDiff * 111319.9;

        double lonDiff = Math.abs(lon1 - lon2);
        double lonDistance = lonDiff * 111319.9;

        int y = (int) latDistance / distance;

        int x = (int) lonDistance / distance;

        int currentVertex = 0;
        for (int i = 0; i <= x; i++) {
            for (int j = 0; j <= y; j++) {
                if (i > 0 && i < x && j > 0 && j < y) {
                    this.addEdge(currentVertex, currentVertex - x - 2);
                    this.addEdge(currentVertex, currentVertex - x - 1);
                    this.addEdge(currentVertex, currentVertex - x);
                    this.addEdge(currentVertex, currentVertex - 1);
                    this.addEdge(currentVertex, currentVertex + 1);
                    this.addEdge(currentVertex, currentVertex + x);
                    this.addEdge(currentVertex, currentVertex + x + 1);
                    this.addEdge(currentVertex, currentVertex + x + 2);
                } else if (i == 0 && j > 0 && j < y) {
                    this.addEdge(currentVertex, currentVertex - 1);
                    this.addEdge(currentVertex, currentVertex + 1);
                    this.addEdge(currentVertex, currentVertex + x);
                    this.addEdge(currentVertex, currentVertex + x + 1);
                    this.addEdge(currentVertex, currentVertex + x + 2);
                } else if (i == x && j > 0 && j < y) {
                    this.addEdge(currentVertex, currentVertex - x - 2);
                    this.addEdge(currentVertex, currentVertex - x - 1);
                    this.addEdge(currentVertex, currentVertex - x);
                    this.addEdge(currentVertex, currentVertex - 1);
                    this.addEdge(currentVertex, currentVertex + 1);
                } else if (j == 0 && i > 0 && i < x) {
                    this.addEdge(currentVertex, currentVertex - x);
                    this.addEdge(currentVertex, currentVertex + 1);
                    this.addEdge(currentVertex, currentVertex + x + 1);
                    this.addEdge(currentVertex, currentVertex + x + 2);
                } else if (j == y && i > 0 && i < x) {
                    this.addEdge(currentVertex, currentVertex - x - 2);
                    this.addEdge(currentVertex, currentVertex - x - 1);
                    this.addEdge(currentVertex, currentVertex - 1);
                    this.addEdge(currentVertex, currentVertex + x);
                    this.addEdge(currentVertex, currentVertex + x + 1);
                } else if (i == 0 && j == 0) {
                    this.addEdge(currentVertex, currentVertex + 1);
                    this.addEdge(currentVertex, currentVertex + x + 1);
                    this.addEdge(currentVertex, currentVertex + x + 2);
                } else if (i == 0 && j < y) {
                    this.addEdge(currentVertex, currentVertex - 1);
                    this.addEdge(currentVertex, currentVertex + x);
                    this.addEdge(currentVertex, currentVertex + x + 1);
                } else if (i == x && j == 0) {
                    this.addEdge(currentVertex, currentVertex - x - 1);
                    this.addEdge(currentVertex, currentVertex - x);
                    this.addEdge(currentVertex, currentVertex + 1);
                } else if (i == x && j == y) {
                    this.addEdge(currentVertex, currentVertex - x - 2);
                    this.addEdge(currentVertex, currentVertex - x - 1);
                    this.addEdge(currentVertex, currentVertex - 1);
                }
                currentVertex++;
            }
        }
    }
}
