package br.edu.inteli.cc.m5.grupo2;

import java.util.LinkedList;

public class Vertex {

    private final int id;
    private final double latitude;
    private final double longitude;
    private final double altitude;
    private final LinkedList<Edge> connections;

    public Vertex(int id, double latitude, double longitude, double altitude) {
        this.id = id;
        this.latitude = latitude;
        this.longitude = longitude;
        this.altitude = altitude;
        this.connections = new LinkedList<Edge>();
    }

    public int getId() {
        return this.id;
    }

    public double getLatitude() {
        return this.latitude;
    }

    public double getLongitude() {
        return this.longitude;
    }

    public double getAltitude() {
        return this.altitude;
    }

    public Edge getConnectionAt(int index) {
        return this.connections.get(index);
    }

    public LinkedList<Edge> getAllConnections() {
        return new LinkedList<Edge>(this.connections);
    }

    public int getNumberOfConnections() {
        return this.connections.size();
    }


    /*
     * Add a connection from a departure vertex to an arrival vertex by creating a new edge in connections adjacency list.
     * @param   Vertex   arrivalVertex
     */
    public void addConnectionTo(Vertex arrivalVertex) {
        int weight = (int) (Math.abs(arrivalVertex.getAltitude() - this.altitude) + arrivalVertex.getAltitude());
        this.connections.add(new Edge(arrivalVertex, weight));
    }

    /*
     * Return a string that represents the adjacency list of the vertex in a specific format.
     * @return   String   "0: 1 | 2 | 3 | ... | n"
     */
    public String getAdjacencyListAsString() {
        int quantityOfConnections = this.getNumberOfConnections();
        StringBuilder str = new StringBuilder(Integer.toString(this.id) + ": ");

        for (int i = 0; i < quantityOfConnections; i++) {
            str.append(getConnectionAt(i).getArrivalVertex().getId());
            if (i + 1 < quantityOfConnections) str.append(" | ");
        }

        return str.toString();
    }

    private double costFromStart;
    private double heuristicCost;
    private double totalCost;
    private Vertex cameFrom;

    public void setCostFromStart(double CostFromStart) {
        this.costFromStart = CostFromStart;
    }

    public double getTotalCost() {
        return totalCost;
    }

    public void setTotalCost(double totalCost) {
        this.totalCost = totalCost;
    }

    public double getHeuristicCost(Vertex end) {
        double d1 = Math.abs(latitude - end.getLatitude());
        double d2 = Math.abs(longitude - end.getLongitude());
        double d3 = Math.abs(altitude - end.getAltitude());
        return Math.sqrt(Math.pow(d1, 2) + Math.pow(d2, 2) + Math.pow(d3, 2));
    }
}
