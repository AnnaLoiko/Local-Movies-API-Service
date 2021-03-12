import React from "react";
import style from "./style.module";

import moviesList from "@/data/moviesList";
import data from "@/data/data";

import MovieCount from './MovieCount/MovieCount';
import MovieFilter from './MovieFilter/MovieFilter';
import MovieSort from './MovieSort/MovieSort';
import MovieList from './MovieList/MovieList';

const Main = () => {

  return (
    <>
      <div className={style.wrapNav}>
        <MovieFilter filterOptions={data.filterOptions} />
        <MovieSort />
      </div>

      <MovieCount count={moviesList.length} />

      <main className={style.movieListWrap}>
        <MovieList moviesList={moviesList} />
      </main>
    </>
  );
}

export default Main;
