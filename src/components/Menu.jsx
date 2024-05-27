import { Link } from "react-router-dom";

function Menu({ isVisible }) {
  return (
    <div
      className={`bg-zinc-900 m-1 p-3 absolute w-[50%] transition-all z-50 ${isVisible} rounded-lg text-white`}
    >
      <Link to={"/"} className="block">
        Home
      </Link>
      <Link to={"/top-airing"} className="block my-2">
        Top Airing
      </Link>
      <Link to={"/recent-episodes"} className="block">
        Recent Episodes
      </Link>
      <Link to={"/popular"} className="block my-2">
        Popular
      </Link>
      <Link to={"/movies"} className="block">
        Movies
      </Link>
    </div>
  );
}

export default Menu;
