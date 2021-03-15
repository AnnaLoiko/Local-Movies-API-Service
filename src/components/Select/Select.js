import React, { useState } from "react";
import style from "./style.module";

import PropTypes from 'prop-types';

import genreList from "@/data/genreList";

const Select = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {props.label && <label className={style.lableSelect}>{props.label}</label>}
      <div
        className={`${style.input} ${isOpen && style.up}`}
        onClick={() => { setIsOpen(!isOpen) }}
      >{props.placeholder}</div>



      <div className={`${style.selectDropDown} ${!isOpen && style.hide}`}>
      {genreList.map((item, index) => (
          <div key={index}>
            <input className={style.checkbox} type="checkbox" id={item.title} name={item.title} value="" />
            <label htmlFor={item.title} className={style.lableCheckbox}>{item.title}</label>
          </div>
        ))}

      </div>
    </>
  )
}

Select.propTypes = {
  title: PropTypes.string,
  isSelected: PropTypes.bool,
};

export default Select;

