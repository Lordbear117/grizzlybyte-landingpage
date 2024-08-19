"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="px-4 lg:px-6 h-14 flex items-center sticky top-0 z-50 bg-white">
      <Link
        href="#"
        className="flex items-center justify-center"
        prefetch={false}
      >
        <Image src="/grizzlybyte-logo.svg" alt="grizzlybyte logo" width={175} height={125} />
      </Link>
      <nav className="ml-auto hidden md:flex gap-4 sm:gap-6">
        <Link
          href="#"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Services
        </Link>
        <Link
          href="#"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Team
        </Link>
        <Link
          href="#"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Portfolio
        </Link>
        <Link
          href="#"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Contact
        </Link>
      </nav>
      <button
        className="md:hidden flex items-center ml-auto p-2"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation"
      >
        <span className="sr-only">Open menu</span>
        <svg
          className="h-6 w-6 text-gray-700"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
      <div
        className={`md:hidden fixed inset-0 bg-white shadow-lg transform transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col p-4">
          <Link
            href="#"
            className="py-2 text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link
            href="#"
            className="py-2 text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
            onClick={() => setIsOpen(false)}
          >
            Team
          </Link>
          <Link
            href="#"
            className="py-2 text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
            onClick={() => setIsOpen(false)}
          >
            Portfolio
          </Link>
          <Link
            href="#"
            className="py-2 text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
