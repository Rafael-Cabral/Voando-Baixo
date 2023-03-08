package br.edu.inteli.cc.m5.grupo2;

import java.util.List;
import java.util.PriorityQueue;

public class AStar {
    public double Heuristica(Vertex start, Vertex end) {
        double d1 = Math.abs(end.getLatitude() - start.getLatitude());
        double d2 = Math.abs(end.getLongitude() - start.getLongitude());
        return Math.sqrt(Math.pow(d1, 2) + Math.pow(d2, 2));
    }

    public static List<Vertex> findPath(Vertex start, Vertex end) {
        //Lista de prioridade vazia
        PriorityQueue<Vertex> notVisited = new PriorityQueue<>();

        //Lista de prioridade com vértices vizitados
        PriorityQueue<Vertex> visited = new PriorityQueue<>();

        //Inicia com o ponto de partida
        visited.add(start);

        //Inicia o custo inicial
        start.setCustoDoInicio(0);

        //Inicia o custo estimado total
        //Condição que verifica, passo a passo qual o vértice mais barato
        //Condição que cria o caminho


    }

}
