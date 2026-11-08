import GeometryVisitor from "./GeometryVisitor";
import LineString from "./LineString";
import Point from "./Point";

export default class WktVisitor implements GeometryVisitor {
    private buffer: string;

    constructor() {
        this.buffer = "";
    }

    visitPoint(point: Point) {
        if (point.isEmpty()) {
            this.buffer = "POINT EMPTY";
            return;
        }
        this.buffer = "POINT(" + point.x() + " " + point.y() + ")";
    }

    visitLineString(lineString: LineString) {
        if (lineString.isEmpty()) {
            this.buffer = "LINESTRING EMPTY";
            return;
        }
        const coordinates: string[] = [];
        for (let i = 0; i < lineString.getNumPoints(); i++) {
            const point = lineString.getPointN(i);
            coordinates.push(point.x() + " " + point.y());
        }
        this.buffer = "LINESTRING(" + coordinates.join(",") + ")";
    }

    getResult(): string {
        return this.buffer;
    }
}