import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it, vi } from "vitest";

import { flushPromisesAndTimers } from "../../shared/test-utils/utils.js";

const mockFetchShortlink = vi.fn<never, Promise<string>>();

vi.mock("../../services/index.js", () => {
  return { fetchShortlink: mockFetchShortlink };
});

describe("App", () => {
  const setup = async () => {
    const { App } = await import("./component.js");

    return render(<App />);
  };

  it("render form", async () => {
    await setup();

    expect(screen.getByRole("form")).toBeTruthy();
  });

  it("submit origin link and get short link", async () => {
    mockFetchShortlink.mockResolvedValueOnce("/api/go/1");

    await setup();

    const textInput = screen.getByAltText("original link input");
    const form = screen.getByRole("form");

    fireEvent.keyDown(textInput, { code: "KeyA", key: "A" });

    fireEvent.submit(form);

    await flushPromisesAndTimers();

    expect(screen.getByRole("link").innerHTML).toEqual("/api/go/1");
  });
});
