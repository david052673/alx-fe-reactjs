import React from 'react';
import { useRecipeStore } from './recipeStore';


const DeleteRecipeButton = ({ deleteRecipe }) => {
  return (
    <button onClick={deleteRecipe}>Delete</button>
  );
};

export default DeleteRecipeButton;