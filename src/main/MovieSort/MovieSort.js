import React, { useState, useEffect } from "react";
import style from "./style.module";

import PropTypes from 'prop-types';

import moviesList from "@/data/moviesList";

const MovieSort = (props) => {
  const { handleSort } = props;
  const [isSortUp, setIsSortUp] = useState(false);

  return (
    <div 
      className={`${style.selectWrap} ${isSortUp && style.up}`} 
      onClick={() => { 
        console.log('moviesList', moviesList);
        handleSort();
        setIsSortUp(!isSortUp)
      }}
    >
      <h4 className={style.label}>Sort by</h4>
      <div className={style.selected}>Relese date</div>
    </div>
  );
}


MovieSort.propTypes = {
  sortOptions: PropTypes.arrayOf(
    PropTypes.shape({
      lable: PropTypes.string.isRequired,
      isSelected: PropTypes.bool.isRequired,
    })
  )
};

export default MovieSort;

