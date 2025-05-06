import React from "react";

export default function Layout({ children }) {
  return (
    <div>
      <header>
        <h1>My Website</h1>
      </header>

      <main>{children}</main>

      <footer>
        <p>&copy; 2021 My Website. All rights reserved.</p>
        <a href="https://github.com/username/repository">Source Code</a>
      </footer>
    </div>
  );
}
