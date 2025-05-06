import React from "react";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col">
      <header className="mx-56 my-4">
        <nav className="bg-black text-white flex justify-between p-3 px-20 rounded-lg">
          <h1 className="text-2xl font-mono">My Website</h1>
          <ul className="flex gap-5 py-1 font-mono">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
      <main className="mx-72">{children}</main>
      <footer className="mx-auto">
        &copy; 2022 My Website. All rights reserved.
      </footer>
    </div>
  );
}
