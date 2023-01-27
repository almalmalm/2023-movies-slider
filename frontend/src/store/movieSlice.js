import { createSlice } from '@reduxjs/toolkit';

const movieSlice = createSlice({
  name: 'movies',
  initialState: {
    movies: [],
  },
  reducers: {},
});

export const {} = movieSlice.actions;
export default movieSlice.reducer;
