const imageBaseUrl = "https://image.tmdb.org/t/p/"

const buildThumbnailUrl = (path) => `${imageBaseUrl}w300${path}`

export {
  buildThumbnailUrl
}