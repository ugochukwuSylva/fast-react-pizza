import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = function (e) {
    e.preventDefault();
    if (query === "") return;
    navigate(`order/${query}`);
    setQuery("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="focus: focus:opaciy-500  rounded-full bg-yellow-100 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring-yellow-50 sm:w-64 sm:focus:w-72"
      />
    </form>
  );
}

export default SearchBar;
