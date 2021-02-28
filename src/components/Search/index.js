import React from "react";

import ButtonPrimary from '@/Components/ButtonPrimary';
import SearchInput from './SearchInput/SearchInput';

const Search = () => {
  return (
    <form>
      <SearchInput />
      <ButtonPrimary text={"Search"} />
    </form>
  )
}

export default Search;
