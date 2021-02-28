import React from "react";
import style from "./style.module";

const SearchInput = () => {
  return (
    <input
      type="text"
      placeholder="What do you want to watch?"
      className={style.searchInput}
    />
  )
}

export default SearchInput;
