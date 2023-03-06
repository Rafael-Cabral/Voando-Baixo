package br.edu.inteli.cc.m5.grupo2;

import java.util.LinkedList;

public class App {
    public static void main(String[] args) {
        Graph graph = new Graph();

        Vertex v1 = new Vertex(1, 0, 0, 0);
        Vertex v2 = new Vertex(2, 0, 0, 10);
        Vertex v3 = new Vertex(3, 0, 0, 20);
        Vertex v4 = new Vertex(4, 0, 0, 30);
        Vertex v5 = new Vertex(5, 0, 0, 40);

        graph.addVertex(v1);
        graph.addVertex(v2);
        graph.addVertex(v3);
        graph.addVertex(v4);
        graph.addVertex(v5);

        graph.addEdge(0, 1);
        graph.addEdge(1, 2);
        graph.addEdge(2, 3);
        graph.addEdge(3, 4);

        v1.addConnectionTo(v2);
        v2.addConnectionTo(v3);
        v3.addConnectionTo(v4);
        v4.addConnectionTo(v5);
        v1.addConnectionTo(v5);

        LinkedList<Vertex> path = graph.findPath(v1, v5);
        System.out.println(path);
    }
}
