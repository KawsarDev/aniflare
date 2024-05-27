import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import InfoIcon from "@mui/icons-material/Info";

function Carousel() {
  const [animes, setAnimes] = useState(null);

  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    axios
      .get(`https://animetize-api.vercel.app/top-airing`)
      .then((res) => setAnimes(res.data))
      .catch((error) => console.error(error));
    console.log(animes);
  }, []);

  if (!animes) {
    return <div className="h-56 w-full animate-pulse bg-slate-400"></div>;
  }

  return (
    <Slider {...settings}>
      {animes?.results.map((anime) => (
        <div key={anime.id} className="h-full">
          <div className="relative h-full">
            <img src={anime.image} className="object-cover w-full h-96" />
            <div className="w-full absolute bottom-0 z-10 p-5 bg-gradient-to-t from-zinc-950 to-transparent">
              <h2 className="text-lg font-bold text-white">{anime.title}</h2>
              <div>
                {anime.genres.map((genre, index) => (
                  <Link
                    to={`/genre/${genre}`}
                    key={index}
                    className="text-white my-1 mr-1 backdrop-blur-3xl inline-block px-1 rounded-lg"
                  >
                    {genre}
                  </Link>
                ))}
              </div>
              <Link to={`/info/${anime.id}`}>
                <button className="text-lg font-bold text-black mt-1 rounded-lg py-1 px-2 bg-teal-400 block">
                  <InfoIcon /> Info
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}

export default Carousel;
