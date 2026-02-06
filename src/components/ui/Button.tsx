"use client";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  variant = "primary",
  onClick,
  className = "",
  type = "button",
}: ButtonProps) {
  const baseStyles =
    "px-8 py-3 rounded-lg font-semibold transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-boring-blue focus-visible:ring-offset-2 focus-visible:ring-offset-black";
  const variants = {
    primary:
      "bg-boring-blue text-white hover:bg-blue-600 hover:scale-105",
    secondary:
      "border-2 border-boring-blue text-boring-blue hover:bg-boring-blue hover:text-white",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
