import React, { Component } from "react";
import dishes from "./data";
import RangeInputs from "./Components/RangeInputs";
import RadioInputs from "./Components/RadioInputs";
import Card from "./Components/Card";

class App extends Component {
  state = {
    minPrice: 0,
    maxPrice: 10,
    selectedCategory: "all",
  };
  handleChange = (e, key) => {
    this.setState({ [key]: e.target.value });
  };
  filterDishes = () =>{
    const {maxPrice, minPrice,selectedCategory} = this.state;
    return dishes.filter(({price,category}) => 
    price >= minPrice && 
    price <= maxPrice && 
    (category === selectedCategory || selectedCategory === 'all'));
  }
  render() {
    console.log(this.filterDishes());
    const {maxPrice, minPrice, selectedCategory} = this.state;
    return (
      <main>
        <section className="filters">
          <h1>Burger Place</h1>
          <h2>Filters</h2>
          <form>
            <RangeInputs 
            minPrice = {minPrice}
            maxPrice = {maxPrice}
            handleChange = {this.handleChange}
            />
            <RadioInputs selectedCategory = {selectedCategory} handleChange = {this.handleChange}/>
          </form>
        </section>
        <section className="dishes">
          <h2>Dishes</h2>
          <ul className="grid">
            {this.filterDishes().map(({ id, name, price, category, description }) => (
              <Card
                key={id}
                name={name}
                price={price}
                category={category}
                description={description}
              />
            ))}
          </ul>
        </section>
      </main>
    );
  }
}

export default App;
