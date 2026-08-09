import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MealCard } from "../components/UI/MealCard";

const alimentiFinti = [
  { id: 1, nome: "Pasta", quantita: 70, unita: "g" },
  { id: 2, nome: "Parmigiano", quantita: 60, unita: "g" },
];

describe("MealCard", () => {
  it(" should be closed by default if defaultOpen is not specified", () => {
    render(<MealCard mealType="Pranzo" items={alimentiFinti} />);
    expect(screen.getByRole("button")).toHaveAttribute(
      "aria-expanded",
      "false",
    );
  });

  it("should be open by default when defaultOpen is true", () => {
    render(<MealCard mealType="Pranzo" items={alimentiFinti} defaultOpen />);
    expect(screen.getByRole("button")).toHaveAttribute("aria-expanded", "true");
  });

  it("should open after a click on the header", async () => {
    const user = userEvent.setup();
    render(<MealCard mealType="Pranzo" items={alimentiFinti} />);

    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("aria-expanded", "false");

    await user.click(button);

    expect(button).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByText("Pasta")).toBeInTheDocument();
    expect(screen.getByText("Parmigiano")).toBeInTheDocument();
  });

  it("should close after a second click", async () => {
    const user = userEvent.setup();
    render(<MealCard mealType="Pranzo" items={alimentiFinti} defaultOpen />);

    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("aria-expanded", "true");

    await user.click(button);

    expect(button).toHaveAttribute("aria-expanded", "false");
  });
});
