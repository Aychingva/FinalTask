import { MdFavoriteBorder } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { addtofavaction, removetofavaction } from "../../store/actions/fav.action";
import { useNavigate } from "react-router-dom"; // For navigation
function Productcards2({ product }) {
  const dispatch = useDispatch();
  const { favlist } = useSelector((state) => state);

  

  return (
    <div className="mb-[50px] mt-[50px] "  >
      <div className="flex flex-col relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-[300px] object-cover"
        />
        <div className="absolute bottom-[50px] right-2 mb-[10px] w-[30px] h-[30px] rounded-full flex items-center justify-center bg-[#fff]">
          {favlist.find((item) => String(item.id) === String(product.id)) ? (
            
            <button
          
              onClick={() => {
                
                console.log("Removing from favorites:", product.id);
                dispatch(removetofavaction(product.id));
              }}
              className="text-[#b75050]"
            >
              <MdFavoriteBorder />
            </button>
          ) : (
            <button
              onClick={() => {
               
                console.log("Adding to favorites:", product);
                dispatch(addtofavaction(product));
              }}
            >
              <MdFavoriteBorder />
            </button>
          )}
        </div>
        <h2>{product.title}</h2>
        <p className="font-semibold"> ${product.price}</p>
      </div>
    </div>
  );
}

export default Productcards2;
