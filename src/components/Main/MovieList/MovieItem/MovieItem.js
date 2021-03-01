import React from "react";
import style from "./style.module";

const MovieItem = (props) => {
  console.log(111, props.img);

  return (
    <div className={style.item}>
      <div className={style.icon}></div>
      
      <div className={style.itemImgWrap}>
        <img alt="" src={props.src} />
      </div>

      <div className={style.itemInfo}>
        <h3>{props.title}</h3>
        <p className={style.itemGenre}>{props.genre}</p>
        <span className={style.itemData}>{props.date}</span>
      </div>  
    </div>
  )
}

MovieItem.defaultProps = {
  date: 'Year',
};

export default MovieItem;
