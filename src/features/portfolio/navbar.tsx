"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export function Navbar() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <nav className="fixed z-10 navbar bg-zinc-800 border-b-2 border-[#7A5C65] text-neutral-50 flex justify-center md:justify-end md:pr-8">
      <div className="flex item-center">
        <ul className="flex items-center gap-8 px-1 text-primary">
          <li className="px-2">
            <Link
              href="/#about"
              className={`hover:text-[#B28A94] ${
                activeSection === "about" ? "border-b-2 border-[#7A5C65]" : ""
              }`}
            >
              About me
            </Link>
          </li>
          <li>
            <Link
              href="/#projects"
              className={`hover:text-[#B28A94] ${
                activeSection === "projects"
                  ? "border-b-2 border-[#7A5C65]"
                  : ""
              }`}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/#contact"
              className={`hover:text-[#B28A94] ${
                activeSection === "contact" ? "border-b-2 border-[#7A5C65]" : ""
              }`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
