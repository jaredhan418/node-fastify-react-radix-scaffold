import { act } from "@testing-library/react";
import { vi } from "vitest";

export function flushPromisesAndTimers(): Promise<void> {
  vi.useFakeTimers();
  return act(
    () =>
      new Promise<void>((resolve) => {
        setTimeout(resolve, 1);
        vi.runAllTimers();
      }),
  );
}

export function asyncAct() {
  return act(
    () =>
      new Promise<void>((resolve) => {
        setTimeout(resolve, 0);
      }),
  );
}
