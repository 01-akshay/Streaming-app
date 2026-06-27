import React, { useEffect } from 'react'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { fetchNetflixOriginals, fetchOnTheAirShow, fetchpopularTvShows, fetchTopRatedTvShow, selectNetflixOriginals, selectOnTheAirShow, selectpopularTvshows, selectTopRatedTvShow } from '../features/tv/tvSlice'
import Row from '../components/Row'
import {fetchUpcomingMovies, selectUpcomingMovies,fetchNowPlayingMovies, selectNowPlayingMovies, fetchPopularMovies, selectPopularMovies, fetchTopRatedMovies, selectTopRatedMovies } from "../features/movie/movieSlice"
import { platformType } from '../helper/api-requests'

const Homescreen = () => {
  const dispatch = useDispatch();
  const {status, data} = useSelector(selectNetflixOriginals)
  useEffect(() =>{
     dispatch(fetchNetflixOriginals())
  },[])


  return (
    <>
    { status ==="loading" ?
        <div className="w-screen h-screen grid justify-center">
        <div className="w-24 h-24"><p>....loading</p></div>
      </div>
    :status ==="success"?     
       <Header video={data.results[Math.floor(Math.random() * data.results.length)]} platform={platformType.tv} />
       :""
    }

    <div className="px-5 py-3 bg-black text-white ps-3">
    <Row title="Now Playing Movies" action={fetchNowPlayingMovies} selector={selectNowPlayingMovies} platform={platformType.movie}/>
    <Row title="Upcoming Movies" action={fetchUpcomingMovies} selector={selectUpcomingMovies} platform={platformType.movie}/>
    <Row title="Popular Movies" action={fetchPopularMovies} selector={selectPopularMovies} platform={platformType.movie}/>
    <Row title="Top-Rated Movies " action={fetchTopRatedMovies} selector={selectTopRatedMovies} platform={platformType.movie}/>

    <h4 className="text-white text-2xl relative ps-1 my-1 font-bold">Tv-Shows:</h4>

    <Row title="Airing Tv-shows" action={fetchOnTheAirShow} selector={selectOnTheAirShow} platform={platformType.tv}/>
    <Row title="Popular shows" action={fetchpopularTvShows} selector={selectpopularTvshows} platform={platformType.tv}/>    
    <Row title="Top Tv-shows" action={fetchTopRatedTvShow} selector={selectTopRatedTvShow} platform={platformType.tv}/>

    </div>

    </>
  )
}

export default Homescreen