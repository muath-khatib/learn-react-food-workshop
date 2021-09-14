import React from "react";
const categories = [
  "all",
  "burger",
  "hot dog",
  "sandwich",
  "fries",
  "topping",
  "drink",
  "extra",
];

const RadioInputs = ({selectedCategory,handleChange}) => {
  return (
    <fieldset>
      <legend>Category</legend>
      {categories.map(categoryName => (
          <label key = {categoryName}>
          <input 
          type="radio" 
          name={categoryName} 
          value={categoryName} 
          onChange = {(e)=> handleChange(e,'selectedCategory') }
          checked = {selectedCategory === categoryName}
           />
          {categoryName}
          </label>
      
    ))}
    </fieldset>
  );
};
export default RadioInputs;
