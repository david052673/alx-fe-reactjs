import { useRecipeStore } from './recipeStore';
import react-router-dom from 'react'

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.recipes);

  return (
    <div>
      {recipes.map(recipe => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};
const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  link to </recipeStore>
  return (
    <div>
      <input 
        type="text" 
        placeholder="Search recipes..." 
        onChange={handleSearchChange} 
      />
      <ul>
        {filteredRecipes.map((recipe) => (
          <li key={recipe.id}>
            <h3>{recipe.name}</h3>
            <p>{recipe.ingredients}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;