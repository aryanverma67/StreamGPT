import React from 'react'
import Gptseachbar from './Gptsearchbar'
import GPTmoviesuggsetion from './GPTmoviesuggsetion'
import { BACKGROUND_IMAGE } from '../utils/constants'

const GptSerach = () => {
  return (
    <>
    <div className='absolute'> 
          <img  src = {BACKGROUND_IMAGE} alt='logo' ></img>

    </div>
    <div>
        <Gptseachbar/>
        <GPTmoviesuggsetion/>
    </div>
    </>
  )
}

export default GptSerach