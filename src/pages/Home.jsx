import React from "react";
import axios from "axios";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";
import { useSelector } from "react-redux";

const Home = () => {
  const activeSort = useSelector((state) => state.sortSlice.activeSort);
  const activeIndex = useSelector((state) => state.categoriesSlice.activeIndex);
  const searchValue = useSelector((state) => state.searchSlice.searchValue);

  const [items, setAtems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const getPizza = () => {
    axios
      .get(
        `https://639c95a242e3ad6927364e55.mockapi.io/items?${
          activeIndex > 0 ? `category=${activeIndex}` : ""
        }&sortBy=${activeSort.sortProperty}&order=desc${
          searchValue ? `&search=${searchValue}` : ""
        }`
      )
      .then((res) => {
        setAtems(res.data);
        setIsLoading(false);
        console.log(111);
      });
  };

  React.useEffect(() => {
    setIsLoading(true);
    getPizza();
    console.log(222);
    window.scrollTo(0, 0);
  }, [activeIndex, activeSort, searchValue]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...Array(8)].map((_, index) => <Skeleton key={index} />)
          : items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
    </div>
  );
};

export default Home;
