import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Categories from "../components/Categories";
import Loader from "../components/Loader";
import PizzaBlock from "../components/PizzaBlock";
import Sort from "../components/Sort";
import { fetchPizzas } from "../features/pizzaSlice";
import Pagination from "../pagination/Pagination";

function Home({ searchValue }) {
  const dispatch = useDispatch();
  
  const { items, status } = useSelector((store) => store.pizzas);
  const {sort, categoryId} = useSelector((store) => store.filter);

  const search = searchValue ? `search=${searchValue}` : "";
  
  const pizzas = items.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />);
  const serarchBycategory = categoryId > 0 ? `category=${categoryId}` : "";

  const getPizzas = async () => {
    dispatch(fetchPizzas({ serarchBycategory, search, sort }));
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    getPizzas();
  }, [searchValue, categoryId, sort]);

  return (
    <>
      <div className="content__top">
        <Categories categoryId={categoryId} />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      {status === "error" ? (
        <h2>😕Произошла ошибка при загрузке пицц 😕</h2>
      ) : (
        <div className="content__items">
          {status === "success"
            ? pizzas
            : [...new Array(9)].map((_, index) => <Loader key={index} />)}
        </div>
      )}

      <Pagination />
    </>
  );
}

export default Home;
