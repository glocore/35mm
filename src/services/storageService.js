const readStore = (key) => {
  return JSON.parse(localStorage.getItem(key));
}

const writeStore = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value))
}

export { readStore, writeStore }