"use claient";
import React, { useState } from "react";

export function Sheet({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { isOpen, toggleOpen });
        }
        return child;
      })}
    </div>
  );
}

export function SheetTrigger({
  children,
  asChild = false,
  toggleOpen
}: {
  children: React.ReactNode;
  asChild?: boolean;
  toggleOpen: () => void;
}) {
  const trigger = React.cloneElement(children as React.ReactElement, {
    onClick: toggleOpen
  });

  return asChild ? trigger : <button onClick={toggleOpen}>{trigger}</button>;
}

export function SheetContent({
  children,
  isOpen,
  side = "right",
  className = ""
}: {
  children: React.ReactNode;
  isOpen: boolean;
  side?: string;
  className?: string;
}) {
  if (!isOpen) return null;

  const sideStyles = side === "right" ? "right-0" : "left-0";

  return (
    <div
      className={`fixed top-0 ${sideStyles} h-full bg-white shadow-lg ${className}`}
    >
      {children}
    </div>
  );
}
