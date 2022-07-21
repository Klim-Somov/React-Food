import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Categories from "../components/Categories";
import Loader from "../components/Loader";
import PizzaBlock from "../components/PizzaBlock";
import Sort from "../components/Sort";
import Pagination from "../pagination/Pagination";
function Home({ searchValue }) {
  
  const [items, setitems] = useState([]);
  const [loading, setLoading] = useState(false);
  const sortObject = useSelector((store) => store.filter.sort);
  const categoryId = useSelector((store) => store.filter.categoryId);

  const serarchBycategory = categoryId > 0 ? `category=${categoryId}` : "";
  const pizzas = items.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />);
  const search = searchValue ? `search=${searchValue}` : "";
  useEffect(() => {
    setLoading(false);
    fetch(
      `https://62d15c8ddccad0cf1765fbd3.mockapi.io/items?${serarchBycategory}&sortBy=${sortObject.sortProperty}&order=desc${search}`
    )
      .then((response) => response.json())
      .then((arr) => {
        setitems(arr);
        setLoading(true);
      });
    window.scrollTo(0, 0);
  }, [searchValue, categoryId, sortObject]);

  return (
    <>
      <div className="content__top">
        <Categories categoryId={categoryId} />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {loading
          ? pizzas
          : [...new Array(6)].map((_, index) => <Loader key={index} />)}
      </div>
      <Pagination />
    </>
  );
}

export default Home;
