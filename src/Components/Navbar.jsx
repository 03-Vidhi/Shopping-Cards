import React from 'react'
import {FaShoppingCart} from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  const {cart} = useSelector((state) => state);
  console.log(cart.length);
  return (
    
<div>
    <div className=' flex  justify-between items-center h-[55px] max-w-6xl mx-auto'>
    <NavLink to="/">
        <div className='ml-5'>
        <img src='../logo.png' className='h-10'/>
        </div>
    </NavLink>

    <div className='flex items-center font-medium text-slate-100 mr-5 space-x-5'>
        <NavLink to="/">
        <p className='font-bold'>Home</p>
        </NavLink>
        <NavLink to="/cart">
        <div className='relative'>
        <FaShoppingCart className=' text-2xl'/>
        {
         cart.length ? <span className=' absolute -top-1 -right-2 bg-green-600 text-xs
         w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white'>
          {cart.length}</span> : null
        }
        
          
        </div>
        </NavLink>

    </div>
    </div>
</div>
  )
}

export default Navbar