import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/slices/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useUpcomingMovies = () => {
    const dispatch = useDispatch()
    const getUpcomingMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?page=1",
        API_OPTIONS
      );
      const jsonValue = await data.json();
      console.log(jsonValue.results);
      dispatch(addUpcomingMovies(jsonValue.results));
    };
  
    useEffect(() => {
      getUpcomingMovies();
    }, [])
}
export default useUpcomingMovies;
