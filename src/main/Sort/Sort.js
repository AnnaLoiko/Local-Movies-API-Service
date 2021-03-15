import React, { useState, useEffect } from "react";
import style from "./style.module";

import PropTypes from 'prop-types';

import DropDownList from "@/components/DropDownList/DropDownList";

const Sort = (props) => {
  const [isShow, setIsShow] = useState(false);
  const { sortOptions } = props;

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


Sort.propTypes = {
  sortOptions: PropTypes.arrayOf(
    PropTypes.shape({
      lable: PropTypes.string.isRequired,
      isSelected: PropTypes.bool.isRequired,
    })
  )
};

export default Sort;

