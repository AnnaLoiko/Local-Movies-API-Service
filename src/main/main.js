import React, { useEffect, useState } from "react";
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
  const [currentMovies, setCurrentMovies] = useState([...moviesList]);
  
  if (sortField !== null) {
    currentMovies.sort((a, b) => {
      if (a[sortField] < b[sortField]) {
        return sortDirection ? -1 : 1;
      }
      if (a[sortField] > b[sortField]) {
        return sortDirection ? 1 : -1;
      }
      return 0;
    });
  }

  const [typeFilter, setTypeFilter] = useState("All");
  useEffect(() => {
    console.log('typeFilter', typeFilter);
    if (typeFilter === "All") return;
    const fileredMovies = [...moviesList].filter(item => item.genre.includes(typeFilter))
    console.log('currentMovies', fileredMovies);
    setCurrentMovies(fileredMovies);
  }, [typeFilter])

  return (
    <>
      <div className={style.wrapNav}>
        <MovieFilter
          items={data.filterOptions}
          typeFilter={typeFilter}
          handleFilter={setTypeFilter}
        />
        <MovieSort
          handleSort={() => { setSortField("date"); setSortDirection(!sortDirection); }}
          sortDirection={sortDirection}
        />
      </div>

      <MovieCount count={currentMovies.length} />

      <main className={style.movieListWrap}>
        <MovieList moviesList={currentMovies} />
      </main>
    </>
  );
}

export default Main;
