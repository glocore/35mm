import React from "react";
import Header from "./";
import { buildBackdropUrl } from "services/tmdbService";
import mockDiscoverMovieData from "mockData/discover_movie_action.json";

export default {
  title: "Header",
  component: Header,
};

const mockBackdropImages = mockDiscoverMovieData.results.map((result) =>
buildBackdropUrl(result.backdrop_path)
);

export const ToStorybook = () => (
  <>
    <Header backdropImages={mockBackdropImages} />
  </>
);

ToStorybook.story = {
  name: "default",
};
