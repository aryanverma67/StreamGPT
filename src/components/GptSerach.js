import React from 'react'
import Gptseachbar from './Gptsearchbar'
import GPTmoviesuggsetion from './GPTmoviesuggsetion'
import { BACKGROUND_IMAGE } from '../utils/constants'

const GptSerach = () => {
  return (
    <>
    <div className='absolute -z-10 inset-0 h-full w-full '> 
          <img src = {BACKGROUND_IMAGE} alt='logo' className='w-full h-full object-cover' ></img>

    </div>
    <div className=''>
        <Gptseachbar/>
        <GPTmoviesuggsetion/>
    </div>
    </>
  )
}

export default GptSerach