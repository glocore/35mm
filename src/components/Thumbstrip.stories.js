import React from 'react';
import Thumbstrip from "./Thumbstrip";
import movieThumbnail from "../mockData/movie_thumbnail.jpg";

export default {
  title: 'Thumbstrip',
  component: Thumbstrip,
};

export const ToStorybook = () => (
  <>
    <Thumbstrip 
    movies={[{
      thumbnail: movieThumbnail,
      title: "John Wick",
      overview: "Ex-hitman John Wick comes out of retirement to track down the gangsters that took everything from him." 
    }, {
      thumbnail: movieThumbnail,
      title: "John Wick",
      overview: "Ex-hitman John Wick comes out of retirement to track down the gangsters that took everything from him." 
    }, {
      thumbnail: movieThumbnail,
      title: "John Wick",
      overview: "Ex-hitman John Wick comes out of retirement to track down the gangsters that took everything from him." 
    }, {
      thumbnail: movieThumbnail,
      title: "John Wick",
      overview: "Ex-hitman John Wick comes out of retirement to track down the gangsters that took everything from him." 
    }, {
      thumbnail: movieThumbnail,
      title: "John Wick",
      overview: "Ex-hitman John Wick comes out of retirement to track down the gangsters that took everything from him." 
    }]}/>
  </>
);

ToStorybook.story = {
  name: 'default',
};
