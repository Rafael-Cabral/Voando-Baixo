package br.edu.inteli.cc.m5.grupo2;

import org.gdal.gdal.Band;
import org.gdal.gdal.Dataset;
import org.gdal.gdal.gdal;
import org.gdal.gdalconst.gdalconst;

import java.util.Arrays;
import java.util.Comparator;

public class Dted {

    public static double[][] readDted(String filePath) {

        // Abrir o arquivo DTED
        gdal.AllRegister();
        Dataset dataset = gdal.Open(filePath, gdalconst.GA_ReadOnly);

        // Obter o objeto Band que contém os dados de altitude
        Band altitudeBand = dataset.GetRasterBand(1);

        // Obter as dimensões da matriz de altitude
        int cols = altitudeBand.getXSize();
        int rows = altitudeBand.getYSize();

        // Cria a matriz para armazenar os valores de altitude, latitude e longitude
        double[][] data = new double[rows * cols][3];

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
                data[index][0] = altitude;
                data[index][1] = latitude;
                data[index][2] = longitude;
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
