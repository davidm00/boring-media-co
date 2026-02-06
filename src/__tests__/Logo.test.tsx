import { render, screen } from "@testing-library/react";
import Logo from "@/components/ui/Logo";

describe("Logo Component", () => {
  it("renders white variant correctly", () => {
    render(<Logo variant="white" />);
    const logo = screen.getByRole("img");
    expect(logo).toHaveAttribute("src");
    expect(logo.getAttribute("src")).toContain("boring-logo-white-subtitle");
  });

  it("renders black variant correctly", () => {
    render(<Logo variant="black" />);
    const logo = screen.getByRole("img");
    expect(logo).toHaveAttribute("src");
    expect(logo.getAttribute("src")).toContain("bmc-blk-logo");
  });

  it("has correct alt text", () => {
    render(<Logo variant="white" />);
    const logo = screen.getByRole("img");
    expect(logo).toHaveAttribute("alt");
  });

  it("applies custom dimensions", () => {
    render(<Logo variant="black" width={200} height={100} />);
    const logo = screen.getByRole("img");
    expect(logo).toHaveAttribute("width", "200");
    expect(logo).toHaveAttribute("height", "100");
  });

  it("uses default dimensions when not specified", () => {
    render(<Logo variant="white" />);
    const logo = screen.getByRole("img");
    expect(logo).toHaveAttribute("width", "150");
    expect(logo).toHaveAttribute("height", "50");
  });
});
