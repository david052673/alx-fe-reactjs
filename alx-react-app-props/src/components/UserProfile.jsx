import React from 'react'
const UserProfile = () => {
  const user = UseContext(UserContext);

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
};
  export default UserProfile;