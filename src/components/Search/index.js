import React from "react";
import style from "./style.module";

import ButtonPrimary from '@/Components/ButtonPrimary';
import Input from '@/Components/Input';


const Search = () => {
  return (
    <form>
      <div className={style.searchWrap}>
        <Input />
      </div>
      <ButtonPrimary text={"Search"} />
    </form>
  )
}

export default Search;
