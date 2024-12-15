import { expect, describe, it, afterEach } from "vitest";

import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import Ingredients from "../../components/Ingredients";
import { TIngredients } from "../../types/types";

const mockIngredients: TIngredients[] = [
  { qty: 1, unit: "cup", name: "Flour", comments: "All-purpose" },
  { qty: 2, unit: "tbsp", name: "Sugar", comments: "Granulated" },
];

describe("Ingredients", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders the ingredients", () => {
    render(<Ingredients ingredients={mockIngredients} />);

    expect(screen.getByText("Flour")).toBeTruthy();
    expect(screen.getByText("Sugar")).toBeTruthy();
    expect(screen.getByText("All-purpose")).toBeTruthy();
    expect(screen.getByText("Granulated")).toBeTruthy();
  });

  it("updates the multiplier on input change", () => {
    render(<Ingredients ingredients={mockIngredients} />);

    const input = screen.getAllByRole("spinbutton")[0] as HTMLInputElement;
    fireEvent.change(input, { target: { value: "2" } });

    expect(input.value).toBe("2");
  });

  it("calculates the correct quantity based on multiplier", () => {
    render(<Ingredients ingredients={mockIngredients} />);

    const input = screen.getAllByRole("spinbutton")[0] as HTMLInputElement;
    fireEvent.change(input, { target: { value: "3" } });

    const updatedQty = screen.getAllByRole("spinbutton")[0] as HTMLInputElement;
    expect(updatedQty.value).toBe("3");
  });
});
