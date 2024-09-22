import React, { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('/path/to/data.json')
      .then(response => response.json())
      .then(data => setRecipes(data))
      .catch(error => console.error('Error loading data:', error));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Recipes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {recipes.map((recipe, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">{recipe.name}</h2>
            <p className="text-gray-700">{recipe.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;