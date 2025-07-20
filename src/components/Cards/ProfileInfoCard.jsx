import React, { useContext } from 'react';
import { UserContext } from '../../context/userContext';
import { useNavigate } from 'react-router-dom';

const ProfileInfoCard = () => {
  const { user, clearUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    clearUser();
    navigate("/");
  };

  return user && (
    <div className='flex items-center space-x-4'>
      <img 
        src={user.profileImageUrl} 
        alt="Profile" 
        className='w-11 h-11 rounded-full object-cover border border-slate-600'
      />
      <div className='flex flex-col'>
        <span className='text-white text-sm font-semibold hover:text-sky-400 transition'>
          {user.name || ""}
        </span>
        <button
          className='text-red-400 hover:text-red-300 text-xs font-medium mt-0.5'
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProfileInfoCard;
