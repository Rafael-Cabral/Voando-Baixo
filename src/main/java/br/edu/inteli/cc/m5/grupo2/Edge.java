package br.edu.inteli.cc.m5.grupo2;

public class Edge {

    private final Vertex arrivalVertex;
    private final int weight;

    public Edge(Vertex arrivalVertex, int weight) {
        this.arrivalVertex = arrivalVertex;
        this.weight = weight;
    }

    public Vertex getArrivalVertex() {
        return this.arrivalVertex;
    }

    public int getWeight() {
        return this.weight;
    }

}
