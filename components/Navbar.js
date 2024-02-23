import React from "react";
import "../src/app/globals.css";

import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link href="/home" passHref>
            Home
          </Link>
        </li>
        <li>
          <Link href="/news" passHref>
            News
          </Link>
        </li>
        <li>
          <Link href="/item-shop" passHref>
            Item Shop
          </Link>
        </li>
        <li>
          <Link href="/" passHref>
            Player Tracker
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
