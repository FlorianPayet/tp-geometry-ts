import { describe, it, expect } from "vitest";
import Point from "../src/Point";
import LineString from "../src/LineString";

describe("test Point", () => {
    it("test default constructor", () => {
        const p = new Point();
        expect(p.isEmpty()).to.equal(true);
        expect(Number.isNaN(p.x())).to.be.true;
        expect(Number.isNaN(p.y())).to.be.true;
    });
    it("test constructor with coordinates", () => {
        const p = new Point([3.0, 4.0]);
        expect(p.getCoordinate()).to.deep.equal([3.0, 4.0]);
        expect(p.x()).to.equal(3.0);
        expect(p.y()).to.equal(4.0);
    });
    it("should return 'Point' for getType()", () => {
        const p = new Point();
        expect(p.getType()).to.equal("Point");

    });
    it("test translate", () => {
        const p = new Point([3.0, 4.0]);
        expect(p.getCoordinate()).to.deep.equal([3.0, 4.0]);
        expect(p.isEmpty()).to.be.false;
        expect(p.x()).to.equal(3.0);
        expect(p.y()).to.equal(4.0);

    });
    it("vérifie si quand LineString est vide il plante", () => {
        const ln = new LineString();
        ln.translate(1.0, 1.0);
        expect(ln.isEmpty()).to.be.true;
    });
    it("test clone", () => {
        const p = new Point([2.0, 3.0]);
        const c = p.clone()
        expect(c).to.not.equal(p);
        expect(c.getCoordinate()).to.deep.equal([2.0, 3.0]);
    });
})




