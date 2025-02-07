import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi"; // Import icons from react-icons

function FAQ() {
  const [isDeliveryExpanded, setDeliveryExpanded] = useState(false);
  const [isReturnExpanded, setReturnExpanded] = useState(false);

  return (
    <div className="mt-[50px]">
      {/* Delivery Section */}
      <div className="section">
        <button
          className="flex justify-between items-center w-full p-4 rounded-md focus:outline-none"
          onClick={() => setDeliveryExpanded((prev) => !prev)}
        >
          <h3 className="font-semibold">Delivery</h3>
        
          {isDeliveryExpanded ? <FiMinus className="text-xl" /> : <FiPlus className="text-xl" />}
        </button>
        {isDeliveryExpanded && (
          <div className="section-content p-4 mt-2 rounded-md ]">
            <p>Free standart shipping on orders over $35 before tax, plus free returnd</p>
            <table className="mt-4">
                <thead>
                    <tr className="text-[#aba6a6] text-[12px] " >
                          <th className="px-[20px] leading-[1.5] py-[10px]">Type</th>
                        

                         <th  className="px-[20px] leading-[1.5] py-[10px]">How Long</th>
                       
                         <th className="px-[20px] leading-[1.5] py-[10px]">How Much</th>
                    </tr>
                  

                </thead>
                <hr className="w-[100%] " /> 
                
                <tbody >
                    <tr >
                        <td className="px-[20px] leading-[1.5] py-[10px]">Standart delivery</td>
                        <td className="px-[20px] leading-[1.5] py-[10px]">1-4 business days</td>
                        <td className="px-[20px] leading-[1.5] py-[10px]">$4.50</td>

                    </tr>
                </tbody>
                <hr/>
                <tbody >
                    <tr >
                        <td className="px-[20px] leading-[1.5] py-[10px]">Express delivery</td>
                        <td className="px-[20px] leading-[1.5] py-[10px]">1 business day</td>
                        <td className="px-[20px] leading-[1.5] py-[10px]">$10.00</td>

                    </tr>
                </tbody>
                <hr/>
                <tbody >
                    <tr >
                        <td className="px-[20px] leading-[1.5] py-[10px]">Pick up in store</td>
                        <td className="px-[20px] leading-[1.5] py-[10px]">1-3 business day</td>
                        <td className="px-[20px] leading-[1.5] py-[10px]">Free</td>

                    </tr>
                </tbody>
            </table>
          </div>
        )}
      </div>

     
      <div className="section">
        <button
          className="flex justify-between items-center w-full p-4  rounded-md focus:outline-none"
          onClick={() => setReturnExpanded((prev) => !prev)}
        >
          <h3 className="font-semibold">Return</h3>
       
          {isReturnExpanded ? <FiMinus className="text-xl" /> : <FiPlus className="text-xl" />}
        </button>
        {isReturnExpanded && (
          <div className="section-content p-4 mt-2 0 rounded-md">
            <p className="pb-[20px]">You have 60 days to return the item(s)using any of the following methods</p>
            <ul class="list-inside list-disc">
                <li>Free store return</li>
                <li>Free returns via USPS Dropoff Service</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default FAQ;
