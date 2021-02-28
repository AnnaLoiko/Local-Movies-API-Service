import React from "react";

import moviesList from "@/utils/moviesList";
import filterNav from "@/utils/filterNav";
import sortListOptions from "@/utils/sortListOptions";

import LayoutFlex from '@/Components/Layouts/LayoutFlex/LayoutFlex';
import ResultCount from './ResultCount';
import ResultFilterNav from './ResultFilterNav';
import SortListSelect from './SortListSelect';
import MovieList from './MovieList';
import ErrorBoundary from '@/Components/ErrorBoundary';

const Main = () => {
  return (
    <>
      <LayoutFlex flexOption="flexSpaceBetween" addClass="bordered">
        <ResultFilterNav filterNav={filterNav} />
        <SortListSelect sortListOptions={sortListOptions} />
      </LayoutFlex>

      <ResultCount count={moviesList.length} />
      
      <LayoutFlex flexOption="flexStart" addClass="threeItems">
        <ErrorBoundary>
          <MovieList moviesList={moviesList} />
        </ErrorBoundary>
      </LayoutFlex>
    </>
  )
}

export default Main;
