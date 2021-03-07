import React from "react";
import style from "./style.module";

import moviesList from "@/data/moviesList";
import filterNav from "@/data/filterNav";
import sortListOptions from "@/data/sortListOptions";

import MovieCount from './MovieCount/MovieCount';
import FilterNav from './FilterNav/FilterNav';
import Sort from './Sort/Sort';
import MovieList from './MovieList/MovieList';

const Main = () => {

    return (
      <>
        <div className={style.wrapNav}>
          <FilterNav filterNav={filterNav} />
          <Sort sortListOptions={sortListOptions} />
        </div>

        <MovieCount count={moviesList.length} />
        
        <div className={style.movieListWrap}>
          <MovieList moviesList={moviesList} />
        </div>
      </>
    );
}

export default Main;
