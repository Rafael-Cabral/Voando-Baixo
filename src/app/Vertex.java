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

    public int getQuantityOfConnections() {

        return this.connections.size();

    }

    public void addConnectionTo(Vertex arrivalVertex) {
        int weight = (int) (Math.abs(arrivalVertex.getAltitude() - this.altitude) + arrivalVertex.getAltitude());
        this.connections.add(new Edge(arrivalVertex, weight));
    }

    public String getAdjacencyListAsString() {

        int quantityOfConnections = this.getQuantityOfConnections();

        StringBuilder str = new StringBuilder(Integer.toString(this.id) + ": ");

        for (int i = 0; i < quantityOfConnections; i++) {

            str.append(getConnectionAt(i).getArrivalVertex().getId());

            if (i + 1 < quantityOfConnections) str.append(" -> ");

        }

        return str.toString();

    }

}
