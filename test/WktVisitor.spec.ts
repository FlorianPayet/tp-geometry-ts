import { describe, it, expect } from "vitest";
import WktVisitor from "../src/WktVisitor";
import Point from "../src/Point";
import LineString from "../src/LineString";

describe("test WktVisitor", () => {
    it("test résultat avant visite", () => {
        const visitor = new WktVisitor();
        expect(visitor.getResult()).to.equal("");
    });

    it("test point vide", () => {
        const visitor = new WktVisitor();
        new Point().accept(visitor);
        expect(visitor.getResult()).to.equal("POINT EMPTY");
    });

    it("test point", () => {
        const visitor = new WktVisitor();
        new Point([3.0, 4.0]).accept(visitor);
        expect(visitor.getResult()).to.equal("POINT(3 4)");
    });

    it("test point avec décimale", () => {
        const visitor = new WktVisitor();
        new Point([3.5, -4.25]).accept(visitor);
        expect(visitor.getResult()).to.equal("POINT(3.5 -4.25)");
    });

    it("test LineString vide", () => {
        const visitor = new WktVisitor();
        new LineString().accept(visitor);
        expect(visitor.getResult()).to.equal("LINESTRING EMPTY");
    });

    it("test LineString", () => {
        const visitor = new WktVisitor();
        const ln = new LineString([
            new Point([0.0, 0.0]),
            new Point([1.0, 1.0]),
            new Point([5.0, 5.0])
        ]);
        ln.accept(visitor);
        expect(visitor.getResult()).to.equal("LINESTRING(0 0,1 1,5 5)");
    });

    it("test reutilisation du visiteur", () => {
        const visitor = new WktVisitor();
        new Point([1.0, 2.0]).accept(visitor);
        new Point([3.0, 4.0]).accept(visitor);
        expect(visitor.getResult()).to.equal("POINT(3 4)");
    });
});