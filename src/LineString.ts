import Geometry from "./Geometry";
import Point from "./Point";

export default class LineString implements Geometry {
    private points: Point[];

    constructor(points?: Point[]) {
        this.points = points ? points : [];
    }

    getType(): string {
        return "LineString";
    }

    getNumPoints(): number {
        return this.points.length;
    }

    getPointN(n: number): Point {
        return this.points[n];
    }
}