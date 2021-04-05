import React, { useState } from "react";
import style from "./style.module";
import PropTypes from 'prop-types';

import MovieSortItem from './MovieSortItem/MovieSortItem';

import useToggle from '@/hooks/useToggle';

const MovieSort = (props) => {
  const { sortByKeys, params, getSortMovies } = props;
  
  const [isChecked, toggleCheck] = useToggle(false);
  const [currentTitle, setCurrentTitle] = useState('Relese date');
  const [currentSortOrder, setCurrentSortOrder] = useState(params.sortOrder || '');


  return (
    <div
      className={`${style.selectWrap} ${currentSortOrder === "asc" && style.up}`}
      onClick={toggleCheck}
    >
      <h4 className={style.label}>Sort by</h4>
      <div className={style.selected}>{currentTitle || "Release date"}</div>

      <div className={`${!isChecked && style.hide} ${style.dropDownListWrap}`}>
        <ul className={style.dropDownList}>
          {sortByKeys.map((item, index) => (
            <MovieSortItem
              key={index}
              title={item.title}
              isSelected={item.isSelected}
              sortOrder={item.sortOrder}
              handleClick={() => { 
                setCurrentTitle(item.title)
                setCurrentSortOrder(item.sortOrder)
                getSortMovies({ 
                  ...params, 
                  sortActiveKey: item.key, 
                  sortOrder: item.sortOrder
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
