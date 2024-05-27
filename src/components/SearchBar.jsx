import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { Link } from "react-router-dom";

function SearchBar({ isVisible }) {
  const [animeName, setAnimeName] = useState("");

  return (
    <div
      className={`bg-zinc-900 py-3 px-5 absolute w-full transition-all z-50 ${isVisible}`}
    >
      <div className="border border-white bg-white justify-between flex rounded-lg h-10 items-center p-2">
        <input
          type="text"
          placeholder="Search anime..."
          className="bg-transparent outline-none"
          onChange={(e) => setAnimeName(e.target.value)}
          value={animeName}
        />
        <Link
          to={`/search/${animeName}`}
          className="p-2 active:border active:border-black rounded"
        >
          <SearchIcon />
        </Link>
      </div>
    </div>
  );
}

export default SearchBar;
