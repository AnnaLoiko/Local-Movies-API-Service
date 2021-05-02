import React from "react";
import Link from 'next/link'

import * as api from "@/api";

import style from "../style.module";

import MovieDetails from "@/main/MovieDetails/MovieDetails";
import Layout from "@/components/Layout/Layout";

export async function getStaticProps(context) {
  const { id } = context.params;

  try {
    const response = await api.getMovieById(id);
    return {
      props: {
        movie: response.data,
      },
    };
  } catch (error) {
    return { notFound: true };
  }
}

export async function getStaticPaths() {
  const response = await api.getMovies({ limit: -1 });

  const paths = response.data.data.map((movie) => ({
    params: { id: movie.id.toString() },
  }));

  return { paths, fallback: false }
}

const MoviePage = ({ movie }) => {
  return (
    <Layout>
      <MovieDetails movie={movie} />
      <div className={style.addMovieBtnWrap}>
        <Link href="/">
          <a className={style.btnZoom} />
        </Link>
      </div>
    </Layout>
  );
};

export default MoviePage;
