import React from "react";
import { Link } from "react-router-dom";
import style from "./style.module";

import Header from "@/components/Layout/Header/Header";
import Footer from "@/components/Layout/Footer/Footer";
import Logo from "@/components/Logo/Logo";

const ErrorPage = () => (
  <div className={style.appWrap}>
    <Header />
    
    <div className={style.errorPage}>
      <p>Page not found</p>
      <Link to="/" className={style.errorPageBtn}>Go back to home</Link>
    </div>
    
    <Footer>
      <Logo />
    </Footer>
  </div>
);

export default ErrorPage;
