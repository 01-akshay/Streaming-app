
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper css
import 'swiper/css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect,useState } from 'react';
import { fetchUpcomingMovies, selectUpcomingMovies } from '../features/movie/movieSlice';
import Card from './Card';
import axios from '../helper/axios'
import apiRequests from '../helper/api-requests'


const Row = ({title,selector, action, platform, genre }) => {
   const dispatch = useDispatch();
   const{status, data} = useSelector(genre ? (state) => state.movie.upcomingMovies : selector);
   const[videosByGenre, setVideoByGenre]= useState(null);
   
   useEffect(() => {
    if(!genre){
    dispatch(action());
    }
   },[genre])
 

   const fetchVideobyGenre = async (platform, genreid) => {
    try{
      const response = await axios.get(apiRequests.getByGenres(platform, gerneid));
      setVideoByGenre(response.data);
    } catch(error){
      console.log(error);
    }
  }

    useEffect(() => {
      if(genre){
        fetchVideobyGenre(platform, genre.id)
      }
   },[genre])
  


  return (
    <div>
{  genre?
<>
<h2 className="text-2xl font-bold mb-3">{title}</h2>
      <Swiper
      spaceBetween={20}
      slidesPerView={5}
      
    >
    {
      videosByGenre?.results.map((video) =>(
      <SwiperSlide key={video.id}>
      <Card video={video} platform={platform}/>
      </SwiperSlide>
      ))
    }

    </Swiper>
</>:
    <>
    {
    
      status === "loading"?
      <div>....loading</div> 
      :
      status ==="success" ?
    <>
    <h2 className="text-2xl font-bold mb-3">{title}</h2>
      <Swiper
      spaceBetween={20}
      slidesPerView={5}
      
    >
    {
      data.results.map((video) =>(
      <SwiperSlide key={video.id}>
      <Card video={video} platform={platform}/>
      </SwiperSlide>
      ))
    }

    </Swiper>

    </>
    :""
    }</>
    }
    </div>
  )
}

export default Row