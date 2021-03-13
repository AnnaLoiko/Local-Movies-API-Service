import React, { useEffect, useState } from "react";
import style from "./style.module";
import PropTypes from 'prop-types';

import MovieSortItem from './MovieSortItem/MovieSortItem';

const MovieSort = (props) => {
  const [isShow, setIsShow] = useState(false);

  const [key, setkey] = useState(null);
  const [title, setTitle] = useState("Relese date");
  const [direction, setDirection] = useState(true);

  useEffect(() => {
    if (key == null) return;
    const sortedMovies = [...props.moviesList].sort((a, b) => {
      if (a[key] < b[key]) {
        return direction ? -1 : 1;
      }
      if (a[key] > b[key]) {
        return direction ? 1 : -1;
      }
      return 0;
    });
    props.setCurrentMovies(sortedMovies);
  }, [key, direction])

  // function handleMovieSort(key, title) {
  //   setkey(key);
  //   setTitle(title)
  //   setDirection(!direction);
  // }


  return (
    <div
      className={`${style.selectWrap} ${!direction && style.up}`}
      onClick={() => setIsShow(!isShow)}
    >
      <h4 className={style.label}>Sort by</h4>
      <div className={style.selected}>{title || "Relese date"}</div>

      <div className={`${!isShow && style.hide} ${style.dropDownListWrap}`}>
        <ul className={style.dropDownList}>
          {props.items.map((item, index) => (
            <MovieSortItem
              key={index}
              title={item.title}
              // handleClick={() => handleMovieSort(item.key, item.title)}
              handleClick={() => {
                setkey(item.key);
                setTitle(item.title)
                setDirection(!direction);
              }}
              className={`${item.key === key && style.active} ${style.itemDrop}`}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

MovieSort.propTypes = {
  filterOptions: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      key: PropTypes.string,
    }),
  )
};

export default MovieSort;



// import React, { useState } from "react";
// import style from "./style.module";
// import PropTypes from 'prop-types';

// import MovieSortItem from './MovieSortItem/MovieSortItem';

// const MovieSort = (props) => {
//   console.log('props', props)
//   const [isShow, setIsShow] = useState(false);

//   return (
//     <div
//       className={`${style.selectWrap} ${!props.direction && style.up}`}
//       onClick={() => setIsShow(!isShow)}
//     >
//       <h4 className={style.label}>Sort by</h4>
//       <div className={style.selected}>{props.title || "Relese date"}</div>

//       <div className={`${!isShow && style.hide} ${style.dropDownListWrap}`}>
//         <ul className={style.dropDownList}>
//           {props.items.map((item, index) => (
//             <MovieSortItem
//               key={index}
//               title={item.title}
//               handleClick={() => props.handleClick(item.key, item.title)}
//               className={`${item === props.typeFilter && style.active} ${style.itemDrop}`}
//             />
//           ))}
//         </ul>
//       </div>
//     </div>
//   )
// }

// MovieSort.propTypes = {
//   filterOptions: PropTypes.arrayOf(
//     PropTypes.shape({
//       title: PropTypes.string,
//       key: PropTypes.string,
//     }),
//   )
// };

// export default MovieSort;
