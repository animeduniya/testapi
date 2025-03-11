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
      axios.get(`https://api.amvstr.me/anime/info/${id}`).then(({ data }) => setAnime(data));
    }
  }, [id]);

  if (!anime) return <p className="text-white text-center mt-10">Loading...</p>;

  return (
    <div className="bg-gray-900 text-white min-h-screen p-4">
      <h1 className="text-3xl font-bold text-center">{anime.title}</h1>
      <div
::contentReference[oaicite:0]{index=0}
 
