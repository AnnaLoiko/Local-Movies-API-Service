import React, { useState, useEffect } from "react";
import style from "./style.module";

import PropTypes from 'prop-types';

import MovieEdit from "@/main/MovieEdit/MovieEdit";
import MovieDelete from "@/main/MovieDelete/MovieDelete";
import DropDownList from "@/components/DropDownList/DropDownList";


const Movie = (props) => {
  const [isShow, setIsShow] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [isOpenDelete, setIsOpenDelete] = useState(false);

  function escCloseDropDown(event) {
    if (event.keyCode === 27) {
      setIsShow(false);
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", escCloseDropDown, false);
    return () => {
      document.removeEventListener("keydown", escCloseDropDown, true);
    };
  }, [])

  const actions = [
    {
      label: 'Edit',
      func: function () { setIsOpenEdit(true); setIsShow(false) },
    },
    {
      label: 'Delete',
      func: function () { setIsOpenDelete(true); setIsShow(false) },
    },
  ]

  return (
    <>
      <div className={style.itemWrap}>
        <span className={style.iconDropDown} onClick={() => { setIsShow(true) }}></span>

        <div className={style.itemImgWrap}>
          <img alt="" src={props.movie.src} />
        </div>

        <div className={style.itemInfo}>
          <h3>{props.movie.title}</h3>
          <p className={style.itemGenre}>{props.movie.genre}</p>
          <span className={style.itemData}>{props.movie.date}</span>
        </div>

        <DropDownList
          items={actions}
          isShow={isShow}
          clickClose={() => setIsShow(false)}
          escClose={() => escCloseDropDown()}
        />

      </div>

      <MovieEdit
        title="Edit movie"
        isOpen={isOpenEdit}
        clickCloseModal={() => { setIsOpenEdit(false) }}
        movie={props.movie}
      />

      <MovieDelete
        title="Delete movie"
        isOpen={isOpenDelete}
        clickCloseModal={() => { setIsOpenDelete(false) }}
        movieId={props.movie.id}
      />
    </>
  );
}

Movie.propTypes = {
  movie: PropTypes.object,
};

export default Movie;
