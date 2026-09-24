import { GIORNI } from "../timeRanges/days";

interface DayNavigatorProps {
  selectedIndex: number;
  onChange: (index: number) => void;
}
export function DayNavigator({ selectedIndex, onChange }: DayNavigatorProps) {
  const prevDay = () => {
    const newIndex =
      selectedIndex === 0 ? GIORNI.length - 1 : selectedIndex - 1;
    onChange(newIndex);
  };

  const nextDay = () => {
    const newIndex =
      selectedIndex === GIORNI.length - 1 ? 0 : selectedIndex + 1;
    onChange(newIndex);
  };

  return (
    <div className="flex items-center justify-between gap-4 rounded-lg px-4 py-2">
      <button
        onClick={prevDay}
        className="w-11 h-11 flex items-center justify-center border-2 rounded-3xl border-amber-950 text-amber-950 "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <span className="text-[15px] h-11 px-20 rounded-2xl flex items-center bg-amber-950 text-gray-200 font-medium">
        {GIORNI[selectedIndex]}
      </span>
      <button
        onClick={nextDay}
        className="w-11 h-11 flex items-center justify-center border-2 rounded-3xl border-amber-950 text-amber-950"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>
  );
}
