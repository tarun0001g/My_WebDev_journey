import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})  

//Steps:
// create store
// wrap app component under provider
// create Slice
// register reducer in store 