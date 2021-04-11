import React from "react";
import { Link } from "react-router-dom";

import style from "./style.module";

import MovieDetails from "@/main/MovieDetails/MovieDetails";
import Layout from "@/components/Layout/Layout";

const MoviePage = () => (
  <>
    <Layout>
      <MovieDetails />
      <div className={style.addMovieBtnWrap}>
        <Link to="/" className={style.btnZoom} />
      </div>
    </Layout>
  </>
);

export default MoviePage;
