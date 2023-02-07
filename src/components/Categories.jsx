import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setActiveIndex } from "../redux/slices/categoriesSlice";

function Categories() {
  const activeIndex = useSelector((state) => state.categoriesSlice.activeIndex);
  const dispatch = useDispatch();

  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  const onClickCategorie = (i) => {
    dispatch(setActiveIndex(i));
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((value, index) => (
          <li
            key={index}
            onClick={() => onClickCategorie(index)}
            className={activeIndex === index ? "active" : ""}
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
