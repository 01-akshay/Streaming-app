import { configureStore } from "@reduxjs/toolkit";
import tvReducer from '../features/tv/tvSlice';
import movieReducer from '../features/movie/movieSlice';
import commonReducer from '../features/common/commonSlice'


const store = configureStore({
    reducer:{
    tv: tvReducer,
    movie: movieReducer,
    common: commonReducer
    }
})


export default store;