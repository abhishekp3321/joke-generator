import React from 'react'
import { configureStore } from "@reduxjs/toolkit"
import jokereducer from "./Jokeslice"

const Store = configureStore({
  reducer: {
      jokes:jokereducer,
  },
}); 

export default Store;
  

