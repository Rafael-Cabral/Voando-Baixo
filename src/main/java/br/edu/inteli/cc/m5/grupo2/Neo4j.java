package br.edu.inteli.cc.m5.grupo2;

import org.neo4j.driver.Record;
import org.neo4j.driver.*;
import org.neo4j.driver.exceptions.Neo4jException;

import java.util.List;
import java.util.Map;
import java.util.logging.Level;
import java.util.logging.Logger;

public class Neo4j implements AutoCloseable {
    private static final Logger LOGGER = Logger.getLogger(Neo4j.class.getName());
    private final Driver driver;

    public Neo4j() {

        String uri = "neo4j+s://5eaa9547.databases.neo4j.io";
        String user = "neo4j";
        String password = "VDNwitjeUAHVXVbQwjTzdLCiL5uFfYIxOfkMqPRtvp0";

        this.driver = GraphDatabase.driver(
                uri,
                AuthTokens.basic(user, password),
                Config.defaultConfig());

    }

    public void createVertex(Vertex vertex) {

        Query query = new Query(
                """
                        CREATE (vertex:Vertex {
                                id: $id,
                                latitude: $latitude,
                                longitude: $longitude,
                                altitude: $altitude
                            })
                            
                        RETURN vertex
                        """,
                Map.of(
                        "id",vertex.getId(),
                        "latitude", vertex.getLatitude(),
                        "longitude", vertex.getLongitude(),
                        "altitude", vertex.getAltitude()));

        try {

            Session session = driver.session(SessionConfig.forDatabase("neo4j"));

            Record record = session.executeWrite(tx -> tx.run(query).single());

            System.out.println("Vertex created successfully.");

        } catch (Neo4jException exception) {

            LOGGER.log(Level.SEVERE, query + " raised an exception", exception);
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

            LOGGER.log(Level.SEVERE, query + " raised an exception", exception);
            throw exception;

        }

    }

    public void linkVertices(Vertex vertexA, Vertex vertexB) {

        Query query = new Query(
                """
                        MERGE (vertexA:Vertex) {
                                id: $vertexA_id,
                                latitude: $vertexA_latitude,
                                longitude: $vertexA_longitude,
                                altitude: $vertexA_altitude
                            })
                            
                        MERGE (vertexB:Vertex) {
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

            System.out.println("Vertices linked successfully.");

        } catch (Neo4jException exception) {

            LOGGER.log(Level.SEVERE, query + " raised an exception", exception);
            throw exception;

        }

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

            LOGGER.log(Level.SEVERE, query + " raised an exception", exception);
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

            LOGGER.log(Level.SEVERE, query + " raised an exception", exception);
            throw exception;

        }

    }

    @Override
    public void close() {
        driver.close();
    }

}
