import Link from "next/link";

interface NavLinkProps {
  href: string;
  label: string;
}

export default function NavLink({ href, label }: NavLinkProps) {
  return (
    <Link
      href={href}
      className="text-sm font-medium text-[#d1d5db] hover:text-white transition-colors"
      prefetch={false}
    >
      {label}
    </Link>
  );
}
