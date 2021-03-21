import React, { useState } from "react";
import style from "./style.module";

import PropTypes from 'prop-types';

import MovieEdit from "@/main/MovieEdit/MovieEdit";
import MovieDelete from "@/main/MovieDelete/MovieDelete";
import DropDownList from "@/components/DropDownList/DropDownList";


const Movie = (props) => {
  const { poster_path, title, genres, release_date, id } = props.movie;

  const [isShowDropDown, setIsShowDropDown] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [isOpenDelete, setIsOpenDelete] = useState(false);

  const actions = [
    {
      label: 'Edit',
      handleClick: () => { setIsOpenEdit(true); setIsShowDropDown(false) },
    },
    {
      label: 'Delete',
      handleClick: () => { setIsOpenDelete(true); setIsShowDropDown(false) },
    },
  ];

  return (
    <>
      <div className={style.itemWrap}>
        <span className={style.iconDropDown} onClick={() => setIsShowDropDown(true)}></span>

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
          isShow={isShowDropDown}
          clickClose={() => setIsShowDropDown(false)}
        />
      </div>

      <MovieEdit
        title="Edit movie"
        isOpen={isOpenEdit}
        clickCloseModal={() => setIsOpenEdit(false)}
        movie={props.movie}
      />

      <MovieDelete
        title="Delete movie"
        isOpen={isOpenDelete}
        clickCloseModal={() => setIsOpenDelete(false)}
        movieId={id}
      />
    </>
  );
};

Movie.propTypes = {
  movie: PropTypes.object,
};

export default Movie;
