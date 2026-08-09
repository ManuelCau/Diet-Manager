import { describe, it, expect, vi, afterEach } from "vitest";
import { getMealTypeCorrente } from "../timeRanges/mealTimeRanges";

describe("getMealTypeCorrente", () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it("should return COLAZIONE at 8:00", () => {
    vi.setSystemTime(new Date("2026-01-01T08:00:00"));
    expect(getMealTypeCorrente()).toBe("COLAZIONE");
  });

  it("should return PRANZO at 13:05", () => {
    vi.setSystemTime(new Date("2026-01-01T13:05:00"));
    expect(getMealTypeCorrente()).toBe("PRANZO");
  });

  it("should return CENA at 19:30", () => {
    vi.setSystemTime(new Date("2026-01-01T19:30:00"));
    expect(getMealTypeCorrente()).toBe("CENA");
  });

  it("should correctly handle the exact boundary between two time slots (11:00)", () => {
    vi.setSystemTime(new Date("2026-01-01T11:00:00"));
    expect(getMealTypeCorrente()).toBe("PRANZO");
  });

  it("should not error in the nighttime hours (e.g., 2:00)", () => {
    vi.setSystemTime(new Date("2026-01-01T02:00:00"));
    expect(getMealTypeCorrente()).toBe("COLAZIONE");
  });
});
