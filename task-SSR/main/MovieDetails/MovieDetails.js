import React from "react";

import style from "./style.module";


const MovieDetails = ({ movie }) => {
  const {
    id,
    overview = 'Overview will be here',
    genres = [],
    poster_path,
    release_date,
    runtime = '',
    title = 'Movie title',
    vote_average
  } = movie;

  const releaseDate = release_date ? new Date(release_date).getFullYear() : '';

  return (
    <>
    <div className={style.wrap}>
      { id && <>
        <div className={style.imgWrap}>
          <img alt="" src={poster_path} />
        </div>

        <div className={style.infoWrap}>
          <div className={style.flex}>
            <h1>{title}</h1>
            {vote_average > 0 && <div className={style.rating} title="Movie rating">{vote_average}</div>}
          </div>

          <p className={style.addInfo} title="Relese genre">{[...genres].join(", ")}</p>

          <div className={style.flex}>
            {releaseDate && <span className={style.itemData} title="Relese date">{releaseDate}</span>}
            {runtime && <span className={style.itemData} title="Movie duration">{`${runtime} min`}</span>}
          </div>

          <p className={style.text}>
            {overview}
          </p>
        </div>
      </>}
    </div>
    </>
  );
}


export default MovieDetails;
