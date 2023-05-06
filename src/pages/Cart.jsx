import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import CartItem from '../Components/CartItem'


const Cart = () => {
  const {cart} = useSelector((state)=> state);
  const [totalAmount,settotalAmount] = useState(0);

  useEffect(() => {
    settotalAmount( cart.reduce((acc, curr) => acc+ curr.price, 0));
  }, [cart])
  return (
    <div >
      {
        cart.length > 0 ? 
        (<div className=' flex gap-3 max-w-6xl mx-auto '>
          <div>
            {
              cart.map((item, index) => {
                return <CartItem key={item.id} item={item} itemIndex={index}/>
              })
            }
          </div>
        <div className='fixed right-0 flex  flex-col justify-between p-9 mt-14 top-3 mr-60 h-[570px]'>
          <div className=' flex flex-col'>
            <div className=' text-[18px] font-bold uppercase text-green-600'>Your Cart</div>
            <div className=' text-green-800 font-extrabold text-[28px] uppercase'>Summary</div>
            <p className=' font-semibold text-[16px]'>
              <span>Total Items: {cart.length}</span>
            </p>
          </div>
          <div>
            <p className=' text-gray-600 mb-5 flex gap-2'>
              Total Amount: <span className=' font-semibold text-gray-900 '> ${totalAmount.toFixed(2)}</span></p>
            <button className=' border text-gray-200 p-1 px-20 py-2 bg-green-800 
            rounded-md font-semibold text-[20px]
            hover:bg-green-900
          hover:text-white transition duration-300 ease-in'>
              Checkout Now
            </button>
          </div>
          </div>
        </div>):
        (<div className=' flex justify-center items-center flex-col mt-40 gap-4'>
          <h1 className=' font-semibold text-[20px]'>Your Cart is Empty</h1>
          <Link to="/">
            <button className=' border text-gray-200 p-1 px-20 py-2 bg-green-800 
            rounded-md font-semibold text-[20px] uppercase
            hover:bg-green-900
          hover:text-white transition duration-300 ease-in'>Shop Now</button>
          </Link>
        </div>)
      }
    </div>
  )
}

export default Cart