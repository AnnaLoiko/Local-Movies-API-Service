import React from "react";
import style from "./style.module";

import moviesList from "@/utils/moviesList";
import filterNav from "@/utils/filterNav";
import sortListOptions from "@/utils/sortListOptions";

import MoviesCount from './MoviesCount/MoviesCount';
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

        <MoviesCount count={moviesList.length} />
        
        <div className={style.movieListWrap}>
          <MovieList moviesList={moviesList} />
        </div>
      </>
    );
}

export default Main;
