import React, { useState } from "react";
import style from "./style.module";

import PropTypes from 'prop-types';

const Select = (props) => {
  console.log('select', props);
  const { items, selectedItems, onChange } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItemsTitle, setSelectedItemsTitle] = useState(selectedItems || props.placeholder);

  function handleChange(checked, value) {
    const newSelectedItems = checked ? selectedItems.concat(value) : selectedItems.filter( elem => (elem !== value));
    onChange(newSelectedItems);
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
              onChange={() => { handleChange(!selectedItems.includes(item), item); }}
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

// Select.defaultProps = {
//   title: PropTypes.string,
//   placeholder: PropTypes.bool,
// };

export default Select;

