import React from "react";
import debounce from "lodash.debounce";
import styles from "./SearchInput.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { setSearchValue } from "../../redux/slices/searchSlice";

const SearchInput = () => {
  const updateSearchValue = React.useCallback(
    debounce((srt) => {
      dispatch(setSearchValue(srt));
    }, 500),
    []
  );
  const [value, setValue] = React.useState("");

  const onChangeInput = (e) => {
    setValue(e.target.value);
    updateSearchValue(e.target.value);
  };

  const searchValue = useSelector((state) => state.searchSlice.searchValue);
  const dispatch = useDispatch();

  const inputRef = React.useRef();

  const onClickClouse = () => {
    dispatch(setSearchValue(""));
    setValue("");
    inputRef.current.focus();
  };

  return (
    <div className={styles.root}>
      <img
        className={styles.searchImg}
        src="https://cdn-icons-png.flaticon.com/512/54/54481.png"
        alt="search"
      />
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        className={styles.searchInput}
        placeholder="Введите значение ..."
      />
      {value && (
        <img
          onClick={() => onClickClouse()}
          className={styles.clouseImg}
          src="https://cdn-icons-png.flaticon.com/512/1828/1828747.png"
          alt="clouse"
        />
      )}
    </div>
  );
};

export default SearchInput;
