import React, { useState } from "react";
import style from "./style.module";
import PropTypes from 'prop-types';

import MovieSortItem from './MovieSortItem/MovieSortItem';

import useToggle from '@/hooks/useToggle';

const MovieSort = (props) => {
  const { sortByKeys, params, getSortMovies } = props;

  const [isChecked, toggleCheck] = useToggle(false);
  const [currentTitle, setCurrentTitle] = useState('Relese date');

  return (
    <div
      className={`${style.selectWrap} ${params.sortOrder && style.up}`}
      onClick={toggleCheck}
    >
      <h4 className={style.label}>Sort by</h4>
      <div className={style.selected}>{currentTitle}</div>

      <div className={`${!isChecked && style.hide} ${style.dropDownListWrap}`}>
        <ul className={style.dropDownList}>
          {sortByKeys.map((item, index) => (
            <MovieSortItem
              key={index}
              title={item.title}
              isSelected={item.key === params.sortActiveKey}
              sortOrder={params.sortOrder}
              handleClick={() => { 
                setCurrentTitle(item.title)
                getSortMovies({ 
                  ...params, 
                  sortActiveKey: item.key, 
                  sortOrder: !params.sortOrder 
                });
              }}
            />
          ))}
        </ul>
      </div>
    </div>
  )
};


MovieSort.propTypes = {
  sortOptions: PropTypes.arrayOf(
    PropTypes.shape({
      sortByKeys: PropTypes.string,
      params: PropTypes.object,
      getSortMovies: PropTypes.func,
    }),
  )
};

export default MovieSort;
