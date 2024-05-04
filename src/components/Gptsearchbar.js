import React from 'react'
import { FaSearch } from "react-icons/fa";
import { BACKGROUND_IMAGE } from '../utils/constants';
import lang from '../utils/Languageconstants';
import { useSelector } from 'react-redux';


const Gptseachbar = () => {
  const langKey = useSelector(store => store.config.lang);
  return (
    <div className=' w-full   py-40 rounded-lg relative border-red  ' >
    <form className='  px-20 py-2 flex gap-2 justify-center'>
    <input type='text' name='search'className='w-3/4 bg border py-3 rounded-full' placeholder={     lang[langKey].gptSearchPlaceholder} ></input>
    <button className='px-5   py-2 text-white bg-[#e50914] rounded-2xl '><FaSearch className='w-6 h-5'/></button>
    {lang[langKey].search}

    </form>
    </div>
  )
}

export default Gptseachbar