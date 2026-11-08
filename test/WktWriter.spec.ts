import { describe, it, expect } from "vitest";
import WktWriter from "../src/WktWriter";
import Geometry from "../src/Geometry";
import Point from "../src/Point";
import LineString from "../src/LineString";

describe("test WktWriter", () => {
    it("test point vide", () => {
        const writer = new WktWriter();
        expect(writer.write(new Point())).to.equal("POINT EMPTY");
    });

    it("test point", () => {
        const writer = new WktWriter();
        expect(writer.write(new Point([3.0, 4.0]))).to.equal("POINT(3 4)");
    });

    it("test points avec décimale", () => {
        const writer = new WktWriter();
        expect(writer.write(new Point([3.5, -4.25]))).to.equal("POINT(3.5 -4.25)");
    });
    

    it("test LineString vide", () => {
        const writer = new WktWriter();
        expect(writer.write(new LineString())).to.equal("LINESTRING EMPTY");
    });

    
    it("génére une erreur pour un type non supporté", () => {
        const writer = new WktWriter();
        expect(() => writer.write({} as Geometry)).to.throw(TypeError);
    });

    it("test LineString", () => {
        const writer = new WktWriter();
        const ln = new LineString([
            new Point([0.0, 0.0]),
            new Point([1.0, 1.0]),
            new Point([5.0, 5.0])
        ]);
        expect(writer.write(ln)).to.equal("LINESTRING(0 0,1 1,5 5)");
    });

});