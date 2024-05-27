import { ClosedCaption, Mic } from "@mui/icons-material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Search() {
  const [animes, setAnimes] = useState(null);
  const { animeName } = useParams("");
  let [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get(`https://animetize-api.vercel.app/${animeName}?page=${page}`)
      .then((res) => setAnimes(res.data))
      .catch((e) => console.error(e));
    console.log(animes);
  }, [animeName, page]);

  return (
    <div>
      <h2 className="text-white text-lg px-3 font-bold">
        Search results for: {animeName}
      </h2>
      {(animes?.hasNextPage || animes?.currentPage > 1) && (
        <div className="px-3 flex justify-between">
          <Link
            onClick={() => page > 1 && setPage(page - 1)}
            className="text-lg text-white bg-zinc-900 py-1 px-2 rounded"
          >
            Prev
          </Link>
          <span className="text-lg text-white bg-zinc-900 py-1 px-2 rounded">
            {animes?.currentPage}
          </span>
          <Link
            onClick={() =>
              animes?.hasNextPage
                ? setPage(page + 1)
                : setPage((page = animes?.currentPage))
            }
            className="text-lg text-white bg-zinc-900 py-1 px-2 rounded"
          >
            Next
          </Link>
        </div>
      )}
      <div className="grid grid-cols-2 gap-3 bg-zinc-950 text-white h-screen p-3">
        {animes?.results.map((anime) => (
          <Link to={`/info/${anime?.id}`} key={anime?.id}>
            <div>
              <div className="relative">
                <img
                  src={anime.image}
                  className="h-56 w-full object-cover rounded-lg"
                />
                <div className="absolute bottom-0 bg-gradient-to-t from-zinc-950 to-transparent w-full">
                  <span className="bg-cyan-400 p-1 m-1 rounded text-black text-sm font-bold">
                    {anime?.subOrDub === "sub" ? <ClosedCaption /> : <Mic />}
                  </span>
                  <span className="bg-blue-200 text-black p-1 m-1 rounded text-sm font-bold">
                    {anime?.releaseDate.replace("Released:", "")}
                  </span>
                </div>
              </div>
              <h2 className="text-lg line-clamp-2 mt-2">
                {anime.title.replace("(Dub)", "")}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Search;
