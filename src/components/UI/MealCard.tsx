import { MealBadge } from "./MealBadge";
import { FoodItem } from "./FoodItem";
type Alimento = {
  id: number;
  nome: string;
  quantita: number;
  unita?: string;
};

type MealCardProps = {
  mealType: string;
  items: Alimento[];
};

export function MealCard({ mealType, items }: MealCardProps) {
  return (
    <div className="bg-gray-800 rounded-lg p-4 my-4 flex flex-col gap-1">
      <MealBadge meal={{ nome: mealType }} />

      
      {items.map((item) => (
        <FoodItem
          key={item.id}
          nome={item.nome}
          quantita={item.quantita}
          unita={item.unita}
        />
      ))}
    </div>
  );
}
