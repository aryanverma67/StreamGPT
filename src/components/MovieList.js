import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  // console.log("movies",movies);
  
  
    return (
    <div className="px-6 ">
        <h1 className="text-lg md:text-3xl mt-2 py-4 font-bold text-white">{title}</h1>

      <div className="flex overflow-x-scroll no scroll-smooth ">
      <div className="flex">
        {movies?.map(movie => (
        <MovieCard   key={movie.id} poster_path={movie.poster_path} id ={movie?.id} />
        ) )}
      </div>

      </div>

    </div>
  )

};

export default MovieList;
