import React from "react";
import style from "./style.module";

import MovieDetails from '@/main/MovieDetails/MovieDetails';
import Layout from "@/components/Layout/Layout";
import Button from "@/components/Button/Button";

const MoviePage = () => <Layout>
  <MovieDetails />
  <div className={style.addMovieBtnWrap}>
    <Button
      onClick={() => {
        console.log('return to main page');
      }}
      text=""
      className="btnZoom"
    />
  </div>
</Layout>

export default MoviePage;
