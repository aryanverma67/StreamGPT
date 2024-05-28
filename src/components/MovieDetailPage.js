import { useParams } from "react-router";
import { useEffect, useState } from "react";
import {API_OPTIONS,IMG_CDN_URL} from "../utils/constants"
import { FaCirclePlay } from "react-icons/fa6";
import { IoIosInformationCircle } from "react-icons/io";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movies, setMovies] = useState(null);
  const [video, setVideo] = useState(null);
  useEffect(() => {
    fetchMovies();
    fetchMovieVideo();
  },
   //eslint-disable-next-line
  []);

  const fetchMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/" + movieId + "?language=en-US",
        API_OPTIONS
      );
      const json = await data.json();
      console.log(json);
      setMovies(json);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchMovieVideo = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/" +
          movieId +
          "/videos?language=en-US",
        API_OPTIONS
      );
      const json = await data.json();
      console.log(json);

      const filterData = json.results.filter(
        (video) =>
          video.type === "Trailer" ||
          video.type === "Official Trailer" ||
          video.type === "Teaser" ||
          // video.type === "Featurette" ||
          video.type.toLowerCase().includes("trailer")
      );

      console.log(filterData);

      setVideo(json.results[0]);
      // setVideo(filterData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
        <div className="flex flex-col item-center mb-4  w-screen absolute px-8 py-1 background bg-gradient-to-b from-black z-10 md:flex-row md:justify-between ">
      <div>
        <h1 className="text-[#e50914] pt-3   text-3xl mt-3 font-bold md:text-3xl"> StreamGPT</h1>
      </div>
      </div>

      {/* DESKTOP VIEW */}
<div className="bg-transparent">
  <div className="aspect-w-16 aspect-h-9">
    <iframe
      className="absolute top-0 left-0 w-full h-full"
      src={"https://www.youtube.com/embed/" + (video?.key || "") + "?autoplay=1&mute=1"}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  </div>
</div>     
 <div className='absolute hidden md:block top-[75px] h-screen w-screen '>
        <div className='text-white absolute ml-14 mt-[120px]'>
          <h1 className='text-3xl font-bold md:text-5xl '>{movies?.title}</h1>
          <p className='py-4  text-lg  w-1/4'>{movies?.overview}</p>
          <div className="flex gap-4">
                <button className="bg-[#e50914] flex items-center gap-2 text-white fotn-bold rounded-full p-3 px-12 text-2xl  hover:bg-opacity-80 "><FaCirclePlay className="w-7 h-7"/>Play</button>
                <button className="mx-2 bg-gray-500 text-white  p-3 px-9 flex items-center gap-2 text-2xl bg-opacity-50 rounded-full hover:bg-opacity-80 "><IoIosInformationCircle className="w-7 h-7" />More Info</button>
            </div>

          <div className='flex ml-[-15px] mt-6 '>
            {movies?.genres?.map((genre) => {
              return (
                <p
                  key={genre?.id}
                  className='rounded-full ml-2  px-4 py-2 bg-brand-charcoal text-white'>
                  {genre?.name}
                </p>
              );
            })}
          </div>
        </div>
      </div>

      MOBILE VIEW
      <div className="bg-black md:hidden">
  <div className="aspect-w-16 aspect-h-9">
    <iframe
      className=""
      width="100%"
      height="100%"
      src={"https://www.youtube.com/embed/" + (video?.key || "") + "?autoplay=1&mute=1"}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  </div>

        <div className='flex flex-wrap left-4 absolute top-6  mt-6 '>
          {movies?.genres?.map((genre) => {
            return (
              <p
                key={genre?.id}
                className='rounded-full m-2 px-4 py-2 bg-black text-white'>
                {genre?.name}
              </p>
            );
          })}
        </div>
      </div>

    </>
  );
};

export default MovieDetailsPage;