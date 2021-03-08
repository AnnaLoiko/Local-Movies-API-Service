import React from "react";
import style from "./style.module";

import moviesList from "@/data/moviesList";
import filterOptions from "@/data/filterOptions";
import sortOptions from "@/data/sortOptions";

import MovieCount from './MovieCount/MovieCount';
import MovieFilter from './MovieFilter/MovieFilter';
import Sort from './Sort/Sort';
import MovieList from './MovieList/MovieList';

const Main = () => {

    return (
      <>
        <div className={style.wrapNav}>
          <MovieFilter filterOptions={filterOptions} />
          <Sort sortOptions={sortOptions} />
        </div>

        <MovieCount count={moviesList.length} />
        
        <div className={style.movieListWrap}>
          <MovieList moviesList={moviesList} />
        </div>
      </>
    );
}

export default Main;
