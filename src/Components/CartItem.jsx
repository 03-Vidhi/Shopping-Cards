import React from 'react'
import {FcDeleteDatabase} from 'react-icons/fc'
import { useDispatch } from 'react-redux'
import { remove } from '../redux/slices/CardSlice';
import { toast } from 'react-hot-toast';
const CartItem = ({item,itemIndex}) => {
  const dispatch = useDispatch();
  const removefromCart = () =>{
    dispatch(remove(item.id));
    toast.error("Item Removed");
  }
  return (
    <div className='max-w-6xl mx-auto  border-b-4 mb-2'>
      <div className="flex justify-center
     gap-11 p-4 mt-7 ml-6">
        <div className='h-[180px]'>
          <img src={item.image} className='h-full w-full' />
        </div>
        <div>
          <h1 className="text-gray-700 font-bold text-lg text-left w-80">{item.title}</h1>
          <h1 className=" w-60 text-gray-600 font-normal text-[12px]  mt-2">{item.description.split(" ").slice(0,15).join(" ") + "..."}</h1>
          <div className=' flex justify-between mt-4'>
            <p className=' text-green-700 font-bold text-[18px]'>${item.price}</p>
            <div 
            className='text-2xl border rounded-full p-1 bg-red-400 cursor-pointer'
            onClick={removefromCart}>
              <FcDeleteDatabase/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem