import React, { useState } from "react";
import style from "./style.module";

import moviesList from "@/data/moviesList";
import data from "@/data/data";

import MovieCount from './MovieCount/MovieCount';
import MovieFilter from './MovieFilter/MovieFilter';
import MovieSort from './MovieSort/MovieSort';
import MovieList from './MovieList/MovieList';

const Main = () => {
  const [sortField, setSortField] = useState(null);
  const [sortDirection, setSortDirection] = useState(false);

  const sortedMoviesList = [...moviesList];
  if (sortField !== null) {
    sortedMoviesList.sort((a, b) => {
      if (a[sortField] < b[sortField]) {
        return sortDirection ? -1 : 1;
      }
      if (a[sortField] > b[sortField]) {
        return sortDirection ? 1 : -1;
      }
      return 0;
    });
  }

  return (
    <>
      <div className={style.wrapNav}>
        <MovieFilter
          handleFilter={() => { console.log(1); }}
          filterOptions={data.genreList} 
        />
        <MovieSort
          handleSort={() => { setSortField("date"); setSortDirection(!sortDirection); }}
          sortDirection={sortDirection}
        />
      </div>

      <MovieCount count={moviesList.length} />

      <main className={style.movieListWrap}>
        <MovieList moviesList={sortedMoviesList} />
      </main>
    </>
  );
}

export default Main;
