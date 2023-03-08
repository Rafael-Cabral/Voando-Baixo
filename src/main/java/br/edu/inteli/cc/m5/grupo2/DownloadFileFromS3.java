package br.edu.inteli.cc.m5.grupo2;

import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.client.builder.AwsClientBuilder;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import com.amazonaws.services.s3.model.GetObjectRequest;
import com.amazonaws.services.s3.model.S3Object;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.nio.file.Files;
import java.nio.file.Paths;

public class DownloadFileFromS3 {
    public void downloadFileFromS3(String objectKey, String projectId) throws IOException {
        // Configura suas credenciais de acesso
        String accessKey = System.getenv("AWS_ACCESS_KEY_ID");
        String secretKey = System.getenv("AWS_SECRET_ACCESS_KEY");
        BasicAWSCredentials awsCredentials = new BasicAWSCredentials(accessKey, secretKey);

        // Configura o cliente do Amazon S3
        AmazonS3 s3Client = AmazonS3ClientBuilder.standard()
                .withEndpointConfiguration(new AwsClientBuilder.EndpointConfiguration("https://s3.amazonaws.com", System.getenv("AWS_REGION")))
                .withCredentials(new AWSStaticCredentialsProvider(awsCredentials))
                .build();

        // Especifique o nome do bucket e o caminho do objeto que você deseja baixar
        String bucketName = System.getenv("AWS_BUCKET_NAME");

        // Crie uma solicitação para baixar o objeto
        GetObjectRequest getObjectRequest = new GetObjectRequest(bucketName, objectKey);

        // Faça o download do objeto do Amazon S3
        S3Object s3Object = s3Client.getObject(getObjectRequest);

        createDownloadDirectory();

        // Especifique o caminho do arquivo local para salvar o objeto baixado
        String localFilePath = System.getProperty("user.dir") + "/downloads/" + projectId + ".dt2";

        // Salve o objeto baixado no arquivo local
        saveS3ObjectToLocalFile(s3Object, localFilePath);

    }

    private void createDownloadDirectory() throws IOException {
        Files.createDirectories(Paths.get(System.getProperty("user.dir") + "/downloads/"));
    }

    private void saveS3ObjectToLocalFile(S3Object s3Object, String localFilePath) throws IOException {
        File localFile = new File(localFilePath);
        OutputStream outputStream = new FileOutputStream(localFile);
        s3Object.getObjectContent().transferTo(outputStream);
        outputStream.close();
    }
}
