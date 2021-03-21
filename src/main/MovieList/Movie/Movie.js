import React, { useState, useEffect, useCallback } from "react";
import style from "./style.module";

import PropTypes from 'prop-types';

import MovieEdit from "@/main/MovieEdit/MovieEdit";
import MovieDelete from "@/main/MovieDelete/MovieDelete";
import DropDownList from "@/components/DropDownList/DropDownList";


const Movie = (props) => {
  // console.log('props', props);
  const { poster_path, title, genres, release_date, id } = props.movie;

  const [isShow, setIsShow] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [isOpenDelete, setIsOpenDelete] = useState(false);

  const escCloseDropDown = useCallback((event) =>{
    if (event.keyCode === 27) {
      setIsShow(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", escCloseDropDown, false);
    return () => {
      document.removeEventListener("keydown", escCloseDropDown, true);
    };
  }, [])

  const actions = [
    {
      label: 'Edit',
      handleClick: function () { setIsOpenEdit(true); setIsShow(false) },
    },
    {
      label: 'Delete',
      handleClick: function () { setIsOpenDelete(true); setIsShow(false) },
    },
  ];

  return (
    <>
      <div className={style.itemWrap}>
        <span className={style.iconDropDown} onClick={() => setIsShow(true)}></span>

        <div className={style.itemImgWrap}>
          <img alt="" src={poster_path} />
        </div>

        <div className={style.itemInfo}>
          <h3>{title}</h3>
          <p className={style.itemGenre}>{[...genres].join(", ")}</p>
          <span className={style.itemData}>{new Date(release_date).getFullYear() || "Year"}</span>
        </div>
        
        <DropDownList
          items={actions}
          isShow={isShow}
          clickClose={() => setIsShow(false)}
          escClose={escCloseDropDown}
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
        movieId={id}
      />
    </>
  );
};

Movie.propTypes = {
  movie: PropTypes.object,
};

export default Movie;
