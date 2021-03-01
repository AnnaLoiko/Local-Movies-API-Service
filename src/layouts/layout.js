import React from "react";
import style from "./style.module";

import Header from './Header/Header';
import Footer from './Footer/Footer';
import ButtonSecondary from '@/components/ButtonSecondary';
import Logo from '@/components/Logo';
import Search from "@/components/Search";

import ErrorBoundary from '@/components/ErrorBoundary';

const Layout = ({ children }) => {
  return (
    <div className={style.appWrap}>
       <div className={style.topWrap}>
        <Header>
          <Logo />
          <ButtonSecondary text="Add movie" />
        </Header>
        
        <div className={style.topContentWrap}>
          <h1>Find your movie</h1>
          <ErrorBoundary>
            <Search />
          </ErrorBoundary>
        </div>
      </div>

      <ErrorBoundary>
        <main className={style.mainWrap}>
          {children}
        </main>
      </ErrorBoundary>
      
      <Footer>
        <Logo />
      </Footer>
    </div>
  )
}

export default Layout;