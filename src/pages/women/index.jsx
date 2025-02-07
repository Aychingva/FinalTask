// src/pages/Women.jsx

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { getWomenProducts } from "../../services/women.jsx";
import { womenAction } from "../../store/actions/women.action.jsx";

import Productcards2 from "../../companents/productcards2.jsx/index.jsx";
import Filter from "../../companents/filter/index.jsx";

function Women() {
  const dispatch = useDispatch();
  const [filters, setFilters] = useState({
    size: [],
    clothes: [],
    color: [],
    price: { min: 0, max: 3000 },
  });
  const [filteredProducts, setFilteredProducts] = useState([]);
  const women = useSelector((state) => state.women);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const salesProducts = await getWomenProducts();
        dispatch(womenAction(salesProducts));
        setFilteredProducts(salesProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    fetchProducts();
  }, [dispatch]);

  const handleFilterChange = (type, value, checked) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [type]: checked
        ? [...prevFilters[type], value]
        : prevFilters[type].filter((item) => item !== value),
    }));
  };

  const handlePriceChange = (key, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      price: { ...prevFilters.price, [key]: value },
    }));
  };

  const filterProducts = (e) => {
    e.preventDefault();
    const { size, clothes, color, price } = filters;

    const filtered = women.filter((product) => {
      const matchesSize = size.length
        ? product.sizes.some((s) => size.includes(s))
        : true;
      const matchesClothes = clothes.length
        ? clothes.some((filterClothes) =>
            product.title.toLowerCase().includes(filterClothes.toLowerCase())
          )
        : true;
      const matchesColor = color.length
        ? product.colors.some((c) => color.includes(c))
        : true;
      const matchesPrice =
        product.price >= price.min && product.price <= price.max;

      return matchesSize && matchesClothes && matchesColor && matchesPrice;
    });

    setFilteredProducts(filtered);
  };

  const sortdata = (e) => {
    const sortedProducts = [...women];
    switch (e.target.value) {
      case "title":
        sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "data":
        sortedProducts.sort((a, b) => b.createdate - a.createdate);
        break;
      case "min":
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case "max":
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }
    setFilteredProducts(sortedProducts);
  };

  return (
    <div className="w-full max-w-[1140px] flex gap-[30px] mx-auto">
      {/* Filters Section */}
      <div className="w-[25%]">
        <Filter
          filters={filters}
          onFilterChange={handleFilterChange}
          onPriceChange={handlePriceChange}
          onFilterSubmit={filterProducts}
        />
      </div>

      {/* Products Section */}
      <div className="w-[75%] mb-[50px]">
        <div className="flex gap-[10px] mt-[30px]">
          <span className="font-semibold">Sort by</span>
          <select className="border" onChange={sortdata}>
            <option value="data">Newest First</option>
            <option value="min">Low to High</option>
            <option value="max">High to Low</option>
            <option value="title">For Title</option>
          </select>
        </div>

        <div className="grid grid-cols-3 gap-[10px] w-full mt-[30px]">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Link to={`/product/${product.id}`} key={product.id}>
                <Productcards2 product={product} />
              </Link>
            ))
          ) : (
            <p>No products available</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Women;
