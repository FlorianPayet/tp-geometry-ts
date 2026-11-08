import { describe, it, expect } from "vitest";
import EnvelopeBuilder from "../src/EnvelopeBuilder";
import Envelope from "../src/Envelope";

describe("test EnvelopeBuilder", () => {
    it("test builder vide", () => {
        const builder = new EnvelopeBuilder();
        const envelope = builder.build();
        expect(envelope.isEmpty()).to.be.true;
        expect(envelope.toString()).to.equal("[]");
    });

    it("test avec une seule coordonnée", () => {
        const builder = new EnvelopeBuilder();
        builder.insert([5.0, 6.0]);
        expect(builder.build().toString()).to.equal("[5, 6, 5, 6]");
    });

    it("test avec plusieurs coordonnées", () => {
        const builder = new EnvelopeBuilder();
        builder.insert([0.0, 1.0]);
        builder.insert([2.0, 0.0]);
        builder.insert([1.0, 3.0]);
        const envelope = builder.build();
        expect(envelope.getXmin()).to.equal(0.0);
        expect(envelope.getYmin()).to.equal(0.0);
        expect(envelope.getXmax()).to.equal(2.0);
        expect(envelope.getYmax()).to.equal(3.0);
        expect(envelope.toString()).to.equal("[0, 0, 2, 3]");
    });

    it("test avec coordonnées négatives", () => {
        const builder = new EnvelopeBuilder();
        builder.insert([-1.0, -2.0]);
        builder.insert([-3.0, 4.0]);
        expect(builder.build().toString()).to.equal("[-3, -2, -1, 4]");
    });

    it("ignore les coordonnées vides", () => {
        const builder = new EnvelopeBuilder();
        builder.insert([]);
        builder.insert([1.0, 2.0]);
        expect(builder.build().toString()).to.equal("[1, 2, 1, 2]");
    });

describe("test Envelope", () => {
    it("test constructor", () => {
        const e = new Envelope();
        expect(e.isEmpty()).to.be.true;
        expect(Number.isNaN(e.getXmin())).to.be.true;
        expect(Number.isNaN(e.getYmin())).to.be.true;
        expect(Number.isNaN(e.getXmax())).to.be.true;
        expect(Number.isNaN(e.getYmax())).to.be.true;
        expect(e.toString()).to.equal("[]");
    });

    it("test constructor avec coordonnées", () => {
        const e = new Envelope([0.0, 1.0], [2.0, 3.0]);
        expect(e.isEmpty()).to.be.false;
        expect(e.getXmin()).to.equal(0.0);
        expect(e.getYmin()).to.equal(1.0);
        expect(e.getXmax()).to.equal(2.0);
        expect(e.getYmax()).to.equal(3.0);
        expect(e.toString()).to.equal("[0, 1, 2, 3]");
    });
});
});