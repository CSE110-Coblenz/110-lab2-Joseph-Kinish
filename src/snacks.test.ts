import { describe, it, expect } from "vitest";
import { snacks } from "./snacks";
import { music } from "./music";

describe("snacks", () => {
  it("should have at least 3 items", () => {
    expect(snacks.length).toBeGreaterThanOrEqual(3);
  });

  it("should include 'Chips'", () => {
    expect(snacks).toContain("Chips");
  });
});


describe("music", () => {
    it("should have at least 3 items", () => {
      expect(music.length).toBeGreaterThanOrEqual(3);
    });
  
    it("should include 'RNB'", () => {
      expect(music).toContain("RNB");
    });
  });