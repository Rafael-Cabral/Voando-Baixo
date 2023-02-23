package br.edu.inteli.cc.m5.dted;

import org.gdal.gdal.Band;
import org.gdal.gdal.Dataset;
import org.gdal.gdal.gdal;
import org.gdal.gdalconst.gdalconst;

public class DtedReader {

    public static void main(String[] args) {
        // Abrir o arquivo DTED
        gdal.AllRegister();
        Dataset dataset = gdal.Open("caminho/para/o/arquivo.dted", gdalconst.GA_ReadOnly);

        // Obter o objeto Band que contém os dados de altitude
        Band altitudeBand = dataset.GetRasterBand(1);

        // Obter as dimensões da matriz de altitude
        int cols = altitudeBand.getXSize();
        int rows = altitudeBand.getYSize();

        // Cria a matriz para armazenar os valores de altitude, latitude e longitude
        double[][] dtedData = new double[rows * cols][3];

        // Obter os dados de latitude e longitude usando as funções GetGeoTransform
        double[] geotransform = dataset.GetGeoTransform();
        double xOrigin = geotransform[0];
        double yOrigin = geotransform[3];
        double pixelWidth = geotransform[1];
        double pixelHeight = geotransform[5];

        // Ler os valores de altitude em cada pixel usando a função ReadRaster
        double[] buffer = new double[cols * rows];
        altitudeBand.ReadRaster(0, 0, cols, rows, buffer);

        // Preencher a matriz com os valores de altitude, latitude e longitude
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                double altitude = buffer[i * cols + j];
                double latitude = yOrigin + i * pixelHeight;
                double longitude = xOrigin + j * pixelWidth;
                int index = i * cols + j;
                dtedData[index][0] = altitude;
                dtedData[index][1] = latitude;
                dtedData[index][2] = longitude;
            }
        }

        // Imprimir os dados da matriz
        for (int i = 0; i < dtedData.length; i++) {
            System.out.printf("Altitude: %.2f, Latitude: %.6f, Longitude: %.6f%n", dtedData[i][0], dtedData[i][1], dtedData[i][2]);
        }

        // Fechar o objeto Dataset
        dataset.delete();
    }
}
