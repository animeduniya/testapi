import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";

export default function AnimeDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [anime, setAnime] = useState(null);

  useEffect(() => {
    if (id) {
      axios.get(`https://animeapi.skin/api/anime/info/${id}`).then(({ data }) => setAnime(data));
    }
  }, [id]);

  if (!anime) return <p className="text-white text-center mt-10">Loading...</p>;

  return (
    <div className="bg-gray-900 text-white min-h-screen p-4">
      <h1 className="text-3xl font-bold text-center">{anime.title}</h1>
      
      <div className="flex flex-col md:flex-row mt-4">
        <img src={anime.image} alt={anime.title} className="w-64 rounded-lg mx-auto md:mx-0" />
        
        <div className="ml-4">
          <p><strong>Type:</strong> {anime.type}</p>
          <p><strong>Episodes:</strong> {anime.totalEpisodes}</p>
          <p><strong>Status:</strong> {anime.status}</p>
          <p><strong>Genres:</strong> {anime.genres.join(", ")}</p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-6">Episodes</h2>
      <div className="grid grid-cols-3 md:grid-cols-5 gap-2 mt-2">
        {anime.episodes.map((ep) => (
          <Link key={ep.id} href={`/watch/${ep.id}`} className="bg-gray-800 p-2 rounded-lg text-center hover:bg-gray-700">
            Episode {ep.number}
          </Link>
        ))}
      </div>
    </div>
  );
}
