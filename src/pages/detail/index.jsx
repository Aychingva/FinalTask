import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addtobasketaction } from "../../store/actions/basket.action";
import { addtofavaction } from "../../store/actions/fav.action";
import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { SlBasket } from "react-icons/sl";
import { CiHeart } from "react-icons/ci";
import FAQ from "../../companents/detail";
import { Link } from "react-router";

function Detail() {
  const { id } = useParams();
  const womenProducts = useSelector((state) => state.women || []);
  const menProducts = useSelector((state) => state.men || []);
  const salesProducts = useSelector((state) => state.products || []);
  console.log("women",womenProducts)

  // Find the product by ID
  const product =
    womenProducts.find((prod) => prod.id === parseInt(id, 10)) ||
    menProducts.find((prod) => prod.id === parseInt(id, 10)) ||
    salesProducts.find((prod) => prod.id === parseInt(id, 10));

  const dispatch = useDispatch();
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert("Please select both size and color before adding to the cart.");
      return;
    }

    dispatch(
      addtobasketaction({
        ...product,
        size: selectedSize,
        color: selectedColor,
        quantity,
      })
    );
  };

  const addToFavorites = () => {
    dispatch(addtofavaction({ ...product }));
  };

  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => setQuantity((prev) => Math.max(prev - 1, 1));

  if (!product) {
    return <p className="text-center text-gray-500 mt-4">Product not found.</p>;
  }

  return (
    <div className="container mx-auto">
      
      <div className="flex flex-wrap gap-[50px]">
        <img
          src={product.image}
          alt={product.title}
          className="w-[25%] h-[20%] mb-[100px] mt-[50px]"
        />
        <div className="ml-0 md:ml-8 mt-6 md:mt-0">
          <div className="flex justify-between items-center mt-[50px]">
          <h2 className="text-3xl font-bold ">{product.title}</h2>
          <Link to={`/review/${product.id}`} className="underline text-[rgb(23,105,106)]">
      Review
    </Link>
          </div>
          <p className="mt-4 text-gray-700">{product.description}</p>
          <p className="mt-4 text-xl font-semibold">${product.price}</p>
          
        
          <div className="mt-4">
      <label htmlFor="color" className="block mb-2 font-medium">
        Color:
      </label>

      <div className="flex gap-4">
        {product.colors.map((color) => (
          <label key={color} className="flex items-center">
            <input
              type="radio"
              name="color"
              value={color}
              checked={selectedColor === color}
              onChange={(e) => setSelectedColor(e.target.value)}
              className="hidden"
            />
            <span
              className={`w-8 h-8 rounded-full inline-block border-2 border-gray-300 cursor-pointer ${
                selectedColor === color ? "ring-2 ring-green-900" : ""
              }`}
              style={{
                backgroundColor: color,
              }}
            ></span>
          </label>
        ))}
      </div>
    </div>
    <div className="mt-4">
            <label htmlFor="size" className="block mb-2 font-medium">
              Size:
            </label>
            <select
              id="size"
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
              className="border border-gray-300 py-2 rounded-md focus:ring-2 outline-none px-[40px]"
            >
              <option value="">Select Size</option>
              {product.sizes.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>
  



          {/* Quantity and Buttons */}
          <div className="flex gap-[20px]">
            <button className="border mt-6 h-[40px] px-[20px] rounded flex items-center justify-between gap-[10px]">
              <span className="font-medium">{quantity}</span>
              <span>
                <IoMdArrowDropup onClick={handleIncrease} />
                <IoMdArrowDropdown onClick={handleDecrease} />
              </span>
            </button>

            <button
              className="mt-6 bg-[rgb(23,105,106)] text-white px-[40px] py-2 rounded-lg hover:bg-[rgb(94,156,156)] transition flex justify-center items-center gap-[10px] text-[18px]"
              onClick={handleAddToCart}
            >
              <span>
                <SlBasket />
              </span>
              <span>Add to Cart</span>
            </button>
            <button
              className="mt-6 bg-[#fff] border text-[rgb(23,105,106)] px-[40px] py-2 rounded-lg hover:bg-[rgb(94,156,156)] transition flex justify-center items-center gap-[10px] text-[18px]"
              onClick={addToFavorites}
            >
              <span>
                <CiHeart />
              </span>
              <span>Favorite</span>
            </button>
          </div>

          <FAQ />
        </div>
      </div>
    </div>
  );
}

export default Detail;
