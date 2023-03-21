package br.edu.inteli.cc.m5.grupo2;

import ch.qos.logback.classic.Logger;
import ch.qos.logback.classic.LoggerContext;
import org.neo4j.driver.Record;
import org.neo4j.driver.*;
import org.neo4j.driver.exceptions.Neo4jException;
import org.slf4j.LoggerFactory;

import java.io.FileNotFoundException;
import java.util.List;
import java.util.Locale;
import java.util.Map;

public class Neo4j implements AutoCloseable {
    private final Driver driver;

    public Neo4j() {

        String uri = "neo4j://localhost:7687";
        String user = "neo4j";
        String password = "x5aG^RSZz!zetdlM19XsJEsa227GsC32";

        LoggerContext loggerContext = (LoggerContext)LoggerFactory.getILoggerFactory();
        Logger rootLogger = loggerContext.getLogger("io.netty");
        rootLogger.setLevel(ch.qos.logback.classic.Level.OFF);


        this.driver = GraphDatabase.driver(
                uri,
                AuthTokens.basic(user, password),
                Config.defaultConfig());

    }

    public void createVertices(Graph graph, int rows) throws FileNotFoundException {

        StringBuilder queryStr = new StringBuilder();

        queryStr.append(String.format(Locale.US, "CREATE (:Vertex { id: %d, latitude: %.5f, longitude: %.5f, altitude: %.5f })\n",
                graph.getVertices().get(0).getId(),
                graph.getVertices().get(0).getLatitude(),
                graph.getVertices().get(0).getLongitude(),
                graph.getVertices().get(0).getAltitude()));

        queryStr.append(String.format(Locale.US, "CREATE (:Vertex { id: %d, latitude: %.5f, longitude: %.5f, altitude: %.5f })\n",
                graph.getVertices().get(graph.getVertices().size() - 1).getId(),
                graph.getVertices().get(graph.getVertices().size() - 1).getLatitude(),
                graph.getVertices().get(graph.getVertices().size() - 1).getLongitude(),
                graph.getVertices().get(graph.getVertices().size() - 1).getAltitude()));

        queryStr.append(String.format(Locale.US, "CREATE (:Vertex { id: %d, latitude: %.5f, longitude: %.5f, altitude: %.5f })\n",
                graph.getVertices().get(rows).getId(),
                graph.getVertices().get(rows).getLatitude(),
                graph.getVertices().get(rows).getLongitude(),
                graph.getVertices().get(rows).getAltitude()));

        queryStr.append(String.format(Locale.US, "CREATE (:Vertex { id: %d, latitude: %.5f, longitude: %.5f, altitude: %.5f })\n",
                graph.getVertices().get(graph.getVertices().size() - rows).getId(),
                graph.getVertices().get(graph.getVertices().size() - rows).getLatitude(),
                graph.getVertices().get(graph.getVertices().size() - rows).getLongitude(),
                graph.getVertices().get(graph.getVertices().size() - rows).getAltitude()));

        Query query = new Query(queryStr.toString());

        try {

            Session session = driver.session(SessionConfig.forDatabase("neo4j"));

            Record record = session.executeWrite(tx -> tx.run(query).single());

            System.out.println("Graph persisted successfully.");

        } catch (Neo4jException exception) {

            throw exception;

        }
    }

    public void createVertex(Vertex vertex) {

        Query query = new Query(
                """
                        CREATE (vertex:Vertex {
                                id: $id,
                                latitude: $latitude,
                                longitude: $longitude,
                                altitude: $altitude,
                                connections: $connections
                            })
                            
                        RETURN vertex
                        """,
                Map.of(
                        "id",vertex.getId(),
                        "latitude", vertex.getLatitude(),
                        "longitude", vertex.getLongitude(),
                        "altitude", vertex.getAltitude(),
                        "connections", vertex.getAllConnections()));

        try {

            Session session = driver.session(SessionConfig.forDatabase("neo4j"));

            Record record = session.executeWrite(tx -> tx.run(query).single());

        } catch (Neo4jException exception) {

            throw exception;

        }

    }

    public void findVertex(int vertexId) {

        Query query = new Query(
                """
                        MATCH (vertex:Vertex)
                        WHERE vertex.id = $id
                        RETURN vertex
                        """,

                Map.of("id", vertexId));

        try {

            Session session = driver.session(SessionConfig.forDatabase("neo4j"));

            Record record = session.executeWrite(tx -> tx.run(query).single());

            System.out.println("Vertex found successfully: ");

            System.out.println("id: " + record.get("id").asString());
            System.out.println("latitude: " + record.get("latitude").asString());
            System.out.println("longitude: " + record.get("longitude").asString());
            System.out.println("altitude: " + record.get("altitude").asString());

        } catch (Neo4jException exception) {

            throw exception;

        }

    }

    public void connectVertex(Vertex vertexA) {

        vertexA.getAllConnections().forEach(connection -> {

            Vertex vertexB = connection.getArrivalVertex();

            Query query = new Query(
                    """
                            MERGE (vertexA:Vertex {
                                    id: $vertexA_id,
                                    latitude: $vertexA_latitude,
                                    longitude: $vertexA_longitude,
                                    altitude: $vertexA_altitude
                                })
                                
                            MERGE (vertexB:Vertex {
                                    id: $vertexB_id,
                                    latitude: $vertexB_latitude,
                                    longitude: $vertexB_longitude,
                                    altitude: $vertexB_altitude
                                })
                                
                            MERGE (vertexA)-[:CONNECT_TO]->(vertexB)
                            
                            RETURN vertexA, vertexB
                            """,
                    Map.of(
                            "vertexA_id", vertexA.getId(),
                            "vertexA_latitude", vertexA.getLatitude(),
                            "vertexA_longitude", vertexA.getLongitude(),
                            "vertexA_altitude", vertexA.getAltitude(),
                            "vertexB_id", vertexB.getId(),
                            "vertexB_latitude", vertexB.getLatitude(),
                            "vertexB_longitude", vertexB.getLongitude(),
                            "vertexB_altitude", vertexB.getAltitude()));

            try {

                Session session = driver.session(SessionConfig.forDatabase("neo4j"));

                List records = session.executeWrite(tx -> tx.run(query).list());

            } catch (Neo4jException exception) {

                throw exception;

            }

        });

    }

    public void deleteVertex(Vertex vertex) {

        Query query = new Query(
                """
                        MATCH (vertex:Vertex {
                                id: $id
                            })
                            
                        DETACH DELETE vertex
                        """,
                Map.of("id", vertex.getId()));

        try {

            Session session = driver.session(SessionConfig.forDatabase("neo4j"));

            Record record = session.executeWrite(tx -> tx.run(query).single());

            System.out.println("Vertex deleted successfully.");

        } catch (Neo4jException exception) {

            throw exception;

        }

    }

    public void updateVertex(int vertexId, Vertex updatedVertex) {

        Query query = new Query(
                """
                        MATCH (vertex:Vertex {
                                id: $id,
                            })
                        
                        SET vertex.latitude = $latitude,
                            vertex.longitude = $longitude,
                            vertex.altitude: $altitude
                            
                        RETURN vertex
                        """,
                Map.of(
                        "id", vertexId,
                        "latitude", updatedVertex.getLatitude(),
                        "longitude", updatedVertex.getLongitude(),
                        "altitude", updatedVertex.getAltitude()));

        try {

            Session session = driver.session(SessionConfig.forDatabase("neo4j"));

            Record record = session.executeWrite(tx -> tx.run(query).single());

            System.out.println("Vertex updated successfully.");

        } catch (Neo4jException exception) {

            throw exception;

        }

    }

    @Override
    public void close() {
        driver.close();
    }

}
