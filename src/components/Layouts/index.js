import React from "react";
import style from "./style.module";

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ButtonSecondary from '@/components/ButtonSecondary';
import Logotip from '@/components/Logotip';
import Search from "@/components/Search";

import LayoutTopContentWrap from "./LayoutTopContentWrap/LayoutTopContentWrap";

import ErrorBoundary from '@/Components/ErrorBoundary';

const Layout = ({ children }) => {
  return (
    <div className={style.appWrap}>
      <LayoutTopContentWrap>
        <Header>
          <Logotip />
          <ButtonSecondary text="Add movie" />
        </Header>
        
        <div className={style.topContent}>
          <h1>Find your movie</h1>
          <ErrorBoundary>
            <Search />
          </ErrorBoundary>
        </div>
      </LayoutTopContentWrap>

      <main className={style.mainWrap}>
        {children}
      </main>
      
      <Footer>
        <Logotip />
      </Footer>
    </div>
  )
}

export default Layout;