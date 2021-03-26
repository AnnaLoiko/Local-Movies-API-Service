import React from "react";
import style from "./style.module";

import Button from '@/Components/Button/Button';
import Input from '@/Components/Input/Input';


const Search = () => <>
  <div className={style.searchWrap}>
    <Input
      type="text"
      placeholder="What do you want to watch?"
    />
  </div>
  <Button className="btnPrimary" addClassName="btnLarge" text="Search" onClick={e => e.preventDefault()} />
</>


export default Search;
