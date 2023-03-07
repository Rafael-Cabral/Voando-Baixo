package br.edu.inteli.cc.m5.grupo2;

import org.jgrapht.GraphPath;
import org.jgrapht.alg.shortestpath.AStarShortestPath;
import org.jgrapht.graph.DefaultWeightedEdge;
import org.jgrapht.alg.interfaces.AStarAdmissibleHeuristic;

import java.util.LinkedList;

public class App {
    public static void main(String[] args) {
        Graph graph = new Graph();
        graph.addVertex(100.00, 100.00, 100.00);
        graph.addVertex(200.00, 200.00, 200.00);
        graph.addVertex(300.00, 300.00, 300.00);
        graph.addEdge(0, 1);
        graph.addEdge(1, 2);

        AStarAdmissibleHeuristic<String> heuristic = new AStarAdmissibleHeuristic<String>() {
            @Override
            public double getCostEstimate(String sourceVertex, String targetVertex) {
                // Implemente a heurística admissível aqui
                return 0.0;
            }
        };


        AStarShortestPath<Integer, DefaultWeightedEdge> aStar = new AStarShortestPath<>(graph, heuristic);
        GraphPath<Integer, DefaultWeightedEdge> path = aStar.getPath(0, 2);
        System.out.println(path.getVertexList());
    }
}
