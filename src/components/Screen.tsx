import type { ReactNode } from "react";

interface ScreenProps {
  children: ReactNode;
}

export function Screen({ children }: ScreenProps) {
  return (
    <div className="min-h-screen bg-gray-900 flex justify-center ">
      <div className="max-w-120 mx-auto px-4 py-6 bg-gray-900">{children}</div>
    </div>
  );
}
