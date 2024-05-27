import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function TopAiring() {
  const [animes, setAnimes] = useState(null);
  let [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get(`https://animetize-api.vercel.app/top-airing?page=${page}`)
      .then((res) => setAnimes(res.data))
      .catch((e) => console.error(e));
    console.log(animes);
  }, [page]);

  if (!animes) {
    return <div className="h-screen w-full animate-pulse bg-slate-400"></div>;
  }

  return (
    <div>
      <h2 className="text-white text-lg px-3 font-bold my-1">Top Airing</h2>
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
              </div>
              <h2 className="text-lg line-clamp-2 mt-2">{anime.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default TopAiring;
