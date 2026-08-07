import { MealBadge } from "./MealBadge";
import { FoodItem } from "./FoodItem";
import { useState } from "react";
type Alimento = {
  id: number;
  nome: string;
  quantita: number;
  unita?: string;
};

type MealCardProps = {
  mealType: string;
  items: Alimento[];
  defaultOpen?: boolean;
};

export function MealCard({
  mealType,
  items,
  defaultOpen = false,
}: MealCardProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="bg-gray-800 rounded-lg p-4 my-4 flex flex-col gap-1">
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <MealBadge meal={{ nome: mealType }} isOpen={isOpen} />
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen
            ? "grid-rows-[1fr] opacity-100 mt-2"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden flex flex-col gap-1">
          {items.map((item) => (
            <FoodItem
              key={item.id}
              nome={item.nome}
              quantita={item.quantita}
              unita={item.unita}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
