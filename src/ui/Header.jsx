import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../features/order/SearchBar";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="flex items-center justify-between border-b border-stone-200 bg-yellow-400 px-4 py-3 uppercase sm:px-6">
      <Link to="/" className="tracking-widest">
        Fast React Pizza
      </Link>
      <SearchBar />
      <Username />
    </header>
  );
}

export default Header;
