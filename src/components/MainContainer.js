import React from 'react'
import ButtonLists from './ButtonLists'
import VideoContainer from './VideoContainer'

const MainContainer = () => {
  return (
    <div className='col-span-10 mt-20 pt-2 ml-20 pl-20 '>
      <ButtonLists/>
      <VideoContainer/>
    </div>
  )
}

export default MainContainer