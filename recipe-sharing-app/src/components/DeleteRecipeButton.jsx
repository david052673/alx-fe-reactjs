import React from 'react';

const DeleteRecipeButton = ({ onDelete }) => {
  return (
    <button onClick={onDelete}>Delete</button>
  );
};

export default DeleteRecipeButton;