import GeometryVisitor from "./GeometryVisitor";
import LineString from "./LineString";
import Point from "./Point";

export default class LogGeometryVisitor implements GeometryVisitor {

    visitPoint(point: Point): void {
        if (point.isEmpty()) {
            console.log("Je suis un point vide.");
            return;
        }
        console.log("Je suis un point avec x=" + point.x() + " et y=" + point.y() + ".");
    }

    visitLineString(lineString: LineString): void {
        if (lineString.isEmpty()) {
            console.log("Je suis une polyligne vide.");
            return;
        }
        console.log("Je suis une polyligne définie par " + lineString.getNumPoints() + " point(s).");
    }
}