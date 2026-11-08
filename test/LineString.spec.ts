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
    describe("LineString", () => {
        it("clone les points en profondeur", () => {
            const p1 = new Point([0.0, 0.0]);
            const p2 = new Point([1.0, 1.0]);
            const ln = new LineString([p1, p2]);
            const a = ln.clone();

            expect(a).to.not.equal(ln);
            expect(a.getNumPoints()).to.equal(2);
            expect(a.getPointN(0)).to.not.equal(p1);
            expect(a.getPointN(0).getCoordinate()).to.deep.equal([0.0, 0.0]);
            expect(a.getPointN(1).getCoordinate()).to.deep.equal([1.0, 1.0]);
        });

        it("est différente de l'original", () => {
            const ln = new LineString([new Point([0.0, 0.0])]);
            const a = ln.clone();
            a.translate(5.0, 5.0);
            expect(ln.getPointN(0).getCoordinate()).to.deep.equal([0.0, 0.0]);
            expect(a.getPointN(0).getCoordinate()).to.deep.equal([5.0, 5.0]);
        });
    })

    it("test getEnvelope", () => {
        const ln = new LineString([
            new Point([0.0, 1.0]),
            new Point([2.0, 0.0]),
            new Point([1.0, 3.0])
        ]);
        expect(ln.getEnvelope().toString()).to.equal("[0, 0, 2, 3]");
    });
    it("test getEnvelope sur LineString vide", () => {
        const ln = new LineString();
        expect(ln.getEnvelope().isEmpty()).to.be.true;
    });
})