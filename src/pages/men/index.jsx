import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Productcards2 from '../../companents/productcards2.jsx';
import { getMenProducts } from '../../services/men.jsx';
import { menAction } from '../../store/actions/men.action.jsx';
import { Link } from 'react-router';
function Men() {
const dis=useDispatch()
      useEffect(() => {
              async function fetchProducts() {
                try {
                 
                  const salesProducts = await getMenProducts();
                  dis(menAction(salesProducts));
              } catch (error) {
                  console.error("Error fetching products:", error);
                }
              }
          
              fetchProducts();
            }, []); 
  const { men } = useSelector((state) => state);
  console.log(men)
  
  return (
    <div className="w-[100%] max-w-[1140px] flex gap-[30px] mx-[auto]">
      <div className="w-[20%]"></div>

      <div className="w-[80%]">
        <div className="grid grid-cols-3 gap-[10px] w-[100%]">
          {men && men.length > 0 ? (
            men.map((man) => (
              <Link to={`/product/${man.id}`} key={man.id}>
              <Productcards2 product={man} />
            </Link>
            ))
          ) : (
            <p>No products available</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Men;
