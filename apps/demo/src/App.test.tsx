import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { App } from "./App";

describe("App", () => {
  it("renders component library buttons", () => {
    render(<App />);

    expect(screen.getByRole("button", { name: "Primary action" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Secondary action" })).toBeInTheDocument();
  });
});
