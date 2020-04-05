const imageBaseUrl = "https://image.tmdb.org/t/p/"

const buildThumbnailUrl = (path) => `${imageBaseUrl}w300${path}`

const buildBackdropUrl = (path) => `${imageBaseUrl}w780${path}`
export {
  buildThumbnailUrl,
  buildBackdropUrl
}