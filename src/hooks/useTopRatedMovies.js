import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/slices/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useTopRatedMovies = () => {
    const dispatch = useDispatch()
    const getTopRatedMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?page=1",
        API_OPTIONS
      );
      const jsonValue = await data.json();
      console.log(jsonValue.results);
      dispatch(addTopRatedMovies(jsonValue.results));
    };
  
    useEffect(() => {
      getTopRatedMovies();
    }, [])
}
export default useTopRatedMovies;
