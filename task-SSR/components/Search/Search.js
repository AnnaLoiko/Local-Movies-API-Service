import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from "next/router";

import * as actions from "@/redux/actions";

import Input from '@/Components/Input/Input';
import Button from '@/Components/Button/Button';

import style from "./style.module";

const Search = () =>  {
  const router = useRouter();
  const dispatch = useDispatch();

  const params = useSelector((state) => state.movies.params);

  const [value, setValue] = useState();

  useEffect(() => {
    setValue(params.search);
  }, [params.search]);

  const searchChange = (e) => {
    e.preventDefault();

    dispatch(actions.updateParams({ search: value }));

    router.replace(`/?search=${value}`);
  };

  return (
    <form>
      <div className={style.searchWrap}>
        <Input
          type="search"
          placeholder="What do you want to watch?"
          value={value}
          onChange={e => {setValue(e.target.value)}}
          role='textbox'
        />
      </div>

      <Button
        text="Search"
        type="text"
        className="btnPrimary"
        addClassName="btnLarge"
        handleClick={(e) => searchChange(e)}
        role="searchButton"
      />
    </form>
  )
}

export default Search;
