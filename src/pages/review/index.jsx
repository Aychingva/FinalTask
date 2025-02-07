import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addtobasketaction } from '../../store/actions/basket.action';
import Report from '../../companents/review';
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";

function Review() {
    const womenProducts = useSelector((state) => state.women || []);
    const menProducts = useSelector((state) => state.men || []);
    const salesProducts = useSelector((state) => state.products || []);

    const { id } = useParams();
    const [selectedColor, setSelectedColor] = useState("");
    const [selectedSize, setSelectedSize] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [open, setOpen] = useState(false);

    // State to store likes and dislikes for each review
    const [reviews, setReviews] = useState([
        { id: 1, name: "Devon Laniel", text: "Phasellus varius faucibus ultrices odio in...", likes: 0, dislikes: 0, liked: false, disliked: false },
        { id: 2, name: "Annetto Black", text: "@Devon Lane Egestas fermentum natoque sollicitudin mauris...", likes: 0, dislikes: 0, liked: false, disliked: false },
        { id: 3, name: "Albert Flores", text: "Libero commodo sit dui ac proin...", likes: 0, dislikes: 0, liked: false, disliked: false },
        { id: 4, name: "Marvin Mckinney", text: "Ullamcorper nibh sed ac ipsum nunc imperdiet rhoncus...", likes: 0, dislikes: 0, liked: false, disliked: false }
    ]);

    const dispatch = useDispatch();

    const product =
        womenProducts.find((prod) => prod.id === parseInt(id, 10)) ||
        menProducts.find((prod) => prod.id === parseInt(id, 10)) ||
        salesProducts.find((prod) => prod.id === parseInt(id, 10));

    if (!product) {
        return <div>Product not found</div>;
    }

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

    // Update likes/dislikes for the specific review
    const handleReaction = (reviewId, type) => {
        setReviews((prevReviews) =>
            prevReviews.map((review) =>
                review.id === reviewId
                    ? {
                          ...review,
                          [type]: review[type] + 1,
                          liked: type === "likes" ? !review.liked : review.liked,
                          disliked: type === "dislikes" ? !review.disliked : review.disliked
                      }
                    : review
            )
        );
    };

    return (
        <div className="flex gap-[50px]">
            <div className="w-[60%] flex flex-col">
                <button
                    className="bg-[rgb(23,105,106)] w-[99px] mt-[50px] h-[44px] mb-[50px] mx-[20px]"
                    onClick={() => {
                        setOpen(false); // Force close first
                        setTimeout(() => setOpen(true), 0);
                    }}
                >
                    Leave review
                </button>

                <div className="flex-col px-[30px]">
                    {reviews.map((review) => (
                        <div key={review.id}>
                            <div className="flex gap-[20px] container">
                                <p className="font-bold">{review.name}</p>
                                <p>{review.text}</p>
                            </div>

                            {/* Like & Dislike Buttons */}
                            <div className="flex justify-end gap-2">
                                <button
                                    onClick={() => handleReaction(review.id, "likes")}
                                    className={`flex p-2 justify-center items-center gap-1 rounded-lg ${
                                        review.liked ? "bg-red-500 hover:bg-red-600" : "bg-gray-200 hover:bg-red-500"
                                    } transition`}
                                >
                                    <AiOutlineLike />
                                    <span>{review.likes}</span>
                                </button>

                                <button
                                    onClick={() => handleReaction(review.id, "dislikes")}
                                    className={`flex items-center gap-1 p-2 rounded-lg ${
                                        review.disliked ? "bg-green-500" : "bg-gray-200 hover:bg-gray-300"
                                    } transition`}
                                >
                                    <AiOutlineDislike />
                                    <span>{review.dislikes}</span>
                                </button>
                            </div>

                            {/* Divider */}
                            <div className="py-[30px]">
                                <hr className="border-gray-300" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {open && <Report open={open} setOpen={setOpen} />}

            <div className="w-[40%] px-[30px]">
                <h2 className="text-3xl font-bold mt-[30px]">{product.title}</h2>
                <img src={product.image} className="w-[50%] h-[50%] mt-[50px]" />
                <div className="shadow w-[50%] px-[10px] h-[30%]">
                    <p className="text-xl font-semibold">Price: ${product.price}</p>
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
                                        className={`w-8 h-8 rounded-full inline-block border-2 border-gray-300 cursor-pointer ${selectedColor === color ? "ring-2 ring-green-900" : ""
                                            }`}
                                        style={{
                                            backgroundColor: color,
                                        }}
                                    ></span>
                                </label>
                            ))}
                        </div>
                    </div>
                    <div className="mt-4 mb-[5px]">
                        <label htmlFor="size" className="block mb-2 font-medium">
                            Size:
                        </label>

                        <div className="flex gap-4">
                            {product.sizes.map((size) => (
                                <label key={size} className="flex items-center justify-center text-[10px]">
                                    <input
                                        type="radio"
                                        name="size"
                                        value={size}
                                        checked={selectedSize === size}
                                        onChange={(e) => setSelectedSize(e.target.value)}
                                        className="hidden"
                                    />
                                    <span
                                        className={`w-5 h-5 rounded-sm inline-block border-2 border-gray-300 cursor-pointer ${selectedSize === size ? "ring-2 ring-green-900" : ""
                                            }`}
                                    >
                                        {size}
                                    </span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <button className="bg-[rgb(23,105,106)] text-[#fff] w-full" onClick={handleAddToCart}>
                        Add To Cart
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Review;
