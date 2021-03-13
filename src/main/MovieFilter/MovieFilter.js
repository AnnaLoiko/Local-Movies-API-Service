import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';

import FilterItem from './FilterItem/FilterItem';

const MovieFilter = (props) => {
  const [typeFilter, setTypeFilter] = useState("All");

  useEffect(() => {
    if (typeFilter === "All") {
      props.setCurrentMovies([...props.moviesList]);
      return;
    }
    const fileredMovies = [...props.moviesList].filter(item => item.genre.includes(typeFilter))
    props.setCurrentMovies(fileredMovies);
  }, [typeFilter])


  return <ul>
    {props.items.map((item, index) => (
      <FilterItem
        key={index}
        title={item}
        isSelected={item === typeFilter}
        handleClick={() => setTypeFilter(item)}
      />
    ))}
  </ul>
}

MovieFilter.propTypes = {
  filterOptions: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      isActive: PropTypes.bool,
    }),
  )
};

export default MovieFilter;










// import React from "react";
// import PropTypes from 'prop-types';

// import FilterItem from './FilterItem/FilterItem';

// const MovieFilter = (props) =>
//   <ul>
//     {props.items.map((item, index) => (
//       <FilterItem
//         key={index}
//         title={item}
//         isSelected={item === props.typeFilter}
//         handleClick={() => props.handleClick(item)}
//       />
//     ))}
//   </ul>


// MovieFilter.propTypes = {
//   filterOptions: PropTypes.arrayOf(
//     PropTypes.shape({
//       title: PropTypes.string,
//       isActive: PropTypes.bool,
//     }),
//   )
// };

// export default MovieFilter;

