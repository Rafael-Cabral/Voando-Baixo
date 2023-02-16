public class Main {
    public static void main(String[] args) {

        Graph graph = new Graph();

        graph.addVertex(20.32419, 12.54193, 1000);
        graph.addVertex(27.87621, 34.91028, 750);
        graph.addVertex(21.78290, 37.71652, 500);
        graph.addVertex(45.18927, 54.56391, 1250);
        graph.addVertex(32.37628, 72.87261, 1500);
        graph.addVertex(67.46345, 89.28140, 1750);

        graph.addEdge(0, 1);
        graph.addEdge(0, 2);
        graph.addEdge(1, 2);
        graph.addEdge(1, 3);
        graph.addEdge(2, 3);

        graph.getVertices().forEach(vertex -> {
            System.out.println(vertex.getId());
        });

        graph.getConnectionsOf(0).forEach(connection -> {
            System.out.println(connection.getArrivalVertex().getId());
        });

    }
}
