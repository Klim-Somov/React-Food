import React, { useState, useEffect } from "react";
import Categories from "./components/Categories";
import Header from "./components/Header";
import PizzaBlock from "./components/PizzaBlock";
import Sort from "./components/Sort";
import pizzas from "./assets/pizzas.json";

import "./scss/app.scss";

function App() {
  const [items, setitems] = useState([]);

  useEffect(() => {
    fetch("https://62d15c8ddccad0cf1765fbd3.mockapi.io/items")
      .then((response) => response.json())
      .then((arr) => {
        setitems(arr);
      });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {items.map((pizza) => (
              <PizzaBlock key={pizza.id} {...pizza} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
