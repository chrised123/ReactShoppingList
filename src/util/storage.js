const get = (key) => {
  const result = localStorage.getItem(key);
  if (!result) return [];
  return JSON.parse(result);
}

const set = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
}

module.exports = {
  get,
  set
}