import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Categories from "../components/Categories";
import Loader from "../components/Loader";
import PizzaBlock from "../components/PizzaBlock";
import Sort from "../components/Sort";
import { filterSelector } from "../features/filterSlice";
import { fetchPizzas, pizzasSelector } from "../features/pizzaSlice";
import Pagination from "../components/pagination/Pagination";
import { useAppDispatch } from "../app/store";

type HomeProps = {
  searchValue: string | number;
};
const Home: React.FC<HomeProps> = ({ searchValue }) => {
  const dispatch = useAppDispatch();

  const { items, status } = useSelector(pizzasSelector);
  const { sort, categoryId } = useSelector(filterSelector);
  const [currentPage, setCurrentPage] = useState(1);
  const search = searchValue ? `search=${searchValue}` : "";

  const pizzas = items.map((pizza: any) => (
    <PizzaBlock key={pizza.id} {...pizza} />
  ));
  const serarchBycategory = categoryId > 0 ? `category=${categoryId}` : "";

  const getPizzas = async () => {
    dispatch(fetchPizzas({ serarchBycategory, search, sort, currentPage }));
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    getPizzas();
  }, [searchValue, categoryId, sort, currentPage]);

  return (
    <>
      <div className="content__top">
        <Categories />
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

      <Pagination onChangePage={setCurrentPage} />
    </>
  );
};

export default Home;
