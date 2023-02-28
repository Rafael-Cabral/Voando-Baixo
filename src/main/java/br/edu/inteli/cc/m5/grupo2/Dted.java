package br.edu.inteli.cc.m5.grupo2;

import org.gdal.gdal.Band;
import org.gdal.gdal.Dataset;
import org.gdal.gdal.gdal;
import org.gdal.gdalconst.gdalconst;

public class Dted {

    public static double[][] readDted(String filePath, int interval) {

        gdal.AllRegister();
        Dataset dataset = gdal.Open(filePath, gdalconst.GA_ReadOnly);
        Band altitudeBand = dataset.GetRasterBand(1);

        // Dimensions X and Y of the file
        int cols = altitudeBand.getXSize();
        int rows = altitudeBand.getYSize();

        // Creation of a matrix to hold the values of altitude, latitude, and longitude for each vertex
        double[][] data = new double[rows * cols][3];

        // Configuration variables of the file
        double[] geotransform = dataset.GetGeoTransform();
        double xOrigin = geotransform[0];
        double yOrigin = geotransform[3];
        double pixelWidth = geotransform[1];
        double pixelHeight = geotransform[5];

        // Read the values of altitude in each pixel
        double[] buffer = new double[cols * rows];
        altitudeBand.ReadRaster(0, 0, cols, rows, buffer);

        // Fill the matrix com os valores de altitude, latitude e longitude
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

        // Close the Dataset object
        dataset.delete();
        return data;
    }
}
