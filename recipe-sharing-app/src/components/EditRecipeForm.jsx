import React, { useState } from 'react';
import {userecipeStore} from './recipeStore'

const EditRecipeForm = ({ recipe, onSave, onCancel }) => {
  const [name, setName] = useState(recipe.name);
  const [ingredients, setIngredients] = useState(userecipeStore);

  const handleSubmit = (e) => {
    event.preventDefault();
    onSave({ ...recipe, name, ingredients });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <textarea 
        value={ingredients} 
        onChange={(e) => setIngredients(e.target.value)} 
      />
      <button type="submit">Save</button>
      <button type="button" onClick={onCancel}>Cancel</button>
    </form>
  );
};

export default EditRecipeForm