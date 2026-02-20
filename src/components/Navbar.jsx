import React from 'react'
import { FiLogOut, FiUser } from 'react-icons/fi'

const Navbar = ({ setToken }) => {
  return (
    <nav className='w-full bg-white shadow-sm'>
      <div className='flex items-center justify-between py-3 px-6 md:px-10'>
        <div className='text-2xl font-bold text-gray-900 md:hidden'>Admin</div>
        <div className='hidden md:block'>
          <h1 className='text-xl font-semibold text-gray-800'>Dashboard</h1>
        </div>

        <div className='flex items-center gap-4'>
          <div className='flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200'>
            <FiUser size={20} className='text-gray-600' />
            <span className='text-sm text-gray-700 hidden sm:inline'>Profile</span>
          </div>
          <button
            onClick={() => setToken('')}
            className='flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition text-sm'
          >
            <FiLogOut size={18} />
            <span className='hidden sm:inline'>Logout</span>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
