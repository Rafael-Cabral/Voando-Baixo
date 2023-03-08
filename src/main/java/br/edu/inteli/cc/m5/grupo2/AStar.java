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
        while (!visited.isEmpty()) {
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
                double custoTentativo = current.getCustoDoInicio() + edge.getWeight();

                //Se o vizinho não foi visitado ou se o custo for menor
                if (!visited.contains(neighbor) || custoTentativo < neighbor.getCustoDoInicio()) {
                    //Define o custo do inicio e o   estimado
                    neighbor.setCustoDoInicio(custoTentativo);
                    neighbor.setCustoEstimadoTotal(custoTentativo + heuristica(neighbor, end));

                    //Define o vértice atual como nó pai do vizinho
                    neighbor.setPai(current);

                    //Adiciona o vizinho na fila de prioridade
                    if (!visited.contains(neighbor)) {
                        visited.add(neighbor);
                    }
                }

            }


        }
        //Retorna vazio se não houver caminho
        return null;

    }
        //Condição que cria o caminho
    private static List<Vertex> getPath(Vertex vertice){
        List<Vertex> caminho = new ArrayList<>();

        //Adicina o vértice atual ao caminho
        //Adiciona os pais do vértice até chegar no inicio


    }





}
