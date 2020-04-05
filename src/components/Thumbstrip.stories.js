import React from 'react';
import Thumbstrip from "./Thumbstrip";
import { buildThumbnailUrl } from "../services/tmdbService"
import mockDiscoverMovieData from "../mockData/discover_movie_action.json";

export default {
  title: 'Thumbstrip',
  component: Thumbstrip,
};

const mockThumbstripData = mockDiscoverMovieData.results.map(result => ({
  thumbnail: buildThumbnailUrl(result.backdrop_path),
  title: result.title
}))

export const ToStorybook = () => (
  <>
    <Thumbstrip 
    movies={mockThumbstripData}/>
  </>
);

ToStorybook.story = {
  name: 'default',
};
