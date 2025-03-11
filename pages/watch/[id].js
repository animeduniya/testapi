import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export default function WatchAnime() {
  const router = useRouter();
  const { id } = router.query;
  const [videoUrl, setVideoUrl] = useState("");

  useEffect(() => {
    if (id) {
      axios.get(`https://animeapi.skin/api/anime/episode/${id}`).then(({ data }) => setVideoUrl(data.url));
    }
  }, [id]);

  if (!videoUrl) return <p className="text-white text-center mt-10">Loading...</p>;

  return (
    <div className="bg-gray-900 text-white min-h-screen p-4">
      <h1 className="text-3xl font-bold text-center">Watch Anime</h1>
      
      <div className="mt-6">
        <iframe
          src={videoUrl}
          allowFullScreen
          className="w-full h-[400px] md:h-[600px] rounded-lg"
        ></iframe>
      </div>
    </div>
  );
}
