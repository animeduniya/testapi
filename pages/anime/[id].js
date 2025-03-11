import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Link from 'next/link';

export default function AnimeDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [anime, setAnime] = useState(null);

  useEffect(() => {
    if (id) {
      axios.get(`https://api.amvstr.me/anime/info/${id}`)
        .then(({ data }) => setAnime(data))
        .catch((error) => console.error("Error fetching anime details:", error));
    }
  }, [id]);

  if (!anime) return <p className="text-white text-center mt-10">Loading...</p>;

  return (
    <div className="bg-gray-900 text-white min-h-screen p-4">
      <h1 className="text-3xl font-bold text-center">{anime.title}</h1>
      <div className="flex flex-col items-center">
        <img src={anime.image} alt={anime.title} className="rounded-lg w-64 h-96 object-cover my-4" />
        <p className="text-lg text-gray-300 max-w-2xl text-center">{anime.description}</p>
      </div>
      <h2 className="text-2xl font-semibold mt-6">Episodes</h2>
      <ul className="mt-2">
        {anime.episodes && anime.episodes.length > 0 ? (
          anime.episodes.map((episode) => (
            <li key={episode.id} className="mt-2">
              <Link href={`/watch/${episode.id}`}>
                <a className="text-blue-400 hover:underline">Episode {episode.number}</a>
              </Link>
            </li>
          ))
        ) : (
          <p>No episodes available.</p>
        )}
      </ul>
    </div>
  );
}
