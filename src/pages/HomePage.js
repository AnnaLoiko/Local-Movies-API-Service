import React, { useState, useCallback, useEffect } from "react";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import style from "./style.module";

import MovieAdd from '@/main/MovieAdd/MovieAdd';
import Search from "@/components/Search/Search";
import Button from "@/components/Button/Button";
import Layout from "@/components/Layout/Layout";

import useUpdateEffect from '@/hooks/useUpdateEffect';
import { postMessage, resetSearchData, getMovies } from "@/redux/actions";


const HomePage = (props) => {
  const {postMessage, resetSearchData, getMovies} = props;
  const [openModal, setOpenModal] = useState(false);
  
  const location = useLocation();
  useUpdateEffect(() => {
    if (location.pathname === "/" && location.state === "fromLogo") { getMovies(), resetSearchData() };
  }, [location.state])

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

const mapStateToProps = state => {
  return {
    params: state.movies.params,
  }
}

const mapDispatchToProps = {
  postMessage,
  resetSearchData,
  getMovies
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
