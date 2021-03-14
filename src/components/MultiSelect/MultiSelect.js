import React, { useState } from "react";
import style from "./style.module";

import PropTypes from 'prop-types';
import useToggle from '@/hooks/useToggle';

const MultiSelect = (props) => {
  const { items, selectedItems, handleChange } = props;
  
  const [isChecked, toggleCheck] = useToggle(false);
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
        className={`${style.input} ${isChecked && style.up}`}
        onClick={() => { toggleCheck(!isChecked) }}
      >
        {selectedItemsTitle.length !== 0 ? selectedItemsTitle.join(", ") : props.placeholder}
      </div>

      <div className={`${style.selectDropDown} ${!isChecked && style.hide}`}>
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

MultiSelect.propTypes = {
  title: PropTypes.string,
  isSelected: PropTypes.bool,
};

MultiSelect.defaultProps = {
  title: "Some title",
  placeholder: "Value here",
};

export default MultiSelect;

