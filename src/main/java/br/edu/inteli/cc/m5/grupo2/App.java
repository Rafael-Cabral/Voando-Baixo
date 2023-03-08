package br.edu.inteli.cc.m5.grupo2;

import com.rabbitmq.client.Channel;
import com.rabbitmq.client.Connection;

public class App {
    public static void main(String[] args) throws Exception {

        // Instanciando rabbitmq.
        Recv recv = new Recv();

        // Cria uma conexão com o RabbitMQ
        Connection connection = recv.createConnection();

        // Cria um canal para comunicação com o RabbitMQ
        Channel channel = recv.createChannel(connection);

        // Declara a fila a ser consumida
        recv.declareQueue(channel);

        // Inicia o consumo de mensagens da fila
        recv.consumeMessages(channel);

    }
}
