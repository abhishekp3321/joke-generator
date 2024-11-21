import React from 'react'
import jokedata from './Joke.json'
import { createSlice } from "@reduxjs/toolkit"
import Joke from './app/Joke';
import Favorites from './app/Favorites';
  const  initialState= {
    favorites:[],
    joke: null,
    loading: false,
    error: null,
    
  };
  
const jokesSlice = createSlice({
  name: 'jokes',
 initialState:initialState,
  
  reducers: {
    
    setJoke(state, action) {
      state.joke = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload; 
    },
    setError(state, action) {
      state.error = action.payload; 
    },
    addFavorite(state, action) {
      const jokeToFav = action.payload;
    
      if (!state.favorites.find((joke) => joke.id === jokeToFav.id)) {
        state.favorites.push(jokeToFav);  
      }
    },
    removejoke(state, action) {
      const jokeToRemove = action.payload;
    
      state.favorites = state.favorites.filter((joke) => joke.id !== jokeToRemove.id);
    }
    
    
  },
});

export const { setJoke, setLoading, setError,addFavorite,removejoke} = jokesSlice.actions;

export default jokesSlice.reducer;