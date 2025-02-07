

import React from "react";

function Filter({ filters, onFilterChange, onPriceChange, onFilterSubmit }) {
  
  const handleFilterChange = (type, value, checked) => {
    onFilterChange(type, value, checked);
  };

  const handlePriceChange = (key, value) => {
    onPriceChange(key, value);
  };

  return (
    <form onSubmit={onFilterSubmit}>
      {/* Price Filter */}
      <div className="pb-[20px]">
        <label>Price</label>
        <div className="flex gap-[10px]">
          <input
            type="text"
            value={filters.price.min}
            className="max-w-[80px] mb-[30px] border outline-none"
            placeholder="Min"
            onChange={(e) => handlePriceChange("min", e.target.value)}
          />
          <input
            type="text"
            value={filters.price.max}
            className="max-w-[80px] mb-[30px] outline-none"
            placeholder="Max"
            onChange={(e) => handlePriceChange("max", e.target.value)}
          />
        </div>
      </div>

      {/* Clothes Filter */}
      <div className="flex flex-col mb-[30px]">
        <label>Clothes</label>
        {["Winter Coat", "Jeans", "T-shirt", "Shoes"].map((item) => (
          <label key={item} className="mt-[5px]">
            <input
              type="checkbox"
              className="mr-[10px]"
              name={item}
              onChange={(e) =>
                handleFilterChange("clothes", item, e.target.checked)
              }
            />
            {item}
          </label>
        ))}
      </div>

      {/* Size Filter */}
      <div className="flex flex-col mb-[30px]">
        <label>Size</label>
        {["XS", "S", "M", "L", "XL"].map((size) => (
          <label key={size} className="mt-[5px]">
            <input
              type="checkbox"
              className="mr-[10px]"
              name={size}
              onChange={(e) =>
                handleFilterChange("size", size, e.target.checked)
              }
            />
            {size}
          </label>
        ))}
      </div>

      {/* Color Filter */}
      <div className="flex flex-col mb-[30px]">
        <label>Color</label>
        <div className="flex flex-wrap gap-[25px] mt-[5px]">
          {[
            { name: "Black", color: "black" },
            { name: "Green", color: "green" },
            { name: "Red", color: "red" },
            { name: "Brown", color: "brown" },
            { name: "Dark blue", color: "darkblue" },
            { name: "Gray", color: "gray" },
            { name: "Yellow", color: "yellow" },
            { name: "Beige", color: "beige" },
            { name: "White", color: "white" },
            { name: "Purple", color: "purple" },
            { name: "Pink", color: "pink" },
            { name: "Orange", color: "orange" },
          ].map(({ name, color }) => (
            <label key={name} className="flex flex-col items-center cursor-pointer">
              <input
                type="radio"
                name="color"
                value={name}
                className="hidden"
                onChange={(e) =>
                  handleFilterChange("color", name, e.target.checked)
                }
              />
              <div
                className="w-[30px] h-[30px] rounded-full border-2"
                style={{ backgroundColor: color }}
              ></div>
              <span className="text-sm mt-[5px] text-center w-[40px] truncate">
                {name}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-center mt-[20px]">
        <button
          type="submit"
          className="bg-[rgb(23,105,106)] py-[10px] px-[20px] mx-auto"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default Filter;
