public class Main {
    public static void main(String[] args) {

        Graph graph = new Graph();

        Vertex a = graph.addVertex(20.32419, 12.54193, 1000);
        Vertex b = graph.addVertex(27.87621, 34.91028, 750);
        Vertex c = graph.addVertex(21.78290, 37.71652, 500);
        graph.addVertex(45.18927, 54.56391, 1250);
        graph.addVertex(32.37628, 72.87261, 1500);
        graph.addVertex(67.46345, 89.28140, 1750);

        a.addConnectionTo(b, 10);
        a.addConnectionTo(c, 45);

        System.out.println(a.getAdjacencyListAsString());
        System.out.println(a.getAllConnections());

    }
}
