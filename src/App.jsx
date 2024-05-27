import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Info from "./components/Info";
import Watch from "./components/Watch";
import Search from "./components/Search";
import Genre from "./components/Genre";
import TopAiring from "./components/TopAiring";
import PopularPage from "./components/PopularPage";
import RecentEpisodesPage from "./components/RecentEpisodesPage";
import MoviesPage from "./components/MoviesPage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/:animeName" element={<Search />} />
        <Route path="/info/:animeId" element={<Info />} />
        <Route path="/watch/:animeId/:episodeId" element={<Watch />} />
        <Route path="/genre/:genre" element={<Genre />} />
        <Route path="/top-airing" element={<TopAiring />} />
        <Route path="/popular" element={<PopularPage />} />
        <Route path="/recent-episodes" element={<RecentEpisodesPage />} />
        <Route path="/movies" element={<MoviesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
