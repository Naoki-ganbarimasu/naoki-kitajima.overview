"use client";
import Link from "next/link";
import MenuIcon from "./MenuIcon";
import NavLink from "./NavLink";
import { Button } from "./ui/components/Button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/components/Sheet";

export default function Header() {
  return (
    <header className="fixed flex items-center justify-between bg-[#189f43] px-4 py-3 shadow-md md:px-6 w-full z-50">
      <div className="flex items-center gap-4">
        <Link
          href="/"
          className="text-lg font-bold text-white"
          prefetch={false}
        >
          Acme Inc.
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <NavLink href="#" label="Top" />
          <NavLink href="#" label="Profile" />
          <NavLink href="#" label="Work" />
          <NavLink href="#" label="About" />
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <Button
          variant="outline"
          className="hidden md:inline-flex text-white border-[#d1d5db]"
        >
          Contact
        </Button>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="md:hidden text-white border-[#d1d5db]"
            >
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-64 sm:w-80 bg-[#00b894] shadow-md"
          >
            <div className="flex flex-col gap-6 p-6">
              <NavLink href="#" label="Top" />
              <NavLink href="#" label="Profile" />
              <NavLink href="#" label="Work" />
              <NavLink href="#" label="About" />
              <Button
                variant="outline"
                className="w-full text-white border-[#d1d5db]"
              >
                Contact
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
