import type { ReactNode } from "react";

interface ScreenProps {
  children: ReactNode;
}

export function Screen({ children }: ScreenProps) {
  return (
    <div className="min-h-screen bg-linear-to-t from-amber-200 to-yellow-50 flex justify-center ">
      <div className="max-w-120 mx-auto px-4 py-6 bg-linear-to-t from-amber-200 to-yellow-50">
        {children}
      </div>
    </div>
  );
}
