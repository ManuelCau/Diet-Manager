import { describe, it, expect } from "vitest";
import { groupMealsByType } from "../groupMealByType";

describe("groupMealsByType", () => {
  it("raggruppa correttamente righe con lo stesso tipo_pasto", () => {
    const righe = [
      { tipo_pasto: "PRANZO", alimento: "Pasta" },
      { tipo_pasto: "PRANZO", alimento: "Parmigiano" },
      { tipo_pasto: "CENA", alimento: "Uovo" },
    ];

    const risultato = groupMealsByType(righe);

    expect(risultato.size).toBe(2);
    expect(risultato.get("PRANZO")).toHaveLength(2);
    expect(risultato.get("CENA")).toHaveLength(1);
  });

  it("restituisce una mappa vuota con un array vuoto", () => {
    expect(groupMealsByType([]).size).toBe(0);
  });
});
