import { expect, describe, it } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import RecipeRenderer from "../../components/RecipeRenderer";
import { TRecipe } from "../../types/types";

const mockRecipe: TRecipe = {
  name: "Test Recipe",
  ingredients: [
    { qty: 1, unit: "cup", name: "Flour", comments: "All-purpose" },
    { qty: 2, unit: "tbsp", name: "Sugar", comments: "Granulated" },
  ],
  comments: "This is a test recipe",
};

describe("RecipeRenderer", () => {
  it("renders without data without crashing", () => {
    // @ts-expect-error Testing the component without props
    render(<RecipeRenderer />);
  });
  it("renders the recipe name", () => {
    render(<RecipeRenderer {...mockRecipe} />);

    expect(screen.getByText("Test Recipe")).toBeTruthy();
    expect(screen.getByText("Flour")).toBeTruthy();
    expect(screen.getByText("Sugar")).toBeTruthy();
    expect(screen.getByText("This is a test recipe")).toBeTruthy();
  });

  it("updates the multiplier on input change", () => {
    render(<RecipeRenderer {...mockRecipe} />);

    const input = screen.getAllByRole("spinbutton")[0] as HTMLInputElement;
    fireEvent.change(input, { target: { value: "2" } });

    expect(input.value).toEqual("2");
  });
});
