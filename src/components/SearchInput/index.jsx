import React from "react";
import styles from "./SearchInput.module.scss";

const SearchInput = ({ searchValue, setSearchValue }) => {
  return (
    <div className={styles.root}>
      <img
        className={styles.searchImg}
        src="https://cdn-icons-png.flaticon.com/512/54/54481.png"
        alt="search"
      />
      <input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className={styles.searchInput}
        placeholder="Введите значение ..."
      />
      {searchValue && (
        <img
          onClick={() => setSearchValue("")}
          className={styles.clouseImg}
          src="https://cdn-icons-png.flaticon.com/512/1828/1828747.png"
          alt="clouse"
        />
      )}
    </div>
  );
};

export default SearchInput;
