import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/slices/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch()
    const getNowPlayingMovie = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?&page=1",
        API_OPTIONS
      );
      const jsonValue = await data.json();
      console.log(jsonValue.results);
      dispatch(addNowPlayingMovies(jsonValue.results));
    };

    useEffect(() => {
      getNowPlayingMovie();
    }, [])
}
export default useNowPlayingMovies;