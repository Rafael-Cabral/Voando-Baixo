package br.edu.inteli.cc.m5.grupo2;

import org.neo4j.driver.*;
import org.neo4j.driver.exceptions.Neo4jException;

import java.util.Map;
import java.util.logging.Level;
import java.util.logging.Logger;

public class Neo4j implements AutoCloseable {
    private static final Logger LOGGER = Logger.getLogger(Neo4j.class.getName());
    private final Driver driver;

    public Neo4j(String uri, String user, String password, Config config) {
        // The driver is a long living object and should be opened during the start of your application
        driver = GraphDatabase.driver(uri, AuthTokens.basic(user, password), config);
    }

    @Override
    public void close() {
        // The driver object should be closed before the application ends.
        driver.close();
    }

    public void createFriendship(final String person1Name, final String person2Name) {
        // To learn more about the Cypher syntax, see https://neo4j.com/docs/cypher-manual/current/
        // The Reference Card is also a good resource for keywords https://neo4j.com/docs/cypher-refcard/current/
        var query = new Query(
                """
                        CREATE (p1:Person { name: $person1_name })
                        CREATE (p2:Person { name: $person2_name })
                        CREATE (p1)-[:KNOWS]->(p2)
                        RETURN p1, p2
                        """,
                Map.of("person1_name", person1Name, "person2_name", person2Name));

        try (var session = driver.session(SessionConfig.forDatabase("neo4j"))) {
            // Write transactions allow the driver to handle retries and transient errors
            var record = session.executeWrite(tx -> tx.run(query).single());
            System.out.printf(
                    "Created friendship between: %s, %s%n",
                    record.get("p1").get("name").asString(),
                    record.get("p2").get("name").asString());
            // You should capture any errors along with the query and data for traceability
        } catch (Neo4jException ex) {
            LOGGER.log(Level.SEVERE, query + " raised an exception", ex);
            throw ex;
        }
    }

    public void findPerson(final String personName) {
        var query = new Query(
                """
                        MATCH (p:Person)
                        WHERE p.name = $person_name
                        RETURN p.name AS name
                        """,
                Map.of("person_name", personName));

        try (var session = driver.session(SessionConfig.forDatabase("neo4j"))) {
            var record = session.executeRead(tx -> tx.run(query).single());
            System.out.printf("Found person: %s%n", record.get("name").asString());
            // You should capture any errors along with the query and data for traceability
        } catch (Neo4jException ex) {
            LOGGER.log(Level.SEVERE, query + " raised an exception", ex);
            throw ex;
        }
    }

    public static void main(String... args) {
        // Aura queries use an encrypted connection using the "neo4j+s" protocol
        var uri = "neo4j+s://5eaa9547.databases.neo4j.io";

        var user = "neo4j";
        var password = "VDNwitjeUAHVXVbQwjTzdLCiL5uFfYIxOfkMqPRtvp0";

        try (var app = new Neo4j(uri, user, password, Config.defaultConfig())) {
            app.createFriendship("Alice", "David");
            app.findPerson("Alice");
        }
    }
}