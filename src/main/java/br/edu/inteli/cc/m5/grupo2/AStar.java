package br.edu.inteli.cc.m5.grupo2;

import java.util.*;

public class AStar {
    public static double heuristic(Vertex start, Vertex end) {
        double d1 = Math.abs(end.getLatitude() - start.getLatitude());
        double latDistance = d1 * 111319.9;
        double d2 = Math.abs(end.getLongitude() - start.getLongitude());
        double lonDistance = d2 * 111319.9;
        return (Math.sqrt(Math.pow(latDistance, 2) + Math.pow(lonDistance, 2)));
    }

    public static List<Vertex> findPath(Vertex start, Vertex end) {
        //Red-black tree as data structure for not visited vertices
        TreeSet<Vertex> notVisited = new TreeSet<>();

        //Priority queue with visited vertices
        Set<Vertex> visited = new HashSet<>();

        //Start with the starting point
        notVisited.add(start);

        //Start with initial cost
        start.setStartCost(0);

        //Start with estimated total cost
        start.setEstimatedTotalCost(0.6 * start.getStartCost() + 0.4 * heuristic(start, end));

        //Condition that checks, step by step, for the cheapest vertex
        while (!notVisited.isEmpty()) {
            //Get the vertex with lowest cost from the queue
            Vertex current = notVisited.pollFirst();

            //Check if this vertex is the end
            if (current == end) {
                System.out.println(visited.size());
                return getPath(current);
            }

            //Add current vertex to visited
            visited.add(current);

            //Check current vertex's connections
            for (Edge edge : current.getConnections()) {

                Vertex neighbor = edge.getArrivalVertex();

                //Ignore if the neighbor has already been visited
                if (visited.contains(neighbor)) continue;

                //Calculate neighbor's cost
                double tentativeCost = current.getStartCost() + edge.getWeight();

                //If the neighbor hasn't been visited or the cost is lower
                if (!visited.contains(neighbor) || tentativeCost < neighbor.getStartCost()) {

                    //Set the start cost and estimated cost
                    neighbor.setStartCost(tentativeCost);
                    neighbor.setEstimatedTotalCost(0.6 * tentativeCost + 0.4 * heuristic(neighbor, end));

                    //Set the current vertex as parent node of the neighbor
                    neighbor.setParent(current);

                    //Add neighbor to priority queue
                    if (!visited.contains(neighbor)) notVisited.add(neighbor);
                }
            }
        }
        //Return null if there is no path
        return null;
    }

    //Condition that creates the path
    private static List<Vertex> getPath(Vertex vertex) {
        List<Vertex> path = new ArrayList<>();

        //Add the current vertex to the path
        path.add(vertex);

        //Add vertex's parents until it reaches the start
        while (vertex.getParent() != null) {
            vertex = vertex.getParent();
            path.add(0, vertex);
        }
        return path;
    }

}