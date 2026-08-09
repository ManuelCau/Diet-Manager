import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MealCard } from "../components/UI/MealCard";

const alimentiFinti = [
  { id: 1, nome: "Pasta", quantita: 70, unita: "g" },
  { id: 2, nome: "Parmigiano", quantita: 60, unita: "g" },
];

describe("MealCard", () => {
  it("è chiusa di default se defaultOpen non è specificato", () => {
    render(<MealCard mealType="Pranzo" items={alimentiFinti} />);
    expect(screen.getByRole("button")).toHaveAttribute("aria-expanded", "false");
  });

  it("è aperta di default quando defaultOpen è true", () => {
    render(<MealCard mealType="Pranzo" items={alimentiFinti} defaultOpen />);
    expect(screen.getByRole("button")).toHaveAttribute("aria-expanded", "true");
  });

  it("si apre dopo un click sull'header", async () => {
    const user = userEvent.setup();
    render(<MealCard mealType="Pranzo" items={alimentiFinti} />);

    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("aria-expanded", "false");

    await user.click(button);

    expect(button).toHaveAttribute("aria-expanded", "true");
    // il contenuto è comunque presente nel DOM (per l'animazione),
    // ma ora il testo è effettivamente presente e corretto
    expect(screen.getByText("Pasta")).toBeInTheDocument();
    expect(screen.getByText("Parmigiano")).toBeInTheDocument();
  });

  it("si richiude al secondo click", async () => {
    const user = userEvent.setup();
    render(<MealCard mealType="Pranzo" items={alimentiFinti} defaultOpen />);

    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("aria-expanded", "true");

    await user.click(button);

    expect(button).toHaveAttribute("aria-expanded", "false");
  });
});