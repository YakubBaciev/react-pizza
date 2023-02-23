import React from "react";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";
import { useSelector, useDispatch } from "react-redux";
import { fetchPizzas } from "../redux/slices/pizzaSlice";

const Home = () => {
  const dispatch = useDispatch();

  const activeSort = useSelector((state) => state.sortSlice.activeSort);
  const activeIndex = useSelector((state) => state.categoriesSlice.activeIndex);
  const searchValue = useSelector((state) => state.searchSlice.searchValue);
  const { items, status } = useSelector((state) => state.pizza);

  const getPizza = async () => {
    dispatch(fetchPizzas({ activeIndex, activeSort, searchValue }));
  };

  React.useEffect(() => {
    getPizza();
  }, [activeIndex, activeSort, searchValue]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {status === "error" ? (
          <div>
            <h2>ПРОИЗОШЛА ОШИБКА</h2>
            <h3>Повторите попытку позже</h3>
          </div>
        ) : status === "loading" ? (
          [...Array(8)].map((_, index) => <Skeleton key={index} />)
        ) : (
          items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)
        )}
      </div>
    </div>
  );
};

export default Home;
