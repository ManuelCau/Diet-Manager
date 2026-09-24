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
  const base = "px-4 py-2 rounded-3xl text-sm font-medium transition";
  const variants = {
    default: "border-2 border-amber-950 text-amber-950 ",
    primary: "bg-amber-300 text-amber-950 ",
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
