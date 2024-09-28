import axios from 'axios';

const fetchUserData = async (username, location, minRepos) => {
  const query = `q=${username}+location:${location}+repos:>${minRepos}`;
  const response = await axios.get(`https://api.github.com/search/users?${query}`);
  return response.data;
};

export default fetchUserData;

