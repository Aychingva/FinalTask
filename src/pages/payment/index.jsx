import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { decreaseQuantityAction, increaseQuantityAction, removetobasketaction } from '../../store/actions/basket.action';
import { SiVisa } from "react-icons/si";

import { FaCcMastercard } from "react-icons/fa6";
import emailjs from 'emailjs-com';
function Payment() {
    const dis = useDispatch();
    const { basketlist } = useSelector((state) => state);
    const [shippingCost, setShippingCost] = useState(0);

    const handleDecrease = (id) => {
        console.log('Decrease action triggered for id:', id);
        dis(decreaseQuantityAction(id));
    };

    const handleIncrease = (id) => {
        console.log('Increase action triggered for id:', id);
        dis(increaseQuantityAction(id));
    };
    const RemoveFromBasket = (id) => {
        dis(removetobasketaction(id));

    }

    const handleShippingChange = (e) => {
        const selectedValue = e.target.value;

        if (selectedValue === "Courier to your address") {
            setShippingCost(25);
        }
        if (selectedValue === "Pick up from store") {
            setShippingCost(0)
        }
        if (selectedValue === "UPS Ground Shipping") {
            setShippingCost(10)
        }
        if (selectedValue === "Pick up at Createx Locker") {
            setShippingCost(8.50)
        }
        if (selectedValue === "Createx Global Export") {
            setShippingCost(15)
        }
    };
    console.log(setShippingCost)
    const [selectedPayment, setSelectedPayment] = useState("");

    const totalSum = basketlist.reduce((sum, product) => sum + product.price * product.quantity, 0);
    // const handleCalculateTotal = () => {
    //     const total = totalSum + shippingCost;
    //     alert(`Subtotal: $${totalSum}, Shipping: $${shippingCost}, Total: $${total.toFixed(2)}`);
    //   };
    const formRef = useRef();
    

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bjio9al", // Replace with your EmailJS Service ID
        "template_ym7ouc2", // Replace with your EmailJS Template ID
        formRef.current,    // Use the correct form reference
        "GFm3F7SNo30l374HF" // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log("Success:", result.text);
          alert("Payment details sent successfully!");
        },
        (error) => {
          console.log("Error:", error.text);
          alert("Failed to send payment details.");
        }
      );
        formRef.current.reset();
  };
  

    return (
        <div className='container mx-[200px] max-w-[1140px] '>
            <h2 className="text-2xl font-semibold mb-[10px]">Checkout</h2>

            <div className='flex  gap-[15px]'>

                <div className='w-[70%]  '>

                    <div className="lg:w-[70%] border rounded-lg shadow-sm bg-[#F4F5F6] px-[10px] py-[20px] ">
                        {basketlist.length > 0 ? (
                            <>
                                {basketlist.map((product) => (
                                    <div
                                        key={product.id}
                                        className="flex items-center p-[5px] mb-4"
                                    >
                                        {/* Product Image */}
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-[10%] h-[10%] object-cover "
                                        />

                                        {/* Product Details */}
                                        <div className="flex-col p-[20px] ">
                                            <h3 className="text-lg font-medium ">
                                                {product.title}
                                            </h3>
                                            <p className="text-sm text-gray-600">
                                                Size: {product.size || 'N/A'}
                                            </p>
                                        </div>

                                        {/* Quantity Controls and Price */}
                                        <div className="flex justify-center items-center gap-[30px] pl-[60px]">
                                            <div >
                                                <button className='border  h-[40px] px-[20px] rounded  flex items-center justify-between mb-[8px] gap-[5px]'>
                                                    <span className=" font-medium ">{product.quantity}</span>


                                                    <span>
                                                        <IoMdArrowDropup onClick={() => handleIncrease(product.id)} />
                                                        <IoMdArrowDropdown onClick={() => handleDecrease(product.id)} />
                                                    </span>
                                                </button>

                                            </div>
                                            <p className="font-semibold">
                                                ${product.price * product.quantity}
                                            </p>


                                            <button className="border-[1px] px-4 py-2 rounded-lg border-[rgb(23,105,106)] " onClick={() => RemoveFromBasket(product.id)}>
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                ))}


                                <div className="flex justify-between items-center mt-4 pt-4 border-t">
                                    <h3 className="font-semibold text-xl">Total:</h3>
                                    <span className="font-semibold text-xl">${totalSum}</span>
                                </div>
                            </>
                        ) : (
                            <p className="text-gray-600">Your basket is empty.</p>
                        )}

                    </div>

                    <div className="flex  ">
                      <form ref={formRef} onSubmit={sendEmail}>
                            <div className='flex justify-between mt-[100px] gap-[50px] '>
                                <div className='flex-col'>
                                    <label htmlFor="firstname" className="block text-sm font-medium text-gray-700">
                                        First Name
                                    </label>
                                    <input
                                        id="firstname"
                                        name="firstname"
                                        type="text"
                                        placeholder="Enter your name"
                                        className="mt-1 p-2 border rounded-md outline-none w-[300px]"
                                    />
                                </div>
                                <div className='flex-col'>
                                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                                        Last Name
                                    </label>
                                    <input
                                        id="lastName"
                                        name="lastName"
                                        type="text"
                                        placeholder="Enter your last name"
                                        className="mt-1 p-2 border rounded-md outline-none w-[300px]"
                                    />

                                </div>
                            </div>


                            {/* County */}
                            <div className='flex justify-between mt-[20px] gap-[30px] '>
                                <div className='flex-col'>
                                    <label htmlFor="county" className="block text-sm font-medium text-gray-700">
                                        County
                                    </label>
                                    <input
                                        id="county"
                                        name="county"
                                        type="text"
                                        placeholder="Enter your county"
                                        className="mt-1 p-2 border outline-none rounded-md w-[300px]"
                                    />
                                </div>
                                <div className='flex-col'>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                        Email
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="Enter your email"
                                        className="mt-1 p-2 border rounded-md  outline-none w-[300px]"
                                    />
                                </div>
                            </div>



                            {/* Phone */}
                            <div className='flex justify-between mt-[20px] gap-[30px]'>
                                <div className='flex-col'>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                        Phone
                                    </label>
                                    <input
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        placeholder="Enter your phone number"
                                        className="mt-1 p-2 border rounded-md  outline-none w-[300px]"
                                    />
                                </div>
                                <div className='flex-col'>
                                    <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                                        City
                                    </label>
                                    <input
                                        id="city"
                                        name="city"
                                        type="text"
                                        placeholder="Enter your city"
                                        className="mt-1 p-2 border rounded-md  outline-none w-[300px]"
                                    />
                                </div>
                            </div>



                            {/* Address */}
                            <div className='flex justify-between mt-[20px] gap-[30px] mb-[50px]'>
                                <div className='flex-col'>
                                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                                        Address
                                    </label>
                                    <input
                                        id="address"
                                        name="address"
                                        type="text"
                                        placeholder="Enter your address"
                                        className="mt-1 p-2 border rounded-md outline-none w-[300px]"
                                    />
                                </div>
                                <div className='flex-col'>
                                    <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">
                                        ZIP Code
                                    </label>
                                    <input
                                        id="zipCode"
                                        name="zipCode"
                                        type="text"
                                        placeholder="Enter your ZIP code"
                                        className="mt-1 p-2 border outline-none rounded-md w-[300px]"
                                    />
                                </div>
                            </div>

                            {/* ZIP Code */}


                            {/* Submit Button */}

                        </form>
                    </div>
                    <hr />
                    <div className='w-[600px]'>
                        <h2 className="text-xl font-semibold mb-4">Shipping Method</h2>
                        <form className='pb-[10px]'>
                            <div className='flex justify-between '>
                                <div className='flex-col  space-x-2'>
                                    <input type="radio" id="courier" name="shipping" value="Courier to your address" className=' peer appearance-none w-[12px] h-[12px] border-[1px] border-grey-500 rounded-full
         checked:bg-[rgb(23,105,106)] checked:ring-[3px] checked:ring-white focused-bg[rgb(23,105,106)]'defaultChecked onChange={handleShippingChange} />
                                    <label htmlFor="courier">Courier to your address</label>
                                    <p className='text-gray-600 pl-[10px]'>Estimated date:September 9</p>

                                </div>
                                <p>$25.00</p>
                            </div>
                            <div className='flex justify-between'>
                                <div className='flex-col  space-x-2'>
                                    <input type="radio" id="pickup" name="shipping" value="Pick up from store" className=' peer appearance-none w-[12px] h-[12px] border-[1px] border-grey-500 rounded-full
         checked:bg-[rgb(23,105,106)] checked:ring-[3px] checked:ring-white focused-bg[rgb(23,105,106)] ' onChange={handleShippingChange} />
                                    <label htmlFor="pickup">Pick up from store</label>
                                    <p className='text-gray-600 pl-[10px]'>Pick up on September 8 from 12:00</p>
                                </div>
                                <p>Free</p>
                            </div>
                            <div className='flex justify-between'>
                                <div className='flex-col  space-x-2'>
                                    <input type="radio" id="ups" name="shipping" value="UPS Ground Shipping" className='  peer appearance-none w-[12px] h-[12px] border-[1px] border-grey-500 rounded-full
         checked:bg-[rgb(23,105,106)] checked:ring-[3px] checked:ring-white focused-bg[rgb(23,105,106)]' onChange={handleShippingChange} />
                                    <label htmlFor="ups">UPS Ground Shipping</label>

                                    <p className='text-gray-600 pl-[10px]'>Up to one week</p>

                                </div>
                                <p>$10.00</p>

                            </div>
                            <div className='flex justify-between'>
                                <div className="flex-col  space-x-2">
                                    <input type="radio" id="locker" name="shipping" value="Pick up at Createx Locker" className='  peer appearance-none w-[12px] h-[12px] border-[1px] border-grey-500 rounded-full
         checked:bg-[rgb(23,105,106)] checked:ring-[3px] checked:ring-white focused-bg[rgb(23,105,106)]'   onChange={handleShippingChange} />
                                    <label htmlFor="locker">Pick up at Createx Locker</label>
                                    <p className='text-gray-600 pl-[10px]'>Pick up on September 8 from 12:00</p>

                                </div>
                                <p>$8.50</p>
                            </div>
                            <div className='flex justify-between'>
                                <div className="flex-col  space-x-2">
                                    <input type="radio" id="export" name="shipping" value="Createx Global Export" className=' peer appearance-none w-[12px] h-[12px] border-[1px] border-grey-500 rounded-full
         checked:bg-[rgb(23,105,106)] checked:ring-[3px] checked:ring-white focused-bg[rgb(23,105,106)]'onChange={handleShippingChange} />
                                    <label htmlFor="export">Createx Global Export</label>
                                    <p className='text-gray-600 pl-[10px]'>3-4 days</p>
                                </div>
                                <p>$15.00</p>
                            </div>
                        </form>
                    </div>
                    <div>
                        <hr />

                        <h2 className='text-[24px]'>4.Payment Method </h2>



                        <div>
                            <form  ref={formRef}  onSubmit={sendEmail}>
                                <div className="flex flex-col space-y-4">
                                    {/* Card Option */}
                                    <div className="flex items-center space-x-2 order shadow w-[300px] h-[74px] px-[10px] mt-[20px]">
                                        <input
                                            type="radio"
                                            id="paypal"
                                            name="payment"
                                            value="PayPal"
                                            className="peer appearance-none w-[12px] h-[12px] border-[1px] border-grey-500 rounded-full
         checked:bg-[rgb(23,105,106)] checked:ring-[3px] checked:ring-white focused-bg[rgb(23,105,106)]"
                                            onChange={() => setSelectedPayment("PayPal")}
                                        />
                                        <label htmlFor="paypal" >Card</label>
                                        <SiVisa className='flex justify-center items-center text-[30px]  text-blue-500  ' />

                                        <FaCcMastercard className="flex justify-center items-center text-[30px] text-red-500" />
                                    </div>

                                    {/* Conditional Card Payment Details */}
                                    {selectedPayment === "PayPal" && (
                                        <div className="flex flex-col border shadow w-[400px] px-[30px] py-[30px] ">
                                            <label htmlFor="cardNumber">Card Number</label>
                                            <input
                                                type="text"
                                                id="cardNumber"
                                                name="cardNumber"
                                                placeholder="Enter your card number"
                                                className="rounded-md border border-gray-300 w-[200px] outline-none mb-4"
                                            />

                                            <div className="flex gap-4">
                                                {/* Expiration Date */}
                                                <div className="flex flex-col">
                                                    <label htmlFor="expirationDate">Date</label>
                                                    <input
                                                        placeholder="mm/yy"
                                                        name="expirationDate"
                                                        className="w-[100px] border rounded-md outline-none"
                                                    />
                                                </div>

                                                {/* CVV */}
                                                <div className="flex flex-col">
                                                    <label htmlFor="cvv">CVV</label>
                                                    <input
                                                        type="password"
                                                        name="cvv"
                                                        placeholder="cvv"
                                                        className="w-[100px] border rounded-md outline-none"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* Cash Option */}
                                    <div className="flex items-center space-x-2 border shadow w-[300px] h-[74px] px-[10px] mb-[20px]">
                                        <input
                                            type="radio"
                                            id="stripe"
                                            name="cash"
                                            value="Stripe"
                                            onChange={() => setSelectedPayment("Stripe")}
                                            className="peer appearance-none w-[12px] h-[12px] border-[1px] border-grey-500 rounded-full
         checked:bg-[rgb(23,105,106)] checked:ring-[3px] checked:ring-white focused-bg[rgb(23,105,106)]"
                                        />
                                        <label   >Cash</label>
                                    </div>
                                </div>
                            </form>


                        </div>
                    </div>
                    <div className='mt-[50px]'>
                        <hr />
                        <h2 className='text-[24px] mb-[20px]'>5.Additional Information</h2>
                        <p className='mb-[10px]'>Order notes</p>
                        <textarea
                            className="w-[700px] h-[100px] border mb-[50px] p-2 outline-none rounded-md resize-none"
                            placeholder="Notes about your order,e.g.special noted for delivery"
                        ></textarea>
                    </div>



                </div>
                <div className='w-[30%]  '>
                    <div className='border-[2px] w-[300px] h-[250px]  p-[20px] bg-[#F4F5F6]'>
                        <h2 className='font-bold text-[20px] mb-[20px]'>Order Totals</h2>
                        <hr />
                        <div className='flex justify-between items-center mt-[20px]'>
                            <p > Subtotal:</p>
                            <p>{totalSum}$</p>
                        </div>
                       <div className='flex justify-between items-center mt-[5px]'>
                        <p >Shipping costs:</p>
                        <p>{shippingCost}$</p>
                       </div>
                        <p className='mb-[10px] mt-[5px]'>Discount:</p>
                        <hr />
                         <div className='flex justify-between items-center mt-[5px]'>
                             <p className='mt-[15px] font-bold'> Order Total:</p>
                             <p>{totalSum + shippingCost}$</p>
                        </div>

                    </div>
                    <button className='bg-[rgb(23,105,106)] mt-[20px] w-[300px] text-[#ffff] py-[10px] ' onClick={sendEmail}>Complete order</button>

                </div>



            </div>

        </div>
    );
}

export default Payment;
