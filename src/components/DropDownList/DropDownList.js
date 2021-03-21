import React, {useCallback, useEffect} from "react";
import style from "./style.module";

import PropTypes from 'prop-types';

const DropDownList = (props) => {
  const { isShow, items, clickClose  } = props;

  const escCloseDropDown = useCallback((event) =>{
    if (event.keyCode === 27) {
      clickClose();
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", escCloseDropDown, false);
    return () => {
      document.removeEventListener("keydown", escCloseDropDown, true);
    };
  }, [])


  return (
    <div className={`${!isShow && style.hide} ${style.dropDownListWrap}`}>
      <button className={style.closeBtn} onClick={clickClose}></button>
      
      <div className={style.dropDownList}>
        {items.map((item, index) => (
          <div
            key={index}
            className={`${item.isSelected && style.active} ${style.itemDrop}`}
            onClick={item.handleClick}
          >
            {item.label}
          </div>
        ))}
      </div>
    </div>
  )
}

DropDownList.propTypes = {
  isShow: PropTypes.bool,
  items: PropTypes.array,
  clickClose: PropTypes.func,
};

export default DropDownList;