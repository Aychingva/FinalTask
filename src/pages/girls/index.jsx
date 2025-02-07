import React, { useEffect } from 'react'
import Register from '../../companents/register'
import Login from '../../companents/login'
import { useDispatch, useSelector } from 'react-redux';
import { getGirlsProducts } from '../../services/girls';
import { GirlsAction } from '../../store/actions/girls.action';

function Girls() {
  const dis = useDispatch();
      useEffect(() => {
              async function fetchProducts() {
                try {
                 
                  const salesProducts = await getGirlsProducts();
                  dis(GirlsAction(salesProducts));
              } catch (error) {
                  console.error("Error fetching products:", error);
                }
              }
          
              fetchProducts();
            }, []); 
  const { girls } = useSelector(state => state);
  
    
     
     
  
     return (
      <div className='w-[100%] max-w-[1140px] flex gap-[30px] mx-[auto]'>
         <div className='w-[20%]'></div>
  
          <div className='w-[100%]'>
          <div className='grid grid-cols-3 gap-[10px] w-[100%]'>
              {
                girls.length > 0 ? (
                      girls.map((girl) => (
                          <Productcards2 key={girl.id} product={girl} />
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

export default Girls