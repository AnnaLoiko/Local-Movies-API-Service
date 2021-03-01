import React from "react";
import style from "./style.module";

import moviesList from "@/utils/moviesList";
import filterNav from "@/utils/filterNav";
import sortListOptions from "@/utils/sortListOptions";

import ResultCount from './ResultCount/ResultCount';
import FilterNav from './FilterNav/FilterNav';
import SortListSelect from './SortListSelect/SortListSelect';
import MovieList from './MovieList/MovieList';

const Main = () => {
  return (
    <>
      <div className={style.wrapNav}>
        <FilterNav filterNav={filterNav} />
        <SortListSelect sortListOptions={sortListOptions} />
      </div>

      <ResultCount count={moviesList.length} />
      
      <div className={style.movieListWrap}>
        <MovieList moviesList={moviesList} />
      </div>
    </>
  )
}

export default Main;
