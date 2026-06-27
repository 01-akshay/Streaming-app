// import React, { useEffect, useState} from 'react'

// const VideoPlayer = ({videoList}) => {
//    const[trailer, setTrailer] = useState(null);
//    const getTrailer = () => {
//        const trailerObj = videoList.find((trailer) => (
//         trailer.type === "Trailer"
//        ));
//        setTrailer(trailerObj)
//    }

//    useEffect(() => {
//     if(videoList.length > 0){
//         getTrailer();
//     }
//    },[videoList])
    
//   return (
//     <div className="mb-3">
//       <iframe className='w-full aspect-video' src={`https://www.youtube.com/embed/${trailer?.key}?mute=1&autoplay=1&rel=0`} title={trailer?.name} allowFullScreen></iframe>
//     </div>
//   )
// }

// export default VideoPlayer



import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const VideoPlayer = ({ videoList }) => {
    const [trailer, setTrailer] = useState(null);
    const getTrailer = () => {
        const trailerObject = videoList.find((trailer) => (trailer.type === "Trailer"));
        setTrailer(trailerObject)
    }
    useEffect(() => {
        if (videoList?.length > 0) {
            getTrailer()
        }
    }, [videoList])
    return (
        <div className="mb-3 ">
            <iframe src={`https://www.youtube.com/embed/${trailer?.key}?mute=1&autoplay=1&rel=0`} className="w-full aspect-video" title={trailer?.name} allowFullScreen></iframe>
        </div>
    )
}

export default VideoPlayer