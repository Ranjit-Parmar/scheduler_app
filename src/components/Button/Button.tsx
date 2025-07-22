import type { ReactNode } from "react";
import clsx from "clsx";

type ButtonProps = {
  children: ReactNode;
  size?: "sm" | "md" | "lg";
  className?: string;
};

const Button = ({ children, size = "md", className = "" }: ButtonProps) => {
  const sizeClasses = {
    sm: "px-3 py-1 text-sm",
    md: "px-5 py-2 text-base",
    lg: "px-7 py-3 text-lg",
  };

  return (
    <button
      className={clsx(
        sizeClasses[size],
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
