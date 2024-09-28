import React, { useState } from 'react';
import fetchUserData from './services/githubService';

const SearchComponent = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'username') setUsername(value);
    if (name === 'location') setLocation(value);
    if (name === 'minRepos') setMinRepos(value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const data = await fetchUserData(username, location, minRepos);
      setUserData(data);
    } catch (err) {
      setError('Looks like we can\'t find the user.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <form onSubmit={handleFormSubmit} className="space-y-4">
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleInputChange}
          placeholder="Enter GitHub username"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          name="location"
          value={location}
          onChange={handleInputChange}
          placeholder="Enter location"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="number"
          name="minRepos"
          value={minRepos}
          onChange={handleInputChange}
          placeholder="Minimum repositories"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">
          Search
        </button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {userData && (
        <div className="mt-4">
          {userData.items.map((user) => (
            <div key={user.id} className="p-4 border border-gray-300 rounded mb-4">
              <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
              <p>{user.login}</p>
              <p>{user.location}</p>
              <p>Repositories: {user.public_repos}</p>
              <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                View Profile
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchComponent;
