import { describe, it, expect } from "vitest";
import LineString from "../src/LineString";
import Point from "../src/Point";

describe("test LineString", () => {
    it("test default constructor", () => {
        const g = new LineString();
        expect(g.getNumPoints()).to.equal(0);

    });
    it("test constructor with points", () => {
        const g = new LineString([
            new Point([3.0, 4.0]),
            new Point([5.0, 6.0])
        ]);
        expect(g.getNumPoints()).to.equal(2);
    });

    it("should return 'LineString' for getType()", () => {
        const g = new LineString();
        expect(g.getType()).to.equal("LineString");

    });

    it("should return the correct point for getPointN", () => {
        const a = new Point([3.0, 4.0]);
        const b = new Point([5.0, 6.0]);
        const g = new LineString([a, b]);

        expect(g.getPointN(0)).to.equal(a);
        expect(g.getPointN(1)).to.equal(b);
    });
    describe("LineString", () => {
        it("translate points", () => {
            const ln = new LineString([
                new Point([0.0, 0.0]),
                new Point([1.0, 1.0])
            ]);
            ln.translate(2.0, 3.0);
            expect(ln.getPointN(0).getCoordinate()).to.deep.equal([2.0, 3.0]);
            expect(ln.getPointN(1).getCoordinate()).to.deep.equal([3.0, 4.0]);
        });

        it("test LineString vide", () => {
            const ln = new LineString();
            ln.translate(1.0, 1.0);
            expect(ln.isEmpty()).to.be.true;
        });
    })
})