import React from "react";
import style from "./style.module";

import PropTypes from 'prop-types';

import Select from '@/components/Select';

const ResultSort = ({ sortListOptions }) => {
  return (
    <div className={style.selectWrap}>
      <label className={style.label}>Sort by</label>
      <Select options={sortListOptions} />
    </div>
  )
}

ResultSort.propTypes = {
  sortListOptions: PropTypes.array,
};

export default ResultSort;
