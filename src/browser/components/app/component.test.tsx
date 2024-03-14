import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";

import { flushPromisesAndTimers } from "../../shared/test-utils/utils.js";

describe("App", () => {
  const setup = async () => {
    const { App } = await import("./component.js");

    return render(<App />);
  };

  it("render form", async () => {
    await setup();

    expect(screen.getAllByRole("heading")).toBeTruthy();
  });

  it("navigate to table page", async () => {
    await setup();

    const link = screen.getByRole("link");

    fireEvent.click(link);

    await flushPromisesAndTimers();

    expect(screen.getByRole("table")).toBeTruthy();
  });
});
