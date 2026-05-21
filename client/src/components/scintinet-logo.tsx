interface LogoProps {
  className?: string;
  height?: number;
  dark?: boolean;
}

export function ScintiNetLogo({ className, height = 40, dark = false }: LogoProps) {
  return (
    <img
      src="/images/logo-scintinet-officiel.png"
      alt="ScintiNet - L'exigence du propre et net !"
      style={{ height: `${height}px`, width: "auto" }}
      className={`object-contain ${dark ? "brightness-0 invert" : ""} ${className || ""}`}
      data-testid="img-logo"
    />
  );
}
