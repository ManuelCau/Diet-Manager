import { describe, it, expect, vi } from "vitest";
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { DayNavigator } from "../components/DayNavigator";

describe("DayNavigator", () => {
  it("should display the day corresponding to the selected index", () => {
    render(
      React.createElement(DayNavigator, {
        selectedIndex: 0,
        onChange: () => {},
      }),
    );
    expect(screen.getByText("Lunedi")).toBeInTheDocument();
  });

  it("should call onChange with the next index by clicking the forward arrow", async () => {
    const onChange = vi.fn();
    const user = userEvent.setup();
    render(React.createElement(DayNavigator, { selectedIndex: 0, onChange }));

    const [, nextButton] = screen.getAllByRole("button");
    await user.click(nextButton);

    expect(onChange).toHaveBeenCalledWith(1);
  });

  it("should wrap around from Sunday to Monday by clicking the forward arrow", async () => {
    const onChange = vi.fn();
    const user = userEvent.setup();
    render(React.createElement(DayNavigator, { selectedIndex: 6, onChange }));

    const [, nextButton] = screen.getAllByRole("button");
    await user.click(nextButton);

    expect(onChange).toHaveBeenCalledWith(0);
  });

  it("should wrap around from Monday to Sunday by clicking the backward arrow", async () => {
    const onChange = vi.fn();
    const user = userEvent.setup();
    render(React.createElement(DayNavigator, { selectedIndex: 0, onChange }));

    const [prevButton] = screen.getAllByRole("button");
    await user.click(prevButton);

    expect(onChange).toHaveBeenCalledWith(6);
  });
});
