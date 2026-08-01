import { useState, useMemo } from "react";
import { SelectPersona } from "./SelectPersona";
import { DayNavigator } from "../components/DayNavigator";
import { MealCard } from "./UI/MealCard";
import { usePersone } from "../hooks/usePersone";
import { useDietPlan } from "../hooks/useDietPlan";

export function Home() {
  const { persone, loading: loadingPersone } = usePersone();
  const [personId, setPersonId] = useState<number | null>(null);
  const [selectedDayIndex, setSelectedDayIndex] = useState(0);

  // appena arrivano le persone dal DB, seleziona la prima come default
  const personaSelezionata =
    persone.find((p) => p.id === personId) ?? persone[0];
  const giornoId = selectedDayIndex + 1;

  const {
    righe,
    loading: loadingPiano,
    error,
  } = useDietPlan(personaSelezionata?.nome ?? "", giornoId);

  const pastiRaggruppati = useMemo(() => {
    const gruppi = new Map<string, typeof righe>();
    for (const riga of righe) {
      const lista = gruppi.get(riga.tipo_pasto) ?? [];
      lista.push(riga);
      gruppi.set(riga.tipo_pasto, lista);
    }
    return gruppi;
  }, [righe]);

  if (loadingPersone) return <p>Caricamento persone...</p>;

  return (
    <div>
      <SelectPersona
        selectedId={personaSelezionata?.id}
        onSelect={setPersonId}
        persone={persone}
      />
      <DayNavigator
        selectedIndex={selectedDayIndex}
        onChange={setSelectedDayIndex}
      />

      {loadingPiano && <p>Caricamento pasti...</p>}
      {error && <p>Errore: {error}</p>}

      {!loadingPiano &&
        !error &&
        Array.from(pastiRaggruppati.entries()).map(([tipoPasto, alimenti]) => (
          <MealCard
            key={tipoPasto}
            mealType={tipoPasto}
            items={alimenti.map((r, i) => ({
              id: i,
              nome: r.alimento ?? "Pasto libero",
              quantita: r.quantita ?? 0,
              unita: r.unita_misura ?? "",
            }))}
          />
        ))}
    </div>
  );
}
