import { describe, expect, it } from "vitest";
import { formatLessVariables, toLessVariableName } from "../scripts/less-format.mjs";

describe("LESS token formatting", () => {
  it("formats token paths as LESS variable names", () => {
    expect(toLessVariableName(["color", "brand", "primary"])).toBe("@color-brand-primary");
  });

  it("formats generated token values as LESS declarations", () => {
    const output = formatLessVariables([
      { path: ["color", "brand", "primary"], value: "#2454ff" },
      { path: ["size", "radius", "control"], value: "6px" }
    ]);

    expect(output).toContain("@color-brand-primary: #2454ff;");
    expect(output).toContain("@size-radius-control: 6px;");
  });
});
