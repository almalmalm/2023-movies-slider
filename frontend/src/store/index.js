import { configureStore } from '@reduxjs/toolkit';
import movieSlice from './movieSlice';
import { moviesApi } from './moviesApi';

export default configureStore({
  reducer: {
    moviesReducer: movieSlice,
    [moviesApi.reducerPath]: moviesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(moviesApi.middleware),
});
