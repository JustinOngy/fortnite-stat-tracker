import React from "react";
import "../src/app/globals.css";

import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo cursor-pointer">
        <Link href="/home">FNTRKER</Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link href="/news">News</Link>
        </li>
      </ul>
      <Link href="/">
        <button className="player_tracker-button " href="/" passHref>
          Track Player
        </button>
      </Link>
    </nav>
  );
};

export default Navbar;
