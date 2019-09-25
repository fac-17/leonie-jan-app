const fetchPlayer = name => {
  const URL = `https://api.github.com/users/${name}`;
  return fetch(URL).then(result => result.json());
};

export default fetchPlayer;
