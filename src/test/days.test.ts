import { describe, it, expect, vi, afterEach } from "vitest";
import { getTodayIndex } from "../timeRanges/days";

describe("getTodayIndex", () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it("should return 0 for Monday", () => {
    vi.setSystemTime(new Date("2026-01-05"));
    expect(getTodayIndex()).toBe(0);
  });

  it("should return 6 for Sunday ", () => {
    vi.setSystemTime(new Date("2026-01-04"));
    expect(getTodayIndex()).toBe(6);
  });

  it("should return 5 for Saturday", () => {
    vi.setSystemTime(new Date("2026-01-03"));
    expect(getTodayIndex()).toBe(5);
  });
});
