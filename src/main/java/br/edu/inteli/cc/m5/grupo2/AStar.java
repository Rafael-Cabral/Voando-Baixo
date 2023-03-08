package br.edu.inteli.cc.m5.grupo2;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.PriorityQueue;
import java.util.Set;

public class AStar {
    public static double heuristica(Vertex start, Vertex end) {
        double d1 = Math.abs(end.getLatitude() - start.getLatitude());
        double d2 = Math.abs(end.getLongitude() - start.getLongitude());
        return Math.sqrt(Math.pow(d1, 2) + Math.pow(d2, 2));
    }

    public static List<Vertex> findPath(Vertex start, Vertex end) {
        //Lista de prioridade vazia
        PriorityQueue<Vertex> notVisited = new PriorityQueue<>();

        //Lista de prioridade com vértices vizitados
        Set<Vertex> visited = new HashSet<>();

        //Inicia com o ponto de partida
        visited.add(start);

        //Inicia o custo inicial
        start.setCustoDoInicio(0);

        //Inicia o custo estimado total
        start.setCustoEstimadoTotal(heuristica(start, end));

        //Condição que verifica, passo a passo qual o vértice mais barato
        while(!visited.isEmpty()) {
            //Pega o vértice com menor custo da fila
            Vertex current = notVisited.poll();

            //Verifica se esse vértice é o final
            if (current == end) {
                return getPath(current);
            }

            //Adiciona o vértice atual ao visitados
            visited.add(current);

            //Verifica as conexões do vértice atual
            for (Edge edge : current.getAllConnections()) {
                Vertex neighbor = edge.getArrivalVertex();
                //Ignora se o vizinho já foi vizitado
                if (visited.contains(neighbor)) {
                    continue;
                }

                //Calcula o custo do vizinho
                //Se o vizinho não foi visitado ou se o custo for menor



            }

            //Retorna vazio se não houver caminho
            return null;
        }


        //Condição que cria o caminho


    }

}
