import React from 'react'
import ProfileInfoCard from '../Cards/ProfileInfoCard'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='h-16 bg-slate-800 border-b border-slate-700 backdrop-blur-[2px] py-2.5 px-4 md:px-8 sticky top-0 z-30 shadow-md'>
      <div className='container mx-auto flex items-center justify-between gap-4'>
        <Link to="/dashboard">
          <h2 className='text-xl md:text-3xl font-semibold text-white hover:text-sky-300 transition'>
            RoleCrack
          </h2>
        </Link>

        <ProfileInfoCard />
      </div>
    </div>
  )
}

export default Navbar
