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

        // Configuration variables of the file
        double[] geotransform = dataset.GetGeoTransform();
        double xOrigin = geotransform[0];
        double yOrigin = geotransform[3];
        double pixelWidth = geotransform[1];
        double pixelHeight = geotransform[5];

        // Ammount of vertices needed to sum up to the distance of the interval
        double lat2 = yOrigin - 1 * pixelHeight;
        double lon2 = xOrigin - 1 * pixelHeight;

        double latDiff = Math.abs(Math.abs(xOrigin) - Math.abs(lon2));
        double latDistance = latDiff * 111319.9;

        double lonDiff = Math.abs(Math.abs(yOrigin) - Math.abs(lat2));
        double lonDistance = lonDiff * 111319.9;

        int y = (int) (interval / latDistance);
        int x = (int) (interval / lonDistance);

        // Creation of a matrix to hold the values of altitude, latitude, and longitude for each vertex
        double[][] data = new double[(rows/x) * (cols/y)][3];

        // Read the values of altitude in each pixel
        double[] buffer = new double[cols * rows];
        altitudeBand.ReadRaster(0, 0, cols, rows, buffer);

        // Fill the matrix with the values of each vertex
        int index = 0;
        for (int i = 0; i < rows - 1; i+= x) {
            for (int j = 0; j < cols - 1; j+= y) {
                double altitude = buffer[i * cols + j];
                double latitude = yOrigin + i * pixelHeight;
                double longitude = xOrigin + j * pixelWidth;
                data[index][0] = altitude;
                data[index][1] = latitude;
                data[index][2] = longitude;
                index++;
            }
        }

        dataset.delete();
        return data;
    }
}
