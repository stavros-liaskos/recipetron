import { expect, describe, it, vi, afterEach } from "vitest";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import FileUploader from "../../components/FileUploader";

describe("FileUploader", () => {
  afterEach(() => {
    cleanup();
  });
  const mockSetRecipe = vi.fn();

  it("renders the upload button", () => {
    render(<FileUploader setRecipe={mockSetRecipe} hasRecipe={false} />);
    expect(screen.getByText("Upload your recipe")).toBeTruthy();
  });

  it("renders the upload another recipe button when hasRecipe is true", () => {
    render(<FileUploader setRecipe={mockSetRecipe} hasRecipe={true} />);
    expect(screen.getByText("Upload another recipe")).toBeTruthy();
  });

  it("triggers file input click on button click", () => {
    render(<FileUploader setRecipe={mockSetRecipe} hasRecipe={false} />);

    const fileInput = screen.getByLabelText("file");
    const button = screen.getByText("Upload your recipe");
    fireEvent.click(button);

    expect(fileInput).toBeTruthy();
  });
});
