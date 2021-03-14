import React, { useState } from "react";
import style from "./style.module";

import MovieCount from './MovieCount/MovieCount';
import MovieFilter from './MovieFilter/MovieFilter';
import MovieSort from './MovieSort/MovieSort';
import MovieList from './MovieList/MovieList';

import moviesList from "@/data/moviesList";

const Main = () => {
  const [currentMovies, setCurrentMovies] = useState(moviesList);

  return (
    <>
      <div className={style.wrapNav}>
        <MovieFilter
          moviesList={moviesList}
          setCurrentMovies={setCurrentMovies}
        />
        <MovieSort
          moviesList={currentMovies}
          setCurrentMovies={setCurrentMovies}
        />
      </div>

      <MovieCount
        count={currentMovies.length}
      />

      <main className={style.movieListWrap}>
        <MovieList
          moviesList={currentMovies}
        />
      </main>
    </>
  );
}

export default Main;
