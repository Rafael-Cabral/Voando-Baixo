package br.edu.inteli.cc.m5.grupo2;

import org.gdal.gdal.Band;
import org.gdal.gdal.Dataset;
import org.gdal.gdal.gdal;
import org.gdal.gdalconst.gdalconst;

import java.util.Arrays;
import java.util.Comparator;

public class Dted {

    public static double[][] readDted(String filePath, double intervalMeters) {

        // Abrir o arquivo DTED
        gdal.AllRegister();
        Dataset dataset = gdal.Open(filePath, gdalconst.GA_ReadOnly);

        // Obter o objeto Band que contém os dados de altitude
        Band altitudeBand = dataset.GetRasterBand(1);

        // Obter as dimensões da matriz de altitude
        int cols = altitudeBand.getXSize();
        int rows = altitudeBand.getYSize();

        // Obter os dados de latitude e longitude usando as funções GetGeoTransform
        double[] geotransform = dataset.GetGeoTransform();
        double xOrigin = geotransform[0];
        double yOrigin = geotransform[3];
        double pixelWidth = geotransform[1];
        double pixelHeight = geotransform[5];

        // Calcular o número de pontos que serão lidos a cada intervalo de metros
        int intervalRows = (int) Math.ceil(intervalMeters / Math.abs(pixelHeight));
        int intervalCols = (int) Math.ceil(intervalMeters / Math.abs(pixelWidth));

        // Criar a matriz para armazenar os valores de altitude, latitude e longitude
        int numRows = (int) Math.ceil(rows / (double) intervalRows);
        int numCols = (int) Math.ceil(cols / (double) intervalCols);
        double[][] data = new double[numRows * numCols][3];

        // Ler os valores de altitude em cada pixel dentro do intervalo desejado usando a função ReadRaster
        double[] buffer = new double[intervalRows * intervalCols];
        int index = 0;
        for (int i = 0; i < rows; i += intervalRows) {
            for (int j = 0; j < cols; j += intervalCols) {
                altitudeBand.ReadRaster(j, i, intervalCols, intervalRows, buffer);
                double altitude = buffer[0];
                double latitude = yOrigin + i * pixelHeight;
                double longitude = xOrigin + j * pixelWidth;
                data[index][0] = altitude;
                data[index][1] = latitude;
                data[index][2] = longitude;
                index++;
            }
        }

        // Fechar o objeto Dataset
        dataset.delete();
        return data;
    }

    public static double[][] mergeDted(double[][] firstArray, double[][] secondArray) {
        double[][] newArray = new double[firstArray.length + secondArray.length][3];
        System.arraycopy(firstArray, 0, newArray, 0, firstArray.length);
        System.arraycopy(secondArray, 0, newArray, firstArray.length, secondArray.length);
        return newArray;
    }

    public static double[][] sortDted(double[][] mapArray) {
        Arrays.sort(mapArray, new Comparator<double[]>() {
            public int compare(final double[] a, final double[] b) {
                if (a[0] < b[0]) {
                    return -1;
                } else if (a[0] > b[0]) {
                    return 1;
                } else if (a[1] < b[1]) {
                    return -1;
                } else if (a[1] > b[1]) {
                    return 1;
                } else {
                    return 0;
                }
            }
        });

        return mapArray;
    }
}
