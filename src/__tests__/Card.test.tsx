import { render, screen } from "@testing-library/react";
import Card from "@/components/ui/Card";

describe("Card Component", () => {
  const defaultProps = {
    title: "Test Title",
    description: "Test Description",
  };

  it("renders title correctly", () => {
    render(<Card {...defaultProps} />);
    expect(screen.getByText("Test Title")).toBeInTheDocument();
  });

  it("renders description correctly", () => {
    render(<Card {...defaultProps} />);
    expect(screen.getByText("Test Description")).toBeInTheDocument();
  });

  it("renders icon when provided", () => {
    render(<Card {...defaultProps} icon="/logos/1.svg" />);
    const icon = screen.getByRole("img");
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute("alt", "Test Title");
  });

  it("does not render icon when not provided", () => {
    render(<Card {...defaultProps} />);
    const icon = screen.queryByRole("img");
    expect(icon).not.toBeInTheDocument();
  });

  it("applies custom className", () => {
    const { container } = render(
      <Card {...defaultProps} className="custom-class" />
    );
    const card = container.firstChild;
    expect(card).toHaveClass("custom-class");
  });

  it("has default styling classes", () => {
    const { container } = render(<Card {...defaultProps} />);
    const card = container.firstChild;
    expect(card).toHaveClass("p-6", "rounded-xl", "bg-gray-50");
  });
});
