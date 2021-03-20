import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';

import style from "./style.module";

import MovieCount from './MovieCount/MovieCount';
import MovieFilter from './MovieFilter/MovieFilter';
import MovieSort from './MovieSort/MovieSort';
import MovieList from './MovieList/MovieList';

import { getMovies } from "@/redux/actions";


const Main = ({moviesList, getMovies}) => {
  console.log('Main - moviesList', moviesList);
  const [currentMovies, setCurrentMovies] = useState(moviesList);

  useEffect(() => {
    getMovies();
  }, []);

  useEffect(() => {
    setCurrentMovies(moviesList);
  }, [moviesList]);
  
  return (
    <>
      <div className={style.wrapNav}>
        <MovieFilter moviesList={moviesList} setCurrentMovies={setCurrentMovies} />
        <MovieSort moviesList={currentMovies} setCurrentMovies={setCurrentMovies} />
      </div>

      <MovieCount count={currentMovies.length} />

      <main className={style.movieListWrap}>
        <MovieList moviesList={currentMovies} />
      </main>
    </>
  );
}

const mapStateToProps = state => {
  console.log('state', state);
  return {
    moviesList: state.movies.movies,
  }
}

const mapDispatchToProps = {
  getMovies
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
