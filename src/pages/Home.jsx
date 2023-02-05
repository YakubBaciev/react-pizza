import React from "react";
import { SearchContext } from "../App";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";

const Home = () => {
  const { searchValue } = React.useContext(SearchContext);
  const [items, setAtems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [activeSort, setActiveSort] = React.useState({
    name: "популярности",
    sortProperty: "rating",
  });

  React.useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://639c95a242e3ad6927364e55.mockapi.io/items?${
        activeIndex > 0 ? `category=${activeIndex}` : ""
      }&sortBy=${activeSort.sortProperty}&order=desc${
        searchValue ? `&search=${searchValue}` : ""
      }`
    )
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setAtems(json);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [activeIndex, activeSort, searchValue]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeIndex={activeIndex}
          onClickCategorie={(i) => setActiveIndex(i)}
        />
        <Sort activeSort={activeSort} onClickSort={(i) => setActiveSort(i)} />
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
