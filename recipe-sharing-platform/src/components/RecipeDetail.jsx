import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch('/path/to/data.json')
      .then(response => response.json())
      .then(data => {
        const recipe = data.recipes.find(recipe => recipe.id === parseInt(id));
        setRecipe(recipe);
      });
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }
  useParams
  

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{recipe.name}</h1>
      <img src={recipe.image} alt={recipe.name} className="w-full h-auto mb-4" />
      <div className="mb-4">
        <h2 className="text-2xl shadow appearance-none font-semibold mb-2">Ingredients</h2>
        <ul className="list-disc list-inside">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
        <ol className="list-decimal list-inside">
          {recipe.instructions.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default RecipeDetail;