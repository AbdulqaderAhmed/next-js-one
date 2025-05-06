"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";

export default function Layout({ children }) {
  const pathname = usePathname();

  return (
    <section>
      <header className="bg-white shadow-md">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex space-x-8">
              <Link 
                className={`inline-flex items-center px-3 py-2 text-sm font-medium ${
                  pathname === "/" 
                    ? "text-blue-600 border-b-2 border-blue-600" 
                    : "text-gray-500 hover:text-gray-700 hover:border-b-2 hover:border-gray-300"
                }`} 
                href="/"
              >
                Home
              </Link>

              <Link
                className={`inline-flex items-center px-3 py-2 text-sm font-medium ${
                  pathname === "/about"
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-500 hover:text-gray-700 hover:border-b-2 hover:border-gray-300"
                }`}
                href="/about"
              >
                About
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <p>�� 2022 My Blog. All rights reserved.</p>
      </footer>
    </section>
  );
}
