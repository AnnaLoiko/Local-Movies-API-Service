import React, { useState, useCallback, useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";

import * as api from '@/api';

import ACTIONS from "@/redux/actionTypes";
import * as actions from "@/redux/actions";

import MovieAdd from '@/main/MovieAdd/MovieAdd';
import Search from "@/components/Search/Search";
import Button from "@/components/Button/Button";
import Layout from "@/components/Layout/Layout";

import { getMovies, postMessage } from "@/redux/actions";

import style from "./style.module";

export async function getServerSideProps(context) {
  const { search } = context.query;

  let movies = [];

  if (search) {
    const response = await api.getMovies({ search });
    movies = response.data.data;
  }

  return {
    props: {
      movies,
      serverParams: search ? { search } : null,
    },
  }
}

const HomePage = ({ movies, serverParams, postMessage }) => {
  const dispatch = useDispatch();

  const storeParams = useSelector((state) => state.movies.params);

  const [openModal, setOpenModal] = useState(false);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    if (serverParams && !mounted) {
      dispatch({ type: ACTIONS.GET_MOVIE_SUCCESS, payloadResponse: movies });
      dispatch(actions.updateParams(serverParams));
    } else if (mounted) {
      dispatch(getMovies(storeParams));
    }
  }, [storeParams]);

  const handleClick = useCallback(() => {
    setOpenModal(true)
  }, []);

  return (
    <>
      <Layout>
        <div className={style.addMovieBtnWrap}>
          <Button
            handleClick={handleClick}
            text="+ Add movie"
            className="btnSecondary"
          />
        </div>

        <div className={style.topContentWrap}>
          <h1 className={style.h1}>Find your movie</h1>
          <Search />
        </div>
      </Layout>

      <MovieAdd
        isOpen={openModal}
        clickCloseModal={() => { postMessage(false), setOpenModal(false)} }
      />
    </>
  );
}

const mapDispatchToProps = {
  postMessage,
}

export default connect(null, mapDispatchToProps)(HomePage);
