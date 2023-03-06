package br.edu.inteli.cc.m5.grupo2;

import java.util.LinkedList;

public class App {
    public static void main(String[] args) {
        Graph graph = new Graph();

        // criação dos vértices
        Vertex vertex1 = new Vertex(1, 0, 0, 0);
        Vertex vertex2 = new Vertex(2, 0, 1, 0);
        Vertex vertex3 = new Vertex(3, 0, 2, 0);
        Vertex vertex4 = new Vertex(4, 0, 3, 0);
        Vertex vertex5 = new Vertex(5, 0, 4, 0);

        // adição dos vértices no grafo
        graph.addVertex(vertex1);
        graph.addVertex(vertex2);
        graph.addVertex(vertex3);
        graph.addVertex(vertex4);
        graph.addVertex(vertex5);

        // conexão dos vértices em linha reta
        graph.addEdge(0, 1);
        graph.addEdge(1, 2);
        graph.addEdge(2, 3);
        graph.addEdge(3, 4);

        // busca do menor caminho entre o vértice 1 e o vértice 5
        LinkedList<Vertex> path = graph.findPath(vertex1, vertex5);

        // impressão do caminho encontrado
        System.out.println("Caminho encontrado:");
        //for (Vertex vertex : path) {
          //  System.out.println(vertex.getId());
        //}
    }
}
