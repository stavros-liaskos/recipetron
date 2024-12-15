import { expect, describe, it, afterEach } from "vitest";
import {
  render,
  screen,
  fireEvent,
  cleanup,
  waitFor,
} from "@testing-library/react";
import Home from "../../pages";
import { TRecipe } from "../../types/types";

describe("Home", () => {
  afterEach(() => {
    cleanup();
  });
  it("renders the welcome message", () => {
    render(<Home />);
    expect(screen.getByText("Welcome to")).toBeTruthy();
    expect(screen.getByText("Recipetron")).toBeTruthy();
  });

  it("renders the FileUploader component", () => {
    render(<Home />);
    expect(screen.getByText("Upload your recipe")).toBeTruthy();
  });

  it("renders the RecipeRenderer component when a recipe is set", () => {
    const mockRecipe: TRecipe = {
      name: "Test Recipe",
      ingredients: [],
      comments: "",
    };
    render(<Home />);

    // Simulate setting a recipe
    fireEvent.click(screen.getByText("Upload your recipe"));
    fireEvent.change(screen.getByLabelText("file"), {
      target: {
        files: [
          new Blob([JSON.stringify(mockRecipe)], { type: "application/json" }),
        ],
      },
    });

    waitFor(() => {
      expect(screen.getByText("Test Recipe")).toBeTruthy();
    });
  });

  it("renders the Footer component", () => {
    render(<Home />);

    expect(screen.getByText("Powered by 🥩 and")).toBeTruthy();
  });
});
