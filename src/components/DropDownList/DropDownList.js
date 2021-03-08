import React from "react";
import style from "./style.module";

import PropTypes from 'prop-types';

const DropDownList = (props) => {
  const { isShow, clickClose, items, className } = props;

  return (
    <div className={`${!isShow && style.hide} ${style.dropDownListWrap} ${className && style[className]}`}>
      <button className={style.closeBtn} onClick={clickClose}></button>
      <div className={style.dropDownList}>
        {items.map((item, index) => (
          <div
            key={index}
            className={`${item.isSelected && style.active} ${style.itemDrop}`}
            onClick={item.func}
          >
            {item.lable}
          </div>
        ))}
      </div>
    </div>
  )
}

DropDownList.propTypes = {
  isShow: PropTypes.bool,
  items: PropTypes.array,
  className: PropTypes.string,
  clickClose: PropTypes.func,
};

export default DropDownList;