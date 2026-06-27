import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from '../../helper/axios';
import apiRequests from "../../helper/api-requests";
import{platformType, endpoints} from "../../helper/api-requests"



const initialState ={
    upcomingMovies: {
        status:"idle",
        data: null,
        error: null
    },
    nowPlayingMovies:{
            status:"idle",
            data: null,
            error: null
        },
        popularMovies:{
            status:"idle",
            data: null,
            error: null
        },
        topRatedMovies:{
            status:"idle",
            data: null,
            error: null
        }
    
}

export const fetchUpcomingMovies = createAsyncThunk(
    "movie/fetchUpcomingMovies",
    async() => {
        const response = await axios.get(apiRequests.getCollection(platformType.movie, endpoints.upcoming));
        return response.data;
    }
);


export const fetchNowPlayingMovies = createAsyncThunk(
    "movie/fetchNowPlayingMovies",
    async() => {
        const response = await axios.get(apiRequests.getCollection(platformType.movie, endpoints.nowplaying));
        return response.data;
    }
);

export const fetchPopularMovies = createAsyncThunk(
    "movie/fetchPopularMovies",
    async() => {
        const response = await axios.get(apiRequests.getCollection(platformType.movie, endpoints.popular));
        return response.data;
    }
);

export const fetchTopRatedMovies = createAsyncThunk(
    "movie/fetchTopRatedMovies",
    async() => {
        const response = await axios.get(apiRequests.getCollection(platformType.movie, endpoints.topRated));
        return response.data;
    }
);



export const movieSlice = createSlice({
    name:"movie",
    initialState,
    reducers:{},
    extraReducers:(builder) =>{
        builder
        .addCase(fetchUpcomingMovies.pending,(state,action) => {
            state.upcomingMovies.status = "loading";
        })
        .addCase(fetchUpcomingMovies.fulfilled,(state,action) => {
            state.upcomingMovies.status = "success";
            state.upcomingMovies.data = action.payload;
        })
        .addCase(fetchUpcomingMovies.rejected,(state,action) => {
            state.upcomingMovies.status = "failed";
            state.upcomingMovies.data = action.error;
        })

        .addCase(fetchNowPlayingMovies.pending,(state,action) => {
            state.nowPlayingMovies.status = "loading";
        })
        .addCase(fetchNowPlayingMovies.fulfilled,(state,action) => {
            state.nowPlayingMovies.status = "success";
            state.nowPlayingMovies.data = action.payload;
        })
        .addCase(fetchNowPlayingMovies.rejected,(state,action) => {
            state.nowPlayingMovies.status = "failed";
            state.nowPlayingMovies.data = action.error;
        })

        .addCase(fetchPopularMovies.pending,(state,action) => {
            state.popularMovies.status = "loading";
        })
        .addCase(fetchPopularMovies.fulfilled,(state,action) => {
            state.popularMovies.status = "success";
            state.popularMovies.data = action.payload;
        })
        .addCase(fetchPopularMovies.rejected,(state,action) => {
            state.popularMovies.status = "failed";
            state.popularMovies.data = action.error;
        })
        
        .addCase(fetchTopRatedMovies.pending,(state,action) => {
            state.topRatedMovies.status = "loading";
        })
        .addCase(fetchTopRatedMovies.fulfilled,(state,action) => {
            state.topRatedMovies.status = "success";
            state.topRatedMovies.data = action.payload;
        })
        .addCase(fetchTopRatedMovies.rejected,(state,action) => {
            state.topRatedMovies.status = "failed";
            state.topRatedMovies.data = action.error;
        })
        
  
    }
});

export const selectUpcomingMovies = (state) => state.movie.upcomingMovies;
export const selectNowPlayingMovies = (state) => state.movie.nowPlayingMovies;
export const selectPopularMovies = (state) => state.movie.popularMovies;
export const selectTopRatedMovies = (state) => state.movie.topRatedMovies;

export default movieSlice.reducer;