import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from '../../helper/axios';
import apiRequests from "../../helper/api-requests";

const initialState={
    headerDetails:{
        status:"idle",
        data : null,
        error: null
    },
    videoDetails:{
        status:"idle",
        data : null,
        error: null
    },
    queryString:""
}

export const fetchHeaderDetails = createAsyncThunk(
    "common/fetchheaderDetails",
    async (param) => {
        const response = await axios.get(apiRequests.getDetails(param.platform, param.id));
        return response.data;
    }
)

export const fetchVideoDetails = createAsyncThunk(
    "common/fetchVideoDetails",
    async (param) => {
        const response = await axios.get(apiRequests.getDetails(param.platform, param.id));
        return response.data;
    }
)

export const commonSlice = createSlice({
   name:"common",
    initialState,
    reducers: {
        searchQuery: (state, action) => {
            state.queryString = action.payload;
        }
    },
    extraReducers:(builder) => {
        builder
        .addCase(fetchHeaderDetails.pending, (state) => {
            state.headerDetails.status = "loading"
        })
        .addCase(fetchHeaderDetails.fulfilled, (state, action) => { 
            state.headerDetails.status = "success";
            state.headerDetails.data = action.payload;
        })
        .addCase(fetchHeaderDetails.rejected, (state, action) => { 
            state.headerDetails.status = "failed";
            state.headerDetails.error = action.error;
        })

        // ==============videoDetails=================

        .addCase(fetchVideoDetails.pending, (state) => {
            state.videoDetails.status = "loading"
        })
        .addCase(fetchVideoDetails.fulfilled, (state, action) => { 
            state.videoDetails.status = "success";
            state.videoDetails.data = action.payload;
        })
        .addCase(fetchVideoDetails.rejected, (state, action) => { 
            state.videoDetails.status = "failed";
            state.videoDetails.error = action.error;
        })
    }

}); 

export const { searchQuery } = commonSlice.actions;

export const selectSearchQuery = (state) => state.common.queryString;
export const selectHeaderDetails =(state)=>state.common.headerDetails;
export const selectVideoDetails =(state)=>state.common.videoDetails;


export default commonSlice.reducer