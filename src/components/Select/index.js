import React from "react";
import style from "./style.module";

import PropTypes from 'prop-types';

const Select = ({ options }) => {
  return (
    <select className={style.select}>
      {options.map((item) => (
        <option
          key={item.id}
          value={item.value}
          label={item.label}
        />
      ))}
    </select>
  )
}

Select.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ]).isRequired,
    })
  ).isRequired
}

export default Select;
