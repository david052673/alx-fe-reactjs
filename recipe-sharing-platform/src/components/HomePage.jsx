import React, { useState, useEffect } from 'react';
import data from '../data.json';
import {useParams} from 'react-router-dom';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(data.recipes);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Recipe List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
              <p className="text-gray-700">{recipe.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;