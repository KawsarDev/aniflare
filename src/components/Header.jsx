import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import SearchBar from "./SearchBar";
import { useState } from "react";
import Menu from "./Menu";

function Header() {
  const [searchBar, setSearchBar] = useState(true);
  const [menu, setMenu] = useState(true);

  return (
    <>
      <div className="flex justify-between bg-zinc-900 text-white p-3 text-2xl items-center">
        <MenuIcon
          fontSize="large"
          onClick={() => setMenu(!menu)}
          className={!menu && "text-red-400"}
        />
        <h1>AniFlare</h1>
        <SearchIcon
          fontSize="large"
          onClick={() => setSearchBar(!searchBar)}
          className={!searchBar && "text-red-400"}
        />
      </div>
      <Menu isVisible={menu && "top-[-100%]"} />
      <SearchBar isVisible={searchBar && "top-[-100%]"} />
    </>
  );
}

export default Header;
