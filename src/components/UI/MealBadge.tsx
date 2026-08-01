type MealProps = {
  meal: {
    nome: string;
  };
};

export function MealBadge({ meal }: MealProps) {
  return (
    <div>
      <h2 className="bg-blue-800 text-gray-200 rounded-lg py-1 px-4 my-4 font-semibold text-center flex items-center justify-center">
        {meal.nome}
      </h2>
    </div>
  );
}
