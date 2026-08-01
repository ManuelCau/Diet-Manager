import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "default" | "primary";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

export function Button({
  children,
  variant = "default",
  onClick,
  disabled,
}: ButtonProps) {
  const base = "px-4 py-2 rounded-lg text-sm font-medium transition";
  const variants = {
    default: "bg-gray-400 text-gray-200 hover:bg-gray-200",
    primary: "bg-blue-400 text-white hover:bg-teal-700",
  };

  return (
    <button
      className={`${base} ${variants[variant]}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
