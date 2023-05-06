import React, { useEffect, useState } from 'react'
import Spinner from '../Components/Spinner';
import Product from '../Components/Product';
const Home = () => {
const API_URL = "https://fakestoreapi.com/products";
const [loading, setloading] = useState(false);
const [posts ,setposts] = useState([]);

async function fetchProductData() {
  setloading(true);
  try{
    const res = await fetch(API_URL);
    const data = await res.json();
    setposts(data);
  }
  catch(error){
    console.log("Error in fetching the data or API");
    setposts([]);
  }
  setloading(false);
}

useEffect( () =>{
  fetchProductData();
},[]);
  return (
    <div >
      {
        loading ? <Spinner/> :
        posts.length > 0 ? 
        (<div className=' grid xs:gird-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-x-5 space-y-10
        min-h-[80vh] '>
          {
            posts.map((post) => (
              <Product key={post.id} post={post}/>
            ))
          }
        </div>
          ):
        (<div className=' flex justify-center items-center'>
          <p>No Post Found</p>
        </div>)
      }
    </div>
  )
}

export default Home