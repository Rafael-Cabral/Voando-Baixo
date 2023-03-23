import { lineString, length, along } from "@turf/turf";

export function interpolateVertices(vertices, interval) {

	const lineStringCoordinates = vertices.map(v => [v.longitude, v.latitude, v.altitude]);
	const line = lineString(lineStringCoordinates);
	const lineLength = length(line, {units: "kilometers"});
	const steps = Math.ceil(lineLength / interval);
  
	const interpolatedVertices = [];
	for (let step = 0; step <= steps; step++) {

		const currentDistance = step * interval;
		const interpolatedPoint = along(line, currentDistance, {units: "kilometers"});
		const interpolatedVertex = {
			id: vertices[0].id + step,
			latitude: interpolatedPoint.geometry.coordinates[1],
			longitude: interpolatedPoint.geometry.coordinates[0],
			altitude: interpolatedPoint.geometry.coordinates[2]
		};
		interpolatedVertices.push(interpolatedVertex);
	
	}
  
	return interpolatedVertices;

}