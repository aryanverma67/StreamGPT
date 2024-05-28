import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'
import { Link } from 'react-router-dom';

const MovieCard = ({poster_path,id}) => {
  if(!poster_path) return null;

  return (
    <div className='w-36 md:w-48 pr-4'>
      <Link to={"/browse/" + id}>
      <img alt='Movie Card'   className='rounded-xl' src={IMG_CDN_URL + poster_path}/>
      </Link>
        
    </div>
  )
}

export default MovieCard
