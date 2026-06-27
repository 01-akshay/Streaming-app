import React, {useEffect, useState} from 'react'
import { IMG_URL } from '../helper/api-requests'
import {fetchHeaderDetails, selectHeaderDetails} from '../features/common/commonSlice';
import { useDispatch, useSelector } from 'react-redux';
import Ratings from './Ratings';
import GenreLinks from './GenreLinks';
import { truncateText} from '../helper'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons/faCircleInfo';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import VideoPlayer from './VideoPlayer'


const Header = ({video, platform}) => {
  const dispatch = useDispatch();
  const{status, data } = useSelector(selectHeaderDetails);
  const[isVideoPlayer, setIsVideoPlayer] = useState(false);


  useEffect(()=>{
    if(video){
     dispatch(fetchHeaderDetails({platform:platform ,id: video.id}))
    }
  },[video])


  const handleVideoPlayer=() => {
   
    setIsVideoPlayer(true);
  }

  const handleVideoClose = () => {
    setIsVideoPlayer(false)
}


  return (
    status === "success" ?
    <div className="h-screen w-full relative">
  { isVideoPlayer ?
    <div className='relative top-10 flex flex-col '>
    <button className='ms-auto h-7 w-7 me-2 bg-red-600 text-xl text-center ' onClick={handleVideoClose}>X</button>
  <VideoPlayer videosList={data.videos.results} />
  </div>
  :
   <>
      <img className='w-full h-full object-cover object-center inline-block ' src={IMG_URL + data.backdrop_path} alt="" />
      <div className="absolute top-1/2 max-w-2xl -translate-y-1/2 left-11 right-52 z-20 text-white ">
      <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-2'>{data.name || data.orginal_name ||data.title || data.orginal_title}</h1>
      <h3 className='text-orange-500 mb-3 text-2xl italic'>{data.tagline}</h3>
      <p className='text-xl mb-4'>{truncateText(data.overview,150)}</p>
      <h3 className="">Release Date :{data.first_air_date}</h3>
      <Ratings voteAverage={data.vote_average} voteCount={data.vote_count}/>
              <GenreLinks genres={data.genres} platform={platform} />
      <div className="mt-4 flex gap-2 items-center">
        <button onClick={handleVideoPlayer} className="bg-white text-black rounded-md min-w-40 p-3 font-bold text-xl "><FontAwesomeIcon icon={faPlay}/>   Play</button>
        <Link to={`/details/${platform}/${data.id}`} className="bg-gray-400 text-white rounded-md min-w-40 p-3 text-center font-bold text-xl"><FontAwesomeIcon icon={ faCircleInfo}/>   More info</Link>
      </div>

      </div>
      <div className='h-full  w-full max-w-4xl absolute left-0 top-0 z-10 bg-gradient-to-r from-slate-950 to-transparent opacity-80'></div>
       </>
  }
    </div>
    : ".....loading"
 
  )
}

export default Header