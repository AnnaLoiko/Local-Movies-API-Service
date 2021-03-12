import React, { useState } from "react";
import style from "./style.module";

import PropTypes from 'prop-types';

const Select = (props) => {
  const { items, selectedItems, handleChange } = props;
  
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItemsTitle, setSelectedItemsTitle] = useState(selectedItems || props.placeholder);

  function handleChangeSelected(checked, value) {
    const newSelectedItems = checked ? selectedItems.concat(value) : selectedItems.filter( elem => (elem !== value));
    handleChange(newSelectedItems);
    setSelectedItemsTitle(newSelectedItems);
  }

  return (
    <>
      {props.label && <label className={style.lableSelect}>{props.label}</label>}
      
      <div
        className={`${style.input} ${isOpen && style.up}`}
        onClick={() => { setIsOpen(!isOpen) }}
      >
        {selectedItemsTitle.length !== 0 ? selectedItemsTitle.join(", ") : props.placeholder}
      </div>

      <div className={`${style.selectDropDown} ${!isOpen && style.hide}`}>
        {items.map((item, index) => (
          <div key={index}>
            <input
              type="checkbox"
              className={style.checkbox}
              id={item}
              name={item}
              checked={selectedItems.includes(item)}
              onChange={() => { handleChangeSelected(!selectedItems.includes(item), item); }}
            />
            <label htmlFor={item} className={style.lableCheckbox}>{item}</label>
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

Select.defaultProps = {
  title: "Some title",
  placeholder: "Value here",
};

export default Select;

