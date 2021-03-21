import React, { useEffect } from "react";
import { connect } from 'react-redux';

import style from "./style.module";

import MovieCount from './MovieCount/MovieCount';
import MovieFilter from './MovieFilter/MovieFilter';
import MovieSort from './MovieSort/MovieSort';
import MovieList from './MovieList/MovieList';

import { getMovies } from "@/redux/actions";


const Main = (props) => {
  const { moviesList, getMovies, filterKeys, sortByKeys, params, hasError, loader } = props;

  useEffect(() => { getMovies() }, []);

  return (
    <>
      <div className={style.wrapNav}>
        <MovieFilter getFilterMovies={getMovies} filterKeys={filterKeys} params={params} />
        <MovieSort getSortMovies={getMovies} sortByKeys={sortByKeys} params={params} />
      </div>

      <MovieCount count={moviesList.length} />

      <main className={style.movieListWrap}>
        {hasError && <p className={style.warningText}>Currently the server is unavailable. Please try later.</p>}
        {loader && <p className={style.warningText}>Loading...</p>}
        <MovieList moviesList={moviesList} />
      </main>
    </>
  );
}

const mapStateToProps = state => {
  return {
    moviesList: state.movies.movies,
    hasError: state.movies.hasError,
    loader: state.movies.loader,
    filterKeys: state.movies.filterKeys,
    sortByKeys: state.movies.sortByKeys,
    params: state.movies.params,
  }
}

const mapDispatchToProps = {
  getMovies
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
