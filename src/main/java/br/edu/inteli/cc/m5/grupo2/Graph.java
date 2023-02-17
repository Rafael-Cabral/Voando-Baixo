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

     public void connectVertices() {
        for (int i = 0; i < vertexMatrix.length(); i++) {
            for (int j = i + 1; j < vertexMatrix[i].length(); j++) {
                //Qualquer nó que tenha 8 conexões
                if ((i > 0 && vertexMatrix[i].length() - 1) && (j > 0 && vertexMatrix[j].length() - 1)) {
                    vertexMatrix[i][j].addEdge(vertexMatrix.getId()[i][j], vertexMatrix.getId()[i - 1][j]);
                    vertexMatrix[i][j].addEdge(vertexMatrix.getId()[i][j], vertexMatrix.getId()[i + 1][j]);
                    vertexMatrix[i][j].addEdge(vertexMatrix.getId()[i][j], vertexMatrix.getId()[i][j - 1]);
                    vertexMatrix[i][j].addEdge(vertexMatrix.getId()[i][j], vertexMatrix.getId()[i][j + 1]);
                    vertexMatrix[i][j].addEdge(vertexMatrix.getId()[i][j], vertexMatrix.getId()[i - 1][j - 1]);
                    vertexMatrix[i][j].addEdge(vertexMatrix.getId()[i][j], vertexMatrix.getId()[i - 1][j + 1]);
                    vertexMatrix[i][j].addEdge(vertexMatrix.getId()[i][j], vertexMatrix.getId()[i + 1][j - 1]);
                    vertexMatrix[i][j].addEdge(vertexMatrix.getId()[i][j], vertexMatrix.getId()[i + 1][j + 1]);
                }
                //Qualquer nó lateral superior sem os extremos
                else if (i == 0 && j > 0 && j < (vertexMatrix[j].length() - 1)) {
                    vertexMatrix[i][j].addEdge(vertexMatrix.getId()[i][j], vertexMatrix.getId()[i][j + 1]);
                    vertexMatrix[i][j].addEdge(vertexMatrix.getId()[i][j], vertexMatrix.getId()[i][j - 1]);
                    vertexMatrix[i][j].addEdge(vertexMatrix.getId()[i][j], vertexMatrix.getId()[i + 1][j]);
                    vertexMatrix[i][j].addEdge(vertexMatrix.getId()[i][j], vertexMatrix.getId()[i + 1][j + 1]);
                    vertexMatrix[i][j].addEdge(vertexMatrix.getId()[i][j], vertexMatrix.getId()[i + 1][j - 1]);
                }
                //Qualquer nó lateral inferior sem os extremos
                else if (i == vertexMatrix[i].length() && j > 0 && j < (vertexMatrix[j].length() - 1)) {
                    vertexMatrix[i][j].addEdge(vertexMatrix.getId()[i][j], vertexMatrix.getId()[i][j + 1]);
                    vertexMatrix[i][j].addEdge(vertexMatrix.getId()[i][j], vertexMatrix.getId()[i][j - 1]);
                    vertexMatrix[i][j].addEdge(vertexMatrix.getId()[i][j], vertexMatrix.getId()[i - 1][j]);
                    vertexMatrix[i][j].addEdge(vertexMatrix.getId()[i][j], vertexMatrix.getId()[i - 1][j + 1]);
                    vertexMatrix[i][j].addEdge(vertexMatrix.getId()[i][j], vertexMatrix.getId()[i - 1][j - 1]);
                }
                //Qualquer nó lateral esquerda sem os extremos
                else if (j == 0 && i > 0 && i < (vertexMatrix[i].length() - 1)) {
                    vertexMatrix[i][j].addEdge(vertexMatrix.getId()[i][j], vertexMatrix.getId()[i + 1][j]);
                    vertexMatrix[i][j].addEdge(vertexMatrix.getId()[i][j], vertexMatrix.getId()[i - 1][j]);
                    vertexMatrix[i][j].addEdge(vertexMatrix.getId()[i][j], vertexMatrix.getId()[i][j + 1]);
                    vertexMatrix[i][j].addEdge(vertexMatrix.getId()[i][j], vertexMatrix.getId()[i + 1][j + 1]);
                    vertexMatrix[i][j].addEdge(vertexMatrix.getId()[i][j], vertexMatrix.getId()[i - 1][j + 1]);
                }
                //Qualquer nó lateral direita sem os extremos
                else if (j == vertexMatrix[j].length() && i > 0 && i < (vertexMatrix[i].length() - 1)) {
                    vertexMatrix[i][j].addEdge(vertexMatrix.getId()[i][j], vertexMatrix.getId()[i + 1][j]);
                    vertexMatrix[i][j].addEdge(vertexMatrix.getId()[i][j], vertexMatrix.getId()[i - 1][j]);
                    vertexMatrix[i][j].addEdge(vertexMatrix.getId()[i][j], vertexMatrix.getId()[i][j - 1]);
                    vertexMatrix[i][j].addEdge(vertexMatrix.getId()[i][j], vertexMatrix.getId()[i + 1][j - 1]);
                    vertexMatrix[i][j].addEdge(vertexMatrix.getId()[i][j], vertexMatrix.getId()[i - 1][j - 1]);
                }
                //Cria conexões nos vértices extremos
                else if (i == 0 && j == 0) {
                    vertexMatrix[i][j].addEdge(vertexMatrix.getId()[i][j], vertexMatrix.getId()[i][j + 1]);
                    vertexMatrix[i][j].addEdge(vertexMatrix.getId()[i][j], vertexMatrix.getId()[i + 1][j]);
                    vertexMatrix[i][j].addEdge(vertexMatrix.getId()[i][j], vertexMatrix.getId()[i + 1][j + 1]);
                }
                //Cria conexões nos vértices extremos
                else if (i == 0 && vertexMatrix[j].length()) {
                    vertexMatrix[i][j].addEdge(vertexMatrix.getId()[i][j], vertexMatrix.getId()[i][j - 1]);
                    vertexMatrix[i][j].addEdge(vertexMatrix.getId()[i][j], vertexMatrix.getId()[i + 1][j]);
                    vertexMatrix[i][j].addEdge(vertexMatrix.getId()[i][j], vertexMatrix.getId()[i + 1][j - 1]);

                }
                //Cria conexões nos vértices extremos
                else if (vertexMatrix[i].length() && j == 0) {
                    vertexMatrix[i][j].addEdge(vertexMatrix.getId()[i][j], vertexMatrix.getId()[i + 1][j]);
                    vertexMatrix[i][j].addEdge(vertexMatrix.getId()[i][j], vertexMatrix.getId()[i][j + 1]);
                    vertexMatrix[i][j].addEdge(vertexMatrix.getId()[i][j], vertexMatrix.getId()[i + 1][j + 1]);
                }
                //Cria conexões nos vértices extremos
                else if (vertexMatrix[i].length() && vertexMatrix[j].length()) {
                    vertexMatrix[i][j].addEdge(vertexMatrix.getId()[i][j], vertexMatrix.getId()[i + 1][j]);
                    vertexMatrix[i][j].addEdge(vertexMatrix.getId()[i][j], vertexMatrix.getId()[i][j - 1]);
                    vertexMatrix[i][j].addEdge(vertexMatrix.getId()[i][j], vertexMatrix.getId()[i + 1][j - 1]);
                }
            }
        }
    }

}
