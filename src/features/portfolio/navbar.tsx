import Link from "next/link";

export function Navbar() {
  return (
    <nav className="fixed z-10 navbar bg-zinc-800 border-b-4 border-pink-200 text-neutral-50 flex justify-center md:justify-end md:pr-8">
      <div className="flex item-center">
        <ul className="flex items-center gap-8 px-1 text-primary">
          <li className="px-2">
            <Link href="/" className=" hover:text-pink-200">
              Home
            </Link>
          </li>
          <li>
            <Link href="/#projects" className=" hover:text-pink-200">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/#contact" className=" hover:text-pink-200">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
