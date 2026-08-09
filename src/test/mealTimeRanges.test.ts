import { describe, it, expect, vi, afterEach } from "vitest";
import { getMealTypeCorrente } from "../timeRanges/mealTimeRanges";

describe("getMealTypeCorrente", () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it("restituisce COLAZIONE alle 8:00", () => {
    vi.setSystemTime(new Date("2026-01-01T08:00:00"));
    expect(getMealTypeCorrente()).toBe("COLAZIONE");
  });

  it("restituisce PRANZO alle 13:05", () => {
    vi.setSystemTime(new Date("2026-01-01T13:05:00"));
    expect(getMealTypeCorrente()).toBe("PRANZO");
  });

  it("restituisce CENA alle 19:30", () => {
    vi.setSystemTime(new Date("2026-01-01T19:30:00"));
    expect(getMealTypeCorrente()).toBe("CENA");
  });

  it("gestisce correttamente il confine esatto tra due fasce (11:00)", () => {
    vi.setSystemTime(new Date("2026-01-01T11:00:00"));
    expect(getMealTypeCorrente()).toBe("PRANZO"); // non più SPUNTINO
  });

  it("non va in errore nelle ore notturne (es. 2:00)", () => {
    vi.setSystemTime(new Date("2026-01-01T02:00:00"));
    expect(getMealTypeCorrente()).toBe("COLAZIONE"); // fallback di default
  });
});
