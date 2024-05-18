import React from 'react';
import { useSelector } from 'react-redux';
import MovieList from './MovieList';


const GPTmoviesuggsetion = () => {
  const {movieResults,movieNames} = useSelector(store=>store.gpt);
   if(!movieNames) return null;
  return (
    <div className='p-4 m-4 bg-black/80 text-white'>
      <div>
        {movieNames.map((MovieName,index)=><MovieList key={MovieName} title={MovieName} movies={movieResults[index]}/> )}
            
      </div>

    </div>
  )
}

export default GPTmoviesuggsetion