import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Productcards2 from '../../companents/productcards2.jsx';
import { getBoysProducts } from '../../services/boys.jsx';
import { boysAction } from '../../store/actions/boys.action.jsx';

function Boys() {
const dis=useDispatch() 

  useEffect(() => {
            async function fetchProducts() {
              try {
               
                const salesProducts = await getBoysProducts();
                dis(boysAction(salesProducts));
            } catch (error) {
                console.error("Error fetching products:", error);
              }
            }
        
            fetchProducts();
          }, []); 
        

const boys = useSelector(state => state);




  //  console.log("women",boys)
   
   

   return (
    <div className='w-[100%] max-w-[1140px] flex gap-[30px] mx-[auto]'>
       <div className='w-[20%]'></div>

        <div className='w-[100%]'>
        <div className='grid grid-cols-3 gap-[10px] w-[100%]'>
            {
              boys.length > 0 ? (
                    boys.map((boy) => (
                        <Productcards2 key={boy.id} product={boy} />
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

export default Boys