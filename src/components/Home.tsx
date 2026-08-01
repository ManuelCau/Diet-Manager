import { useState } from "react";
import { SelectPersona } from "./SelectPersona";
import { DayNavigator } from "../components/DayNavigator";
import { MealCard } from "./UI/MealCard";

const LISTA_PERSONE = [
  { id: 1, nome: "Manuel" },
  { id: 2, nome: "Anna" },
  { id: 3, nome: "Silvano" },
];

// dati finti, stessa "forma" che avrà la risposta di Supabase
const PASTO_FINTO = [
  { id: 1, nome: "Pasta (media)", quantita: 70, unita: "g" },
  { id: 2, nome: "Parmigiano", quantita: 60, unita: "g" },
  { id: 3, nome: "Verdure (media)", quantita: 200, unita: "g" },
];

export function Home() {
  const [personId, setPersonId] = useState(1);
  const [selectedDayIndex, setSelectedDayIndex] = useState(0);

  return (
    <div>
      <SelectPersona
        selectedId={personId}
        onSelect={setPersonId}
        persone={LISTA_PERSONE}
      />
      <DayNavigator
        selectedIndex={selectedDayIndex}
        onChange={setSelectedDayIndex}
      />
      <MealCard mealType="Pranzo" items={PASTO_FINTO} />
    </div>
  );
}
