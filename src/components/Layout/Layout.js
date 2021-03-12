import React from "react";
import style from "./style.module";

import Header from './Header/Header';
import Footer from './Footer/Footer';
import TopBox from './TopBox/TopBox';
import Logo from '@/components/Logo/Logo';
import Main from "@/main/Main";

import ErrorBoundary from '@/components/ErrorBoundary';

const Layout = ({children}) => {
  return (
    <>
      <div className={style.appWrap}>
        <TopBox>
          <Header />
          {children}
        </TopBox>

        <ErrorBoundary>
          <div className={style.mainWrap}>
            <Main />
          </div>
        </ErrorBoundary>

        <Footer>
          <Logo />
        </Footer>
      </div>
    </>
  );
}

export default Layout;
