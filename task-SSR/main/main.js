import React from "react";
import { connect } from 'react-redux';
import style from "./style.module";

import MovieCount from './MovieCount/MovieCount';
import MovieFilter from './MovieFilter/MovieFilter';
import MovieSort from './MovieSort/MovieSort';
import MovieList from './MovieList/MovieList';

import { getMovies } from "@/redux/actions";


const Main = (props) => {
  const { moviesList, filterKeys, sortByKeys, params, errorGetMovie, loader } = props;
  const moviesListLength = moviesList.length > 0 ? moviesList.length : false;

  return (
    <>
      <div className={style.wrapNav}>
        <MovieFilter filterKeys={filterKeys} params={params} />
        <MovieSort sortByKeys={sortByKeys} params={params} />
      </div>

      {(moviesListLength > 0) && <MovieCount count={moviesList.length} /> }

      <main className={style.movieListWrap}>
        {loader && <p className={style.warningText}>Loading...</p>}

        {errorGetMovie && !loader && <p className={style.warningText}>Currently the server is unavailable. Please try later.</p>}

        { moviesListLength
          ? <MovieList moviesList={moviesList} />
          : <p className={style.notMovieFound}>No movie found</p>
        }
      </main>
    </>
  );
}

export async function getStaticProps(context) {
  console.log(context);

  return {
    props: {},
  }
}

const mapStateToProps = state => {
  return {
    moviesList: state.movies.movies,
    errorGetMovie: state.movies.errorGetMovie,
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
