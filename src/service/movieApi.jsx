import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASEURL = import.meta.env.VITE_APP_BASE_URL;
const APIKEY = import.meta.env.VITE_APP_API_KEY;

export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${BASEURL}` }),
  endpoints: (builder) => ({
    getPopularMovies: builder.query({
      query: () => (`/movie/popular?api_keys=${APIKEY}`),
    }),
    getUpcomingMovies: builder.query({
      query: () => `/movie/upcoming?api_keys=${APIKEY}`,
    }),
    getNowPlayingMovies: builder.query({
      query: () => `/movie/now_playing?api_keys=${APIKEY}`,
    }),
    getTopRatedMovies: builder.query({
      query: () => `/movie/top_rated?api_keys=${APIKEY}`,
    }),
  }),
});

// `use${getPopularMovies}Query`
// `use${getPopularMovies}Mutation`

export const {
  useGetPopularMoviesQuery,
  useGetUpcomingMoviesQuery,
  useGetNowPlayingMoviesQuery,
  useGetTopRatedMoviesQuery,
} = movieApi;
