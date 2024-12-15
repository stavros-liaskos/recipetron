import { expect, describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Footer from "../../components/Footer";

describe("Footer", () => {
  it("renders the Footer", () => {
    render(<Footer />);

    const link = screen.getByRole("link", {
      name: /Powered by 🥩 and/i,
    }) as HTMLAnchorElement;
    const img = screen.getByAltText("github");

    expect(screen.getByText("Powered by 🥩 and")).toBeTruthy();
    expect(link.href).toEqual("https://github.com/stavros-liaskos/recipetron");
    expect(img).toBeTruthy();
  });
});
