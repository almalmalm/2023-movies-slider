import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.themoviedb.org/3/',
  }),
  endpoints: (build) => ({
    getTrends: build.query({
      query: () => `trending/all/day?api_key=dd8bfbf83c6572b965d0379275cdddc2`,
    }),
  }),
});

export const { useGetTrendsQuery } = moviesApi;
