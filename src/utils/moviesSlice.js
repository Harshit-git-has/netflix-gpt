import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name : "movie",
    initialState : {
        nowPlayingMovies : null,
        trailerVideo: null,
    },
    reducers : {
        addNowPlayingMovies : (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies:(state, action) =>{
            state.popularMovies = action.payload;
        },
        addTrendingMovies: (state, action ) =>{
            state.trendingMovies = action.payload
        },
        addTopRatedMovies: (state, action)=> {
            state.topRatedMovies = action.payload
        },
        addUpcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
        }
    },

});

export const { addNowPlayingMovies, addTrailerVideo, addPopularMovies, addTrendingMovies, addUpcomingMovies, addTopRatedMovies } = moviesSlice.actions;

export default moviesSlice.reducer;
