import { describe, it, expect, vi } from "vitest";
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { DayNavigator } from "../components/DayNavigator";

describe("DayNavigator", () => {
  it("mostra il giorno corrispondente all'indice selezionato", () => {
    render(
      React.createElement(DayNavigator, {
        selectedIndex: 0,
        onChange: () => {},
      }),
    );
    expect(screen.getByText("Lunedi")).toBeInTheDocument();
  });

  it("chiama onChange con l'indice successivo cliccando la freccia avanti", async () => {
    const onChange = vi.fn();
    const user = userEvent.setup();
    render(React.createElement(DayNavigator, { selectedIndex: 0, onChange }));

    const [, nextButton] = screen.getAllByRole("button");
    await user.click(nextButton);

    expect(onChange).toHaveBeenCalledWith(1);
  });

  it("fa il wrap-around da Domenica a Lunedi cliccando avanti", async () => {
    const onChange = vi.fn();
    const user = userEvent.setup();
    render(React.createElement(DayNavigator, { selectedIndex: 6, onChange }));

    const [, nextButton] = screen.getAllByRole("button");
    await user.click(nextButton);

    expect(onChange).toHaveBeenCalledWith(0);
  });

  it("fa il wrap-around da Lunedi a Domenica cliccando indietro", async () => {
    const onChange = vi.fn();
    const user = userEvent.setup();
    render(React.createElement(DayNavigator, { selectedIndex: 0, onChange }));

    const [prevButton] = screen.getAllByRole("button");
    await user.click(prevButton);

    expect(onChange).toHaveBeenCalledWith(6);
  });
});
