import React from 'react';
import { useRecipeStore } from './recipeStore';
import {useNavigate} from './Navigate':


const DeleteRecipeButton = ({ deleteRecipe }) => {
  return (
    <button onClick={deleteRecipe}>Delete</button>
  );
};

export default DeleteRecipeButton;