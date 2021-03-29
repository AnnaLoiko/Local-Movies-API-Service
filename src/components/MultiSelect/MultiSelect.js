import React, { useState } from "react";
import style from "./style.module";

import PropTypes from 'prop-types';
import useToggle from '@/hooks/useToggle';

const MultiSelect = (props) => {
  const { items, placeholder, selectedItems = [], handleChange } = props;

  const [isChecked, toggleCheck] = useToggle(false);
  const [selectedItemsTitle, setSelectedItemsTitle] = useState(selectedItems || '');

  console.log('selectedItemsTitle', selectedItemsTitle);

  const itemsStr = selectedItemsTitle.length !== 0 && selectedItemsTitle.join(", ");

  function handleChangeSelected(checked, value) {
    const newSelectedItems = checked ? [...selectedItems, value] : selectedItems.filter(elem => (elem !== value));

    handleChange(newSelectedItems);
    setSelectedItemsTitle(newSelectedItems);
  }

  return (
    <>
      <div className={`${style.inputWrap} ${isChecked && style.up}`}>

        <input
          type="text"
          className={style.input}
          onClick={() => toggleCheck(!isChecked)}
          title={itemsStr}
          value={itemsStr}
          defaultValue={itemsStr}
          placeholder={placeholder}
        />
      </div>

      <div className={`${style.selectDropDown} ${!isChecked && style.hide}`}>
        {items.map((item, index) => (
          <div key={index}>
            <input
              type="checkbox"
              className={style.checkbox}
              id={`${item}_${index}`}
              name={item}
              value="1"
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
  selectedItems: PropTypes.string,
  selectedItems: PropTypes.array,
  handleChange: PropTypes.func,
};

export default MultiSelect;

