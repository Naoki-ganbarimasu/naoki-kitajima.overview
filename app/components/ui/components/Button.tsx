import React from "react";

interface ButtonProps {
  variant?: string;
  size?: string;
  children: React.ReactNode;
  className?: string;
}

export function Button({ variant, size, children, className }: ButtonProps) {
  const baseStyles = "px-4 py-2 rounded";
  const variantStyles = variant === "outline" ? "border-2 border-solid" : "";
  const sizeStyles = size === "icon" ? "p-2" : "";

  return (
    <button
      className={`${baseStyles} ${variantStyles} ${sizeStyles} ${className}`}
    >
      {children}
    </button>
  );
}
