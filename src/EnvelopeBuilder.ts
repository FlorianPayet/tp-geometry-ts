import Coordinate from "./Coordinate";
import Envelope from "./Envelope";

export default class EnvelopeBuilder {
    private xMin: number;
    private yMin: number;
    private xMax: number;
    private yMax: number;

    constructor() {
        this.xMin = Number.POSITIVE_INFINITY;
        this.yMin = Number.POSITIVE_INFINITY;
        this.xMax = Number.NEGATIVE_INFINITY;
        this.yMax = Number.NEGATIVE_INFINITY;
    }

    insert(coordinate: Coordinate) {
        if (coordinate.length === 0) {
            return;
        }
        this.xMin = Math.min(this.xMin, coordinate[0]);
        this.yMin = Math.min(this.yMin, coordinate[1]);
        this.xMax = Math.max(this.xMax, coordinate[0]);
        this.yMax = Math.max(this.yMax, coordinate[1]);
    }

    build(): Envelope {
        if (this.xMin > this.xMax) {
            return new Envelope();
        }
        return new Envelope([this.xMin, this.yMin], [this.xMax, this.yMax]);
    }
}