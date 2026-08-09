import { describe, it, expect, vi, afterEach } from "vitest";
import { getTodayIndex } from "../timeRanges/days";

describe("getTodayIndex", () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it("restituisce 0 per Lunedi", () => {
    vi.setSystemTime(new Date("2026-01-05")); // un Lunedi
    expect(getTodayIndex()).toBe(0);
  });

  it("restituisce 6 per Domenica (non 0, come farebbe Date.getDay() da solo)", () => {
    vi.setSystemTime(new Date("2026-01-04")); // una Domenica
    expect(getTodayIndex()).toBe(6);
  });

  it("restituisce 5 per Sabato", () => {
    vi.setSystemTime(new Date("2026-01-03")); // un Sabato
    expect(getTodayIndex()).toBe(5);
  });
});
