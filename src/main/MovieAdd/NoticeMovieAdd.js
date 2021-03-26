import React from "react";
import style from "./style.module.css";


const NoticeMovieAdd = () => {
  return (
    <>
      <div className={style.titleSucc}>Congratulations!</div>
      <p className={style.mess}>The movie has been added to database successfully</p>
    </>
  );
}

export default NoticeMovieAdd;
