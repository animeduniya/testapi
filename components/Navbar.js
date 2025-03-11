import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      window.location.href = `/search?q=${query}`;
    }
  };

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold">AnimeWatch</Link>

      <form onSubmit={handleSearch} className="flex">
        <input
          type="text"
          placeholder="Search anime..."
          className="bg-gray-700 text-white px-4 py-2 rounded-l-md outline-none"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="bg-blue-500 px-4 py-2 rounded-r-md">Search</button>
      </form>
    </nav>
  );
}
