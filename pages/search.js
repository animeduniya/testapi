import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";

export default function SearchPage() {
  const router = useRouter();
  const { q } = router.query;
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (q) {
      axios.get(`https://animeapi.skin/api/anime/search/${q}`).then(({ data }) => setResults(data.results));
    }
  }, [q]);

  return (
    <div className="bg-gray-900 text-white min-h-screen p-4">
      <h1 className="text-3xl font-bold text-center">Search Results for "{q}"</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-6">
        {results.length > 0 ? (
          results.map((anime) => (
            <Link key={anime.id} href={`/anime/${anime.id}`} className="hover:opacity-80">
              <img src={anime.image} alt={anime.title} className="rounded-lg w-full h-48 object-cover" />
              <p className="text-sm mt-2">{anime.title}</p>
            </Link>
          ))
        ) : (
          <p className="text-center w-full">No results found.</p>
        )}
      </div>
    </div>
  );
}
