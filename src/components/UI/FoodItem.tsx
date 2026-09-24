type FoodItemProps = {
  nome: string;
  quantita: number;
  unita?: string;
};

export function FoodItem({ nome, quantita, unita = "g" }: FoodItemProps) {
  return (
    <div className="flex justify-between text-shadow-amber-950 text-lg font-medium">
      <p>{nome}</p>
      <p className="text-amber-950 text-lg font-bold">
        {quantita} {unita}
      </p>
    </div>
  );
}
