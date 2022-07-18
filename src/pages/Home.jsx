import React, { useEffect, useState } from "react";
import Categories from "../components/Categories";
import Loader from "../components/Loader";
import PizzaBlock from "../components/PizzaBlock";
import Sort from "../components/Sort";

function Home({ searchValue }) {

  const [items, setitems] = useState([]);
  const [loading, setoading] = useState(false);
  const pizzas = items.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />);
  const search = searchValue ? `search=${searchValue}` : "";

  useEffect(() => {
    fetch(`https://62d15c8ddccad0cf1765fbd3.mockapi.io/items?${search}`)
      .then((response) => response.json())
      .then((arr) => {
        setitems(arr);
        setoading(true);
      });
    window.scrollTo(0, 0);
  }, [searchValue]);
  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {loading
          ? pizzas
          : [...new Array(6)].map((_, index) => <Loader key={index} />)}
      </div>
    </>
  );
}

export default Home;
