import React from 'react';
import { MdFavoriteBorder } from "react-icons/md";
import { FaShoppingBasket } from "react-icons/fa";
//for home page
function Productcards({ product }) {
  return (
    <div className="mx-[70px] mb-[100px]">
      <div className="p-[25px] rounded-md relative group">

       
        <img 
          src={product.image} 
          alt={product.title} 
          className="w-full h-[300px] object-cover mx-auto rounded-lg"
        />
        <div>
        <h2 className="font-semibold mb-2">{product.title}</h2>
          
        </div>
        
        <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          
          
          <div className="flex gap-[10px]">
            <p className="font-bold text-[rgb(248,83,83)]">${product.price}</p>
            <p className="line-through text-[#111]">${product.originprice}</p>
          </div>
          
          <div>
            <button className="bg-[rgb(23,105,106)] w-full flex items-center justify-center py-2 text-white">
              Add to Cart <FaShoppingBasket className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Productcards;


