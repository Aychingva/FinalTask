import React, { useEffect, useState } from 'react'
import { getSalesProducts } from '../../services/product';
import Productcards from '../../companents/productcards';
import Productcards2 from '../../companents/productcards2.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { ProductsAction } from '../../store/actions/product.action.jsx';
import { Link } from 'react-router';

function Sales() {


const dis=useDispatch()
    useEffect(() => {
        async function fetchProducts() {
          try {
           
            const salesProducts = await getSalesProducts();
            dis(ProductsAction(salesProducts));
        } catch (error) {
            console.error("Error fetching products:", error);
          }
        }
    
        fetchProducts();
      }, []); 
    
   const { products } = useSelector(state => state);
  
   console.log("product",products)
   
   

   return (
    <div className='w-[100%] max-w-[1140px] flex gap-[30px] mx-[auto]'>
       <div className='w-[20%]'></div>

        <div className='w-[100%]'>
        <div className='grid grid-cols-3 gap-[10px] w-[100%]'>
            {
                products.length > 0 ? (
                    products.map((product) => (
                        <Link to={`/product/${product.id}`}>
                            <Productcards2 key={product.id} product={product} />
                        </Link>
                    ))
                ) : (
                    <p>No products available</p> // You can handle the empty state as needed
                )
            }
        </div>
        </div>
    </div>
   )
}

export default Sales;
