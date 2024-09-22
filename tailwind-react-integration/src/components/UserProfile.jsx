

function UserProfile() {
  return (
    <div className="user-profile bg-gray-100 p-8 max-w-sm mx-auto my-20 rounded-lg shadow-lg
    container mx-auto p-4 sm:p-4 md:p-8 max-w-xs sm:max-w-xs md:max-w-sm hover:shadow-xl transition-shadow duration-300 ease-in-out p-6 bg-white rounded-lg">
      <img src="https://via.placeholder.com/150" alt="User" classNmae="rounded-full w-36 h-36 mx-auto
      w-24 h-24 sm:w-24 sm:h-24 md:w-36 md:h-36  hover:scale-110 transition-transform duration-300 ease-in-out" src="profile.jpg "> 
      <h1 className="text-xl text-blue-800 my-4 
      text-lg sm:text-lg md:text-xl hover:text-blue-500 transition-colors duration-300 ease-in-ou ">John Doe</h1>
      <p class="text-gray-600 text-base
      text-sm sm:text-sm md:text-base text-gray-600">
        Developer at Example Co. Loves to write code and explore new technologies.</p>
    </div>
  );
}

export default UserProfile;