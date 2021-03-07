import React, { useState } from "react";
import style from "./style.module";

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
        <div>
          <input type="checkbox" className={style.checkbox} id="Crime" name="Crime" value="yes" />
          <label htmlFor="Crime" className={style.lableCheckbox}>Crime</label>
        </div>
        
        <div>
          <input type="checkbox" className={style.checkbox} id="Horror" name="Horror" value="yes" />
          <label htmlFor="Horror" className={style.lableCheckbox}>Horror</label>
        </div>
      </div>

    </>
  )
}

export default Select;

