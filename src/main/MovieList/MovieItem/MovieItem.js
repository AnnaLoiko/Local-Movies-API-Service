import React from "react";
import style from "./style.module";

import PropTypes from 'prop-types';

const MovieItem = ( props ) => {
  const { title, genre, src, date } = props.movie;

  return (
    <div className={style.item}>
      <div className={style.icon}></div>
      
      <div className={style.itemImgWrap}>
        <img alt="" src={src} />
      </div>

      <div className={style.itemInfo}>
        <h3>{title}</h3>
        <p className={style.itemGenre}>{genre}</p>
        <span className={style.itemData}>{date}</span>
      </div>  
    </div>
  )
}

MovieItem.propTypes = {
  movie: PropTypes.object,
};

export default MovieItem;
