import Image from "next/image";
import { Strings } from "@/lib/strings";

interface LogoProps {
  variant: "black" | "white";
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}

export default function Logo({ variant, width = 150, height = 50, className, priority = false }: LogoProps) {
  const src =
    variant === "black"
      ? Strings.Assets.logos.black
      : Strings.Assets.logos.white;

  return (
    <Image
      src={src}
      alt={Strings.Meta.title}
      width={width}
      height={height}
      className={className}
      priority={priority}
    />
  );
}
