import Link from "next/link";

export default function Header() {
  return (
    <div className="px-4 lg:px-6 h-14 flex items-center border-b">
      <Link href="#" className="flex items-center justify-center">
        <span className="font-bold text-lg ">My Profile</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6 ">
        <Link
          href="#about"
          className="text-sm font-medium hover:underline underline-offset-4"
        >
          About
        </Link>
        <Link
          href="#skills"
          className="text-sm font-medium hover:underline underline-offset-4"
        >
          Skills
        </Link>
        <Link
          href="#projects"
          className="text-sm font-medium hover:underline underline-offset-4"
        >
          Projects
        </Link>
        <Link
          href="#contact"
          className="text-sm font-medium hover:underline underline-offset-4"
        >
          Contact
        </Link>
      </nav>
    </div>
  );
}
