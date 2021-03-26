import React, { useState, useCallback } from "react";
import { connect } from "react-redux";
import style from "./style.module";

import MovieAdd from '@/main/MovieAdd/MovieAdd';

import Search from "@/components/Search/Search";
import Button from "@/components/Button/Button";
import Layout from "@/components/Layout/Layout";

import { postMessage } from "@/redux/actions";


const HomePage = (props) => {
  const {postMessage} = props;
  const [openModal, setOpenModal] = useState(false);

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
  postMessage
}
export default connect(null, mapDispatchToProps)(HomePage);
