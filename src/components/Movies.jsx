import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Movies() {
  const [animes, setAnimes] = useState(null);

  useEffect(() => {
    axios
      .get(`https://animetize-api.vercel.app/movies`)
      .then((res) => setAnimes(res.data))
      .catch((e) => console.error(e));
  }, []);

  if (!animes) {
    return <div className="bg-slate-400 animate-pulse h-56 w-full mt-2"></div>;
  }

  return (
    <div className="bg-zinc-950 p-3">
      <h2 className="text-xl text-white my-3 font-bold">Movies</h2>
      <div className="grid grid-cols-2 gap-3">
        {animes?.results.map((anime) => (
          <Link to={`/info/${anime?.id}`} key={anime.id}>
            <div key={anime.id}>
              <div className="relative">
                <img
                  src={anime.image}
                  className="h-56 w-full object-cover rounded-lg"
                />
                <div className="absolute bottom-0 bg-gradient-to-t from-zinc-950 to-transparent w-full">
                  <span className="bg-sky-200 p-1 m-1 rounded font-bold text-sm">
                    {anime.releaseDate}
                  </span>
                </div>
              </div>
              <h2 className="text-lg text-white line-clamp-2 mt-2">
                {anime.title}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Movies;
