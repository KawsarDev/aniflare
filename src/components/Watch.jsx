import "@vidstack/react/player/styles/base.css";
import "@vidstack/react/player/styles/plyr/theme.css";
import { MediaPlayer, MediaProvider } from "@vidstack/react";
import {
  PlyrLayout,
  plyrLayoutIcons,
} from "@vidstack/react/player/layouts/plyr";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Watch() {
  const { animeId, episodeId } = useParams();
  const [episodes, setEpisodes] = useState(null);
  const [episode, setEpisode] = useState(null);

  useEffect(() => {
    axios
      .get(`https://animetize-api.vercel.app/info/${animeId}`)
      .then((res) => setEpisodes(res.data.episodes))
      .catch((e) => console.error(e));
    axios
      .get(`https://animetize-api.vercel.app/watch/${episodeId}`)
      .then((res) => setEpisode(res.data.sources[4]))
      .catch((e) => console.error(e));
  }, [episodeId]);

  return (
    <div>
      <MediaPlayer src={episode?.url}>
        <MediaProvider />
        <PlyrLayout icons={plyrLayoutIcons} />
      </MediaPlayer>
      <h2 className="text-white font-bold m-3 text-lg">
        {episodeId.replace(/-/g, " ")}
      </h2>
      <div className="grid grid-cols-4 gap-3 mx-3 my-5">
        {episodes?.map((e) => (
          <Link
            to={`/watch/${animeId}/${e.id}`}
            key={e?.number}
            className="text-white text-3xl bg-zinc-900 p-5 text-center rounded-lg hover:bg-zinc-700"
          >
            <span>{e.number}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Watch;
