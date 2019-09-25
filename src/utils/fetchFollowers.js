const fetchPlayer = url => {
    return fetch(url).then(result => result.json());
  };
  
  export default fetchPlayer;
  