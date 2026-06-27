import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from '../../helper/axios';
import apiRequests from "../../helper/api-requests";
import {platformType,endpoints} from "../../helper/api-requests"

const initialState={
    netflixOriginals:{
        status:"idle",
        data : null,
        error: null
    },
    onTheAir:{
        status:"idle",
        data : null,
        error: null
    },
    popularTvShows:{
        status:"idle",
        data : null,
        error: null
    },
    TopRatedTvShow:{
        status:"idle",
        data : null,
        error: null
    }
}

export const fetchNetflixOriginals = createAsyncThunk(
    "tv/fetchNetflixOriginals",
    async () => {
        const response = await axios.get(apiRequests.getNetflixOriginals);
        return response.data;
    }
)

export const fetchOnTheAirShow = createAsyncThunk(
    "tv/fetchOnTheAirShow",
    async () => {
        const response = await axios.get(apiRequests.getCollection(platformType.tv,endpoints.onTheAir));
        return response.data;
    }
)

export const fetchpopularTvShows = createAsyncThunk(
    "tv/fetchpopularTvShows",
    async () => {
        const response = await axios.get(apiRequests.getCollection(platformType.tv,endpoints.popular));
        return response.data;
    }
)

export const fetchTopRatedTvShow = createAsyncThunk(
    "tv/fetchTopRatedTvShow",
    async () => {
        const response = await axios.get(apiRequests.getCollection(platformType.tv, endpoints.topRated));
        return response.data;
    }
)


export const tvSlice = createSlice({
   name:"tv",
    initialState,
    reducers:{},
    extraReducers:(builder) => {
        builder
        .addCase(fetchNetflixOriginals.pending, (state) => {
            state.netflixOriginals.status = "loading"
        })
        .addCase(fetchNetflixOriginals.fulfilled, (state, action) => { 
            state.netflixOriginals.status = "success";
            state.netflixOriginals.data = action.payload;
        })
        .addCase(fetchNetflixOriginals.rejected, (state, action) => { 
            state.netflixOriginals.status = "failed";
            state.netflixOriginals.error = action.error;
        })
        .addCase(fetchOnTheAirShow.pending, (state) => {
            state.onTheAir.status = "loading"
        })
        .addCase(fetchOnTheAirShow.fulfilled, (state, action) => { 
            state.onTheAir.status = "success";
            state.onTheAir.data = action.payload;
        })
        .addCase(fetchOnTheAirShow.rejected, (state, action) => { 
            state.onTheAir.status = "failed";
            state.onTheAir.error = action.error;
        })
        .addCase(fetchpopularTvShows.pending, (state) => {
            state.popularTvShows.status = "loading"
        })
        .addCase(fetchpopularTvShows.fulfilled, (state, action) => { 
            state.popularTvShows.status = "success";
            state.popularTvShows.data = action.payload;
        })
        .addCase(fetchpopularTvShows.rejected, (state, action) => { 
            state.popularTvShows.status = "failed";
            state.popularTvShows.error = action.error;
        })
        .addCase(fetchTopRatedTvShow.pending, (state) => {
            state.TopRatedTvShow.status = "loading"
        })
        .addCase(fetchTopRatedTvShow.fulfilled, (state, action) => { 
            state.TopRatedTvShow.status = "success";
            state.TopRatedTvShow.data = action.payload;
        })
        .addCase(fetchTopRatedTvShow.rejected, (state, action) => { 
            state.TopRatedTvShow.status = "failed";
            state.TopRatedTvShow.error = action.error;
        })

    }

}); 

export const selectNetflixOriginals = (state)=>state.tv.netflixOriginals;
export const selectOnTheAirShow = (state)=>state.tv.onTheAir;
export const selectpopularTvshows = (state)=>state.tv.popularTvShows;
export const selectTopRatedTvShow = (state)=>state.tv.TopRatedTvShow;

export default tvSlice.reducer