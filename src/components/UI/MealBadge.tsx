type MealProps = {
  meal: {
    nome: string;
  };
  isOpen?: boolean;
};

export function MealBadge({ meal, isOpen }: MealProps) {
  return (
    <div className="bg-blue-800 flex items-center justify-between gap-2 rounded-lg px-4 py-2 w-full">
      <h2 className="text-gray-200 rounded-lg py-1 px-4  font-semibold text-center flex items-center justify-center">
        {meal.nome}
      </h2>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className={`size-5 text-gray-400 transition-transform duration-300 ${
          isOpen ? "rotate-180" : ""
        }`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m19.5 8.25-7.5 7.5-7.5-7.5"
        />
      </svg>
    </div>
  );
}
