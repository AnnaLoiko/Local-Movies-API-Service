import React from "react";
import PropTypes from 'prop-types';

import ResultFilterNavItem from './ResultFilterNavItem/ResultFilterNavItem';

const ResultFilter = (props) => {
  return (
    <ul>
      {props.filterNav.map((item) => (
        <ResultFilterNavItem
          key={item.id}
          title={item.title}
          isSelected={item.isSelected}
        />
      ))}
    </ul>
  )
}

ResultFilter.propTypes = {
  filterNav: PropTypes.array,
  filterNav: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      isSelected: PropTypes.bool,
      id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ]).isRequired,
    }),
  )
};

export default ResultFilter;

