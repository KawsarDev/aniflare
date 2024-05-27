import Carousel from "./Carousel";
import RecentEpisodes from "./RecentEpisodes";
import Movies from "./Movies";
import Popular from "./Popular";

function Home() {
  return (
    <div>
      <Carousel />
      <RecentEpisodes />
      <Popular />
      <Movies />
    </div>
  );
}

export default Home;
