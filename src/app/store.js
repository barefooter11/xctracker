import { configureStore } from '@reduxjs/toolkit';
import trailsReducer from '../features/trails/trailsSlice';
import counterReducer from "../features/counter/counterSlice";

export default configureStore({
  reducer: {
    trails: trailsReducer,
    counter: counterReducer
  },
});
