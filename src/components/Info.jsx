import {
  ClosedCaption,
  Mic,
  PlayCircleFilledRounded,
} from "@mui/icons-material";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function Info() {
  const [anime, setAnime] = useState(null);
  const { animeId } = useParams();

  useEffect(() => {
    axios
      .get(`https://animetize-api.vercel.app/info/${animeId}`)
      .then((res) => setAnime(res.data))
      .catch((error) => console.error(error));
    fetch("https://hianime-mapper-nu.vercel.app/anime/info/20")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  if (anime !== null) {
    document.title = anime.title;
  }

  if (!anime) {
    return <div className="h-screen w-full animate-pulse bg-slate-400"></div>;
  }

  return (
    <div className="text-white">
      <div className="text-center font-bold px-4 mt-10">
        <img
          src={anime?.image}
          className="h-56 object-cover m-auto rounded-lg"
        />
        <h2 className="text-xl my-2">{anime?.title.replace("(Dub)", "")}</h2>
        <div className="my-5">
          <span className="mr-2 bg-cyan-400 p-1 rounded text-black">
            {anime?.subOrDub === "sub" ? <ClosedCaption /> : <Mic />}{" "}
            {anime?.totalEpisodes}
          </span>
          <span className="p-1 bg-teal-400 rounded text-black">
            {anime?.type}
          </span>
          {!anime?.type.includes("ANIME") && (
            <span className="p-1 rounded text-black bg-sky-200 ml-2">
              {anime?.releaseDate}
            </span>
          )}
          <span className="p-1 bg-lime-400 text-black rounded ml-2">
            {anime?.status}
          </span>
        </div>
        <Link to={`/watch/${anime?.id}/${anime?.episodes[0].id}`}>
          <button className="bg-green-400 text-black text-lg py-1 px-2 rounded-lg">
            <PlayCircleFilledRounded /> Watch Now
          </button>
        </Link>
      </div>
      <div className="mx-3 p-3 bg-zinc-900 rounded-lg my-5">
        <p>{anime?.description}</p>
      </div>
      <div className="my-5 mx-3">
        {anime?.genres.map((genre, index) => (
          <Link
            to={`/genre/${genre}`}
            key={index}
            className="bg-sky-400 p-1 mx-2 rounded inline-block mt-2 text-black font-bold"
          >
            {genre}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Info;
