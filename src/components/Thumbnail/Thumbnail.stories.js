import React from 'react';
import Thumbnail from "./";
import movieThumbnail from "mockData/movie_thumbnail.jpg";

export default {
  title: 'Thumbnail',
  component: Thumbnail,
};

export const ToStorybook = () => (
  <>
    <Thumbnail 
      imageUrl={movieThumbnail} 
      title="John Wick John Wick John Wick John Wick John Wick John Wick" 
      overview="Ex-hitman John Wick comes out of retirement to track down the gangsters that took everything from him." 
      onClick={() => console.log("clicked")}
    />
  </>
);

ToStorybook.story = {
  name: 'default',
};
