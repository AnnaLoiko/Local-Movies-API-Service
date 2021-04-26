import React, { useState, useEffect } from "react";
import style from "./style.module";

import PropTypes from "prop-types";
import useToggle from "@/hooks/useToggle";

const MultiSelect = (props) => {
  const { genresList, placeholder, handleChange, value = [] } = props;

  const [isChecked, toggleCheck] = useToggle(false);
  const [selectedItemsTitle, setSelectedItemsTitle] = useState( value || "" );

  let itemsStr = selectedItemsTitle.length !== 0 && selectedItemsTitle.join(", ");
  useEffect(() => {
    setSelectedItemsTitle(value || '');
    itemsStr = selectedItemsTitle.length !== 0 && selectedItemsTitle.join(", ");
  }, [value]);

  function handleChangeSelected(checked, newValue) {
    const newSelectedItems = checked
      ? [...value, newValue]
      : value.filter((elem) => elem !== newValue);

    handleChange(newSelectedItems);
    setSelectedItemsTitle(newSelectedItems);
  }

  return (
    <>
      <label className={style.label}>
        Genres
      </label>

      <div
        className={`${style.inputWrap} ${isChecked && style.up} ${!itemsStr && style.showPlaceholder} ${props.error && style.errorInput}`}
        onClick={() => toggleCheck(!isChecked)}
      >
        <p>{itemsStr || placeholder}</p>
      </div>

      <div className={`${style.selectDropDown} ${!isChecked && style.hide}`}>
        {genresList && genresList.map((item, index) => (
          <div key={index}>
            <input
              type="checkbox"
              className={style.checkbox}
              id={`${item}_${index}`}
              name={item}
              value={item}
              checked={value.includes(item)}
              onChange={() => {
                handleChangeSelected(!value.includes(item), item);
              }}
            />
            <label htmlFor={`${item}_${index}`} className={style.lableCheckbox}>
              {item}
            </label>
          </div>
        ))}
      </div>
    </>
  );
};

MultiSelect.propTypes = {
  items: PropTypes.array,
  selectedItems: PropTypes.string,
  selectedItems: PropTypes.array,
  handleChange: PropTypes.func,
};

export default MultiSelect;
