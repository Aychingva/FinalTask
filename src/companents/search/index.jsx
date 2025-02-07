import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"; 

function ProductSearch() {
  const navigate = useNavigate();
  const womenProducts = useSelector((state) => state.women || []);
  const menProducts = useSelector((state) => state.men || []);
  const salesProducts = useSelector((state) => state.products || []);

  const allProducts = [...womenProducts, ...menProducts, ...salesProducts];

  const [query, setQuery] = useState("");

  const filteredProducts = allProducts.filter(
    (product) =>
      product.title && product.title.toLowerCase().includes(query.toLowerCase())
  );

  const goToProductDetail = (productId) => {
    navigate(`/product/${productId}`); 
  };

  return (
    <div className="relative">
    
      <input
        type="text"
        placeholder="Search for product"
        className="border w-[280px] h-[38px] mr-[40px] outline-none px-[10px]"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

     
      {query && (
        <ul className="absolute mt-1 w-[280px] bg-white border rounded shadow">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <li key={product.id || product.title} className="p-2 hover:bg-gray-200 cursor-pointer flex items-center gap-2">
           
                {product.image && (
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-10 h-10 object-cover rounded cursor-pointer"
                    onClick={() => goToProductDetail(product.id)} 
                  />
                )}
                
                {product.title}
              </li>
            ))
          ) : (
            <li className="p-2 text-gray-500">No results found</li>
          )}
        </ul>
      )}
    </div>
  );
}

export default ProductSearch;
