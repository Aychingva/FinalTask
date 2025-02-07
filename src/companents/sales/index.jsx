import React, { useEffect, useState } from 'react'
import { getSalesProducts } from '../../services/product';
import Productcards from '../productcards';
import { useSelector } from 'react-redux';

function Salesproduct() {
   
    const [products,setProducts]=useState([])
    useEffect(()=>{
        async function fetchproducts()
        {
            try{
                const data = await getSalesProducts();
                setProducts(data);
                console.log(data)
            }
            catch(error){
                console.log("error",error)
            }
        }
        fetchproducts()

    },[])
  return (
    <div>

       <header className='className="flex flex-col items-center justify-center my-[30px] mx-[100px] mt-[220px]' >
        <h1 className='text-[30px] font-bold' >Sale up to 70%</h1>
       </header>
        <div className='flex gap-[10px] my-[50px] '>
            {
                products.map((product)=>(
                    <Productcards  key={product.id} product={product}/>
                ))
            }
                    
            

        </div>

    </div>
  )
}

export default Salesproduct