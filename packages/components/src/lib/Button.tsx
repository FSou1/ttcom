import type { ButtonHTMLAttributes, ReactNode } from "react";
import "./Button.less";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary";
}

export function Button({ children, className = "", variant = "primary", ...props }: ButtonProps) {
  const classes = ["ttcom-button", `ttcom-button--${variant}`, className]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={classes} type="button" {...props}>
      {children}
    </button>
  );
}
