package br.edu.inteli.cc.m5.grupo2;

import java.util.List;

public class AStar {
    public double Heuristica(Vertex start, Vertex end) {
        double d1 = Math.abs(end.getLatitude() - start.getLatitude());
        double d2 = Math.abs(end.getLongitude() - start.getLongitude());
        return Math.sqrt(Math.pow(d1, 2) + Math.pow(d2, 2));
    }

    public static List<Vertex> findPath(Vertex start, Vertex end) {



    }

}
