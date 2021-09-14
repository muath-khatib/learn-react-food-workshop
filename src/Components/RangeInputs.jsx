import React from "react";
const RangeInputs = ({ maxPrice, minPrice, handleChange }) => {
  return (
    <fieldset>
      <legend>Price</legend>
      <label>
        Max Price
        <input 
        type="range" 
        min="0" max="10" 
        step="0.25" 
        value={maxPrice}
        onChange= {((e) => handleChange(e,'maxPrice') )}
        /> 
        {maxPrice}
      </label>
      <label>
        Min Price
        <input 
        type="range" 
        min="0" max="10" 
        step="0.25" 
        value={minPrice}
        onChange={(e) => handleChange(e,'minPrice')} 
        />
        {minPrice}
      </label>
      
    </fieldset>
  );
};
export default RangeInputs;
