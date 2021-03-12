import React, { useState, useEffect } from "react";
import style from "./style.module";

import PropTypes from 'prop-types';

import DropDownList from "@/components/DropDownList/DropDownList";

const MovieSort = () => {
  const [isShow, setIsShow] = useState(false);

  function escCloseDropDown(event) {
    if (event.keyCode === 27) {
      setIsShow(false);
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", escCloseDropDown, false);
    return () => {
      document.removeEventListener("keydown", escCloseDropDown, true);
    };
  }, [])

  const sortOptions = [
    {
      lable: 'Relese date',
      isSelected: true,
      func: function () {
        console.log("sort Relese date");
      },
    },
    {
      lable: 'Genre',
      isSelected: false,
      func: function () {
        console.log("sort Genre");
      },
    },
    {
      lable: 'Genre',
      isSelected: false,
      func: function () {
        console.log("sort Genre")
      },
    },
  ]


  return (
    <div className={`${style.selectWrap} ${isShow && style.up}`} onClick={() => { setIsShow(!isShow) }}>
      <h4 className={style.label}>Sort by</h4>
      <div className={style.selected}>{sortOptions.filter(item => item.isSelected)[0].lable}</div>
      <DropDownList
        className="sortDropDown"
        items={sortOptions}
        isShow={isShow}
        clickClose={() => setIsShow(false)}
        escClose={() => escCloseDropDown()}
      />
    </div>
  );
}


MovieSort.propTypes = {
  sortOptions: PropTypes.arrayOf(
    PropTypes.shape({
      lable: PropTypes.string.isRequired,
      isSelected: PropTypes.bool.isRequired,
    })
  )
};

export default MovieSort;

