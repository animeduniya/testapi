import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

export default function Home() {
  const [trending, setTrending] = useState([]);
  const [latest, setLatest] = useState([]);

  useEffect(() => {
    const fetchAnime = async () => {
      const { data: trendingData } = await axios.get('https://api.amvstr.me/anime/trending');
      const { data: latestData } = await axios.get('https://api.amvstr.me/anime/latest');
      setTrending(trendingData.results);
      setLatest(latestData.results);
    };
    fetchAnime();
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <h1 className="text-3xl font-bold text-center py-4">Anime Streaming Website</h1>
      <section className="px-4">
        <h2 className="text-2xl font-semibold mb-4">Trending Anime</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {trending.map((anime) => (
            <Link key={anime.id} href={`/anime/${anime.id}`}>
              <a className="hover:opacity-80">
                <img src={anime.image} alt={anime.title} className="rounded-lg w-full h-48 object-cover" />
                <p className="text-sm mt-2">{anime.title}</p>
              </a>
            </Link>
          ))}
        </div>
      </section>
      <section className="px-4 mt-6">
        <h2 className="text-2xl font-semibold mb-4">Latest Anime</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {latest.map((anime) => (
            <Link key={anime.id} href={`/anime/${anime.id}`}>
              <a className="hover:opacity-80">
                <img src={anime.image} alt={anime.title} className="rounded-lg w-full h-48 object-cover" />
                <p className="text-sm mt-2">{anime.title}</p>
              </a>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
