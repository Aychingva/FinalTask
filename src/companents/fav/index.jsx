import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removetofavaction } from '../../store/actions/fav.action'; // Make sure to import your removal action

function Favorite({ openRight, setOpenRight }) {
  const dispatch = useDispatch(); // Initialize dispatch to trigger Redux actions
  const { favlist } = useSelector((state) => state);

  const handleCloseSidebar = () => {
    setOpenRight(false);
  };

  const handleRemoveFavorite = (productId) => {
    dispatch(removetofavaction(productId)); // Dispatch the action to remove the product
  };

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
          
        </button>

        <div className="p-4 h-full flex flex-col">
          <h2 className="text-lg font-semibold mb-4">Favorites</h2>

          {/* Make the list scrollable */}
          <div className="flex-grow overflow-y-auto">
            {favlist.length ? (
              favlist.map((product) => (
                <div key={product.id} className="flex items-center mb-4">
                  {/* Small Image for Favorite Item */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-[25%] h-[25%] object-cover mr-4"
                  />

                  {/* Product Title, Price, and Delete Button */}
                  <div className="flex-grow">
                    <h3 className="text-sm font-medium">{product.title}</h3>
                    <p className="text-sm text-gray-600">${product.price}</p>
                  </div>

                  {/* Delete Button */}
                  <button
                    onClick={() => handleRemoveFavorite(product.id)}
                    className="text-red-500 ml-2"
                  >
                    Delete
                  </button>
                </div>
              ))
            ) : (
              <p className="text-gray-600">No favorite items yet.</p>
            )}
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

export default Favorite;
