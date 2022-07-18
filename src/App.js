import React, { useState, useEffect } from "react";
import Categories from "./components/Categories";
import Header from "./components/Header";
import Loader from "./components/Loader";
import PizzaBlock from "./components/PizzaBlock";
import Sort from "./components/Sort";

import "./scss/app.scss";

function App() {
  const [items, setitems] = useState([]);
  const [loading, setoading] = useState(false);

  useEffect(() => {
    fetch("https://62d15c8ddccad0cf1765fbd3.mockapi.io/items")
      .then((response) => response.json())
      .then((arr) => {
        setitems(arr);
        setoading(true);
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
            {loading
              ? items.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />)
              : [...new Array(6)].map((_, index) => <Loader key={index} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
