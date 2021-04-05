import React, { useState } from "react";
import style from "./style.module";

import PropTypes from 'prop-types';
import useToggle from '@/hooks/useToggle';

const MultiSelect = (props) => {
  const { items, label, selectedItems = [], handleChange } = props;
  
  const [isChecked, toggleCheck] = useToggle(false);
  const [selectedItemsTitle, setSelectedItemsTitle] = useState(selectedItems || props.placeholder);

  const itemsStr = selectedItemsTitle.length !== 0 ? selectedItemsTitle.join(", ") : props.placeholder;

  function handleChangeSelected(checked, value) {
    const newSelectedItems = checked ? selectedItems.concat(value) : selectedItems.filter( elem => (elem !== value));
    
    console.log('newSelectedItems', newSelectedItems),
    console.log('newSelectedItems', newSelectedItems),
    handleChange(newSelectedItems);
    setSelectedItemsTitle(newSelectedItems);
  }

  return (
    <>
      {label && <label className={style.lableSelect}>{props.label}</label>}
      
      <div
        className={`${style.input} ${isChecked && style.up}`}
        onClick={() => toggleCheck(!isChecked)}
      >
        {itemsStr}
      </div>

      <div className={`${style.selectDropDown} ${!isChecked && style.hide}`}>
        {items.map((item, index) => (
          <div key={index}>
            <input
              type="checkbox"
              className={style.checkbox}
              id={`${item}_${index}`}
              name={item}
              checked={selectedItems.includes(item)}
              onChange={() => { handleChangeSelected(!selectedItems.includes(item), item); }}
            />
            <label htmlFor={`${item}_${index}`} className={style.lableCheckbox}>{item}</label>
          </div>
        ))}
      </div>
    </>
  )
}

MultiSelect.propTypes = {
  items: PropTypes.array,
  selectedItems: PropTypes.array,
  label: PropTypes.string,
  handleChange: PropTypes.func,
};

export default MultiSelect;

