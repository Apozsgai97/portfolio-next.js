import Link from "next/link";

export function Navbar() {
  return (
    <nav className="fixed z-10 navbar bg-zinc-700 border-b-4 border-pink-200">
      <div className="flex-1">
        <Link className=" hover:text-pink-200 btn-secondary text-lg p-1 font-bold" href=".">
          Adrienn Pozsgai
        </Link>
      </div>
      <div className="flex-none">
        <ul className="flex items-center gap-5 px-1 text-primary">
          <li className="px-2">
            <Link href="/" className="hover:bg-zinc-700 hover:text-pink-200">
              Home
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:bg-zinc-700 hover:text-pink-200">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:bg-zinc-700 hover:text-pink-200">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
