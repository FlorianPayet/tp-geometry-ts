import { describe, it, expect, vi, afterEach } from "vitest";
import LogGeometryVisitor from "../src/LogGeometryVisitor";
import Point from "../src/Point";
import LineString from "../src/LineString";

describe("test LogGeometryVisitor", () => {
    afterEach(() => {
        vi.restoreAllMocks();
    });

    it("test point vide", () => {
        const spy = vi.spyOn(console, "log").mockImplementation(() => { });
        new Point().accept(new LogGeometryVisitor());
        expect(spy).toHaveBeenCalledWith("Je suis un point vide.");
    });

    it("test point", () => {
        const spy = vi.spyOn(console, "log").mockImplementation(() => { });
        new Point([2.0, 3.0]).accept(new LogGeometryVisitor());
        expect(spy).toHaveBeenCalledWith("Je suis un point avec x=2 et y=3.");
    });

    it("test LineString vide", () => {
        const spy = vi.spyOn(console, "log").mockImplementation(() => { });
        new LineString().accept(new LogGeometryVisitor());
        expect(spy).toHaveBeenCalledWith("Je suis une polyligne vide.");
    });

    it("test LineString", () => {
        const spy = vi.spyOn(console, "log").mockImplementation(() => { });
        const ln = new LineString([
            new Point([0.0, 0.0]),
            new Point([1.0, 1.0]),
            new Point([5.0, 5.0])
        ]);
        ln.accept(new LogGeometryVisitor());
        expect(spy).toHaveBeenCalledWith("Je suis une polyligne définie par 3 point(s).");
    });
});