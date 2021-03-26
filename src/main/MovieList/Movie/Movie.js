import React, { useState } from "react";
import { connect } from 'react-redux';
import style from "./style.module";

import PropTypes from 'prop-types';

import MovieEdit from "@/main/MovieEdit/MovieEdit";
import MovieDelete from "@/main/MovieDelete/MovieDelete";
import DropDownList from "@/components/DropDownList/DropDownList";

import { getMovieById, deleteMovie } from '@/redux/actions';


const Movie = (props) => {
  const { getMovieById} = props;
  const { id, title = "Movie title", release_date, poster_path, genres = [] } = props.movie;

  const [isShowDropDown, setIsShowDropDown] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [isOpenDelete, setIsOpenDelete] = useState(false);

  const gernesStr = genres.length > 1 ? genres.join(", ") : genres;
  const releaseDate = release_date ? new Date(release_date).getFullYear() : 'Year';

  const listDropDown = [
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
            <img
              alt=""
              src={poster_path}
              title="Get movie details"
              onClick={() => getMovieById(id)}
            />
        </div>

        <div className={style.itemInfo}>
          <h3>{title}</h3>
          <p className={style.itemGenre}>{gernesStr}</p>
          <span className={style.itemData}>{releaseDate}</span>
        </div>

        <DropDownList
          items={listDropDown}
          isShow={isShowDropDown}
          clickClose={() => setIsShowDropDown(false)}
        />
      </div>

      <MovieEdit
        isOpen={isOpenEdit}
        clickCloseModal={() => setIsOpenEdit(false)}
        movie={props.movie}
      />

      <MovieDelete
        isOpen={isOpenDelete}
        clickCloseModal={() => setIsOpenDelete(false)}
        movieId={id}
      />
    </>
  );
};

Movie.propTypes = {
  title: PropTypes.string,
  genres: PropTypes.array,
  release_date: PropTypes.string,
  poster_path: PropTypes.string,
  overview: PropTypes.string,
  runtime: PropTypes.number,
  id: PropTypes.number,
}


const mapDispatchToProps = {
  getMovieById,
  deleteMovie
}

export default connect(null, mapDispatchToProps)(Movie);
