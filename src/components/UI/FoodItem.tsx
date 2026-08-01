type FoodItemProps = {
  nome: string;
  quantita: number;
  unita?: string;
};

export function FoodItem({ nome, quantita, unita = "g" }: FoodItemProps) {
  return (
    <div className="flex justify-between text-gray-200 text-lg font-medium">
      <p>{nome}</p>
      <p>{quantita} {unita}</p>
    </div>
  );
}