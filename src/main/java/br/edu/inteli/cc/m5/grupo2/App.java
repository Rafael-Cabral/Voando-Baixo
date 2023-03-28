package br.edu.inteli.cc.m5.grupo2;

// Class used for tests
public class App {
    public static void main(String[] args) throws Exception {

        System.out.println("\n Initializing the microservice.\n");

        // Criando uma instância do rabbitmq.
        Recv recv = new Recv();

        // Inicializando o consumo das mensagens.
        recv.startConsuming();

    }
}
