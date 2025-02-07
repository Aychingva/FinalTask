import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addtofavaction, removetofavaction } from '../../store/actions/fav.action';
import { CiHeart } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { decreaseQuantityAction, increaseQuantityAction, removetobasketaction} from '../../store/actions/basket.action';
import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from 'react-router';
import { Navigate } from 'react-router';
import { useNavigate } from 'react-router';
function Basket({ openRight, setOpenRight  }) {
  const dispatch = useDispatch();
  const { basketlist } = useSelector((state) => state);
  const { favlist } = useSelector((state) => state);

  const handleCloseSidebar = () => {
    setOpenRight(false);
  };

  const  RemoveFromBasket=(id)=>{
    dispatch( removetobasketaction(id)); 

  }
  const handleDecrease = (id) => {
    console.log('Increase action triggered for id:', id); 
    dispatch(decreaseQuantityAction(id)); 
  };
  const handleIncrease = (id) => {
    console.log('Increase action triggered for id:', id); 
    dispatch(increaseQuantityAction(id)); 
  };
  const navigate=useNavigate()
const handleclick=()=>{
    navigate("/payment")


}

  const totalSum = basketlist.reduce((sum, product) => sum + product.price*product.quantity, 0);


  return (
    <div>
      <div
        className={`fixed top-0 right-0 h-full bg-gray-100 shadow-lg transition-transform duration-300 ${
          openRight ? 'translate-x-0' : 'translate-x-full'
        } w-[300px] z-[1]`}
      >
        <button
          className="absolute top-4 left-4 text-gray-600 hover:text-gray-800"
          onClick={handleCloseSidebar}
        >
          Close
        </button>

        <div className="p-4 h-full flex flex-col">
          <h2 className="text-lg font-semibold mb-4">Basket</h2>
          <div className="flex-grow overflow-y-auto">
            {basketlist.map((product) => (
              <div key={product.id} className="flex items-center mb-4">
                
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-[25%] h-[25%] object-cover mr-4"
                />

                <div className="flex-grow">
                  <h3 className="text-sm font-medium">{product.title}</h3>
                  <p className="text-sm text-gray-600">Size: {product.size || 'N/A'}</p>
                  
                     <button className='border mt-6 h-[40px] px-[20px] rounded  flex items-center justify-between  gap-[10px]'>
                                <span className=" font-medium ">{product.quantity}</span>
                                
                              
                               <span>
                               <IoMdArrowDropup onClick={() => handleIncrease(product.id)} />
                                <IoMdArrowDropdown onClick={() => handleDecrease(product.id)} />
</span>
                  </button>


                  <p className="text-sm text-gray-600">${product.price*product.quantity}</p>
                  <div>
                  {favlist.find((item) => item.id === product.id) ? (
                    <button
                      onClick={() => {
                        dispatch(removetofavaction(product.id)); 
                      }}
                      className="text-[#b75050] flex justify-center items-center gap-[5px]" 
                    >
                       <span className='text-[#b75050]' >Move to</span> 
                      <CiHeart />
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        dispatch(addtofavaction(product)); 
                      }}
                      className='flex justify-center items-center gap-[5px]'
                    >
                       <span className='text-[#b75050] '>Move to</span>  
                      <CiHeart />
                    </button>
                  )}
                </div>
                </div>

                <button onClick={() => RemoveFromBasket(product.id)}>
                  <MdDeleteOutline />
                </button>

                {/* Favorite Button */}
                
              </div>
            ))}
            <hr/>
             <div>
      <h3 className="font-semibold text-lg flex justify-between"><span>Subtotal:</span> ${totalSum}</h3>
      <button className='bg-[rgb(23,105,106)] w-[100%] h-[40px] '  onClick={handleclick}>Checkout</button>
      </div>
          </div>
        </div>
      </div>
    


      {openRight && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-25 z-[0]"
          onClick={handleCloseSidebar}
        />
      )}
    </div>
  );
}

export default Basket;
