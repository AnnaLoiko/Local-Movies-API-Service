import React from "react";
import Link from 'next/link'
import style from "./style.module";

import Header from "@/components/Layout/Header/Header";
import Footer from "@/components/Layout/Footer/Footer";
import Logo from "@/components/Logo/Logo";

const ErrorPage = () => (
  <>
    <div className={style.appWrap}>
      <Header />

      <div className={style.errorPage}>
        <p>Page not found</p>
        <Link href="/" className={style.errorPageBtn}>
          <a>
            Go back to home
          </a>
        </Link>
      </div>

      <Footer>
        <Logo />
      </Footer>
    </div>
  </>
);

export default ErrorPage;
