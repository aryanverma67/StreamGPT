import React, { useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { BACKGROUND_IMAGE } from "../utils/constants";
import lang from "../utils/Languageconstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { addGptMovieResult } from "../utils/slices/Gptslice";
import searchMovieTMDB from "../hooks/searchMovieTMDB";
const Gptseachbar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText  = useRef(null);

  const handleGptSearchclick = async ()=>{
    //make an api call to get appi and movie results
    searchMovieTMDB();
    
    
    const gptQuery =
    "Act as a Movie Recommendation system and suggest some movies for the query : " +
    searchText.current.value +
    ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    if (!gptResults.choices) {
      alert("the movie not present");
    }

    // console.log(gptResults.choices?.[0]?.message?.content);

    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");


    // For each movie I will search TMDB API
    const promiseArray =  gptMovies.map(movie=>searchMovieTMDB(movie));
    // this return only 5 promises  
    const moviesuggestionRes = await Promise.all(promiseArray);
    
    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults:moviesuggestionRes  })
    );
  



   


  };
  return (
    <div className=" w-full   py-40 rounded-lg relative border-red  ">
      <form
        className="  px-20 py-2 flex gap-2 justify-center"
        onSubmit={(e) =>e.preventDefault()}
      >
        <input
          type="text"
          name="search"
          ref={searchText}

          className="w-3/4 bg border py-3 rounded-full"
          placeholder={lang[langKey].gptSearchPlaceholder}
        ></input>
        <button
          onClick={handleGptSearchclick}
          className="px-5   py-2 text-white bg-[#e50914] rounded-2xl "
        >
          <FaSearch className="w-6 h-5" />
        </button>
        {lang[langKey].search}
      </form>
    </div>
  );
};

export default Gptseachbar;
