import React from 'react'
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
function Footer() {
  return (
    <div className='bg-[#1e212c]'>
        <div className='   max-w-[1450px]  h-[258px] flex gap-[70px] mx-[auto]'>
            <div className='flex flex-col  pt-[30px]'>
                <h1 className='text-[#ffff] pb-[20px]'>Help</h1>
                <p className=' text-[#fff] opacity-[60%]'>Delivery</p>
                <p className='text-[#fff] opacity-[60%] ' >FAQ</p>
                <p className='text-[#fff] opacity-[60%]'>Track order</p >
                <p className='text-[#fff] opacity-[60%]'>Contacts</p>
                <p className='text-[#fff] opacity-[60%]'>Blog</p>
            </div>
            <div className='flex flex-col pt-[30px]'>
                <h1 className='text-[#ffff] pb-[20px]'>Shop</h1>
                <p className=' text-[#fff] opacity-[60%]'>New arrivals</p>
                <p className='text-[#fff] opacity-[60%] ' >Trending now</p>
                <p className='text-[#fff] opacity-[60%]'>Sales</p >
                <p className='text-[#fff] opacity-[60%]'>Brands</p>
    
            </div>
            <div className='flex flex-col pt-[30px]'>
                <h1 className='text-[#ffff] pb-[20px]'> Get in Touch</h1>
                <p className=' text-[#fff] opacity-[60%]'><span className='text-[#fff]'>Call:</span>(405)555-0128</p>
                <p className='text-[#fff] opacity-[60%] ' ><span className='text-[#fff]'>Email:</span>hello@createx.com</p>
               
    
            </div>
            <div className='flex flex-col pt-[30px] gap-[20px]'>
                <p className='text-[#fff]'>Download Our App</p>
                <div className='flex gap-[10px]'>
                <button className='bg-[#666] w-[110px] h-[48px] text-[#ffff] text-[12px] flex justify-center items-center rounded-md '>   <FaApple className="text-[30px] ml-[4px]"/> Download on the Apple Store</button>
                <button className='bg-[#666] w-[110px] h-[48px] text-[12px] text-[#ffff]  flex justify-center items-center rounded-md'><FaGooglePlay className="text-[30px] ml-[4px] "/>Get it on Google Play</button>
                </div>
            </div>
            

        </div>
        
        <div className=' max-w-[1450px] flex  justify-between gap-[50px] pb-[10px] mx-[auto]'>
            
                <p className='text-[#fff]'>© All rights reserved. Made with
                by Createx Studio </p>
                <p >Go to top</p>
            </div>

    </div>
  )
}

export default Footer