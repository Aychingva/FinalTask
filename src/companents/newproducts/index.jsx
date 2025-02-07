import React, { useEffect, useState } from 'react'
import { getallproducts } from '../../services/product'
import Productcards from '../productcards'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './style.css';
//for home page
// import required modules
import { Pagination } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';
function Newproducts() {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        async function fetchproducts() {
            try{
                const data = await getallproducts();
                const productList = data.flatMap(category =>
                  category.subcategories.flatMap(subcategory =>
                    subcategory.products
                  )
                );
                const sortedProducts = productList.sort((a, b) => b.createdate - a.createdate);

       
                const limitedProducts = sortedProducts.slice(0, 5);
                
                setProducts(limitedProducts); 
              }
            catch(err){
                console.log("error",err)

            }
            
        }
        fetchproducts()

    },[])
  return (
    <div>
        <header className="flex flex-col items-center justify-center my-[50px] mt-[220px]">
        <h1 className='font-bold text-[30px]'>New arrivals</h1>
        <p className='text-[15px]'>Discover the latest products</p>
      </header>
      <div className=" flex justify-between  my-[50px] mx-[auto]" id="#intro">
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        // pagination={{
        //   clickable: true,
        // }}
        // modules={[Pagination]}
        autoplay={{
            
          disableOnInteraction: false,
        }}
      modules={[Autoplay]}
      loop={true}

        className="mySwiper"
      >
        
      

    {
    products.map((product) => (
      <SwiperSlide> <Productcards key={product.id} product={product}/></SwiperSlide>
    ))}
    </Swiper>
   
    
  
      </div>
    </div>
  )
}

export default Newproducts
