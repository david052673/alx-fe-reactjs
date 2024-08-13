import React, { useContext } from 'react';
import UserContext from './UserContext';

const UserDetails = () => {
  const user = UserContext(UserContext);

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
};
  
  export default UserDetails;