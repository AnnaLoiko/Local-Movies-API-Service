import React, { useState, useCallback } from "react";
import style from "./style.module";
import PropTypes from 'prop-types';

import MovieSortItem from './MovieSortItem/MovieSortItem';

import useUpdateEffect from '@/hooks/useUpdateEffect';
import useToggle from '@/hooks/useToggle';
import data from "@/data/data";               

const MovieSort = (props) => {
  const [isChecked, toggleCheck] = useToggle(false);
  const [key, setkey] = useState(null);
  const [title, setTitle] = useState("Relese date");
  const [direction, setDirection] = useState(true);

  useUpdateEffect(() => {
    if (key == null) return;
    props.setCurrentMovies([...props.moviesList.sort((a, b) => {
      if (a[key] < b[key]) {
        return direction ? -1 : 1;
      }
      if (a[key] > b[key]) {
        return direction ? 1 : -1;
      }
      return 0;
    })]);   
  }, [key, direction])

  const handleMovieSort = useCallback((key, title) => {
    setkey(key);
    setTitle(title)
    setDirection(!direction);
  }, [key, title, direction]);


  return (
    <div
      className={`${style.selectWrap} ${!direction && style.up}`}
      onClick={toggleCheck}
    >
      <h4 className={style.label}>Sort by</h4>
      <div className={style.selected}>{title || "Relese date"}</div>

      <div className={`${!isChecked && style.hide} ${style.dropDownListWrap}`}>
        <ul className={style.dropDownList}>
          {data.sortOptions.map((item, index) => (
            <MovieSortItem
              key={index}
              title={item.title}
              handleClick={() => handleMovieSort(item.key, item.title)}
              direction={direction}
              className={`${item.key === key && style.active} ${style.itemDrop}`}
              isSelected={item.key === key}
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
      title: PropTypes.string,
      key: PropTypes.string,
    }),
  )
};

export default MovieSort;
