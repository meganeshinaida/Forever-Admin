import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'

const Sidebar = () => {
  return (
    <div className='w-[18%] min-h-screen border-r-2'>
      <div className="flex flex-col gap-4 pt-6 pl-[20%] text-[15px]">
    
        <NavLink to='/add' className="flex item-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-1">
        <img src={assets.add_icon} alt="" />
        <p className='hidden md:block'>Add items</p>
        </NavLink>
        <NavLink to='/list' className="flex item-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-1">
        <img src={assets.order_icon} alt="" />
        <p className='hidden md:block'>List  items</p>
        </NavLink>
        <NavLink to='/order' className="flex item-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-1">
        <img src={assets.order_icon} alt="" />
        <p className='hidden md:block'>Add items</p>
        </NavLink>
       
      </div>
    </div>
  )
}

export default Sidebar
