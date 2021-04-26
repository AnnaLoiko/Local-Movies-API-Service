import React from "react";
import Link from 'next/link'
import { useDispatch } from 'react-redux';

import * as actions from '@/redux/actions';

import style from "./style.module";

const Logo = () => {
  const dispatch = useDispatch();

  return (
    <Link
      className={style.logo}
      href="/"
    >
      <a onClick={() => dispatch(actions.resetParams())}>
        <strong>netflix</strong>roulette
      </a>
    </Link>
  )
}

export default Logo;
