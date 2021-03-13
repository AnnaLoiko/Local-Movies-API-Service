import React, { useEffect, useState } from "react";
import style from "./style.module";

import moviesList from "@/data/moviesList";
import data from "@/data/data";

import MovieCount from './MovieCount/MovieCount';
import MovieFilter from './MovieFilter/MovieFilter';
import MovieSort from './MovieSort/MovieSort';
import MovieList from './MovieList/MovieList';

const Main = () => {
  const [currentMovies, setCurrentMovies] = useState([...moviesList]);

  useEffect(() => {
    setCurrentMovies(currentMovies);
  }, [currentMovies])


  return (
    <>
      <div className={style.wrapNav}>
        <MovieFilter
          items={data.filterOptions}
          moviesList={moviesList}
          setCurrentMovies={setCurrentMovies}
        />
        <MovieSort
          items={data.sortOptions}
          moviesList={moviesList}
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
