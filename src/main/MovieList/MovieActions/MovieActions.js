import React from "react";
import style from "./style.module";

import PropTypes from 'prop-types';

import MovieEdit from "@/movieEdit/MovieEdit";
import MovieDelete from "@/movieDelete/MovieDelete";


class MovieActions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: this.props.movie,
      isOpen: this.props.isOpen,
      isOpenEdit: false,
      isOpenDelete: false,
    };
  }

  render() {

    return (
      <>
        <div className={`${!this.props.isOpen && style.hide} ${style.dropDownListWrap}`}>
          <button className={style.closeBtn} 
          onClick={() => this.setState({isOpen: !this.props.isOpen})}
          ></button>

          <div className={style.dropDownList}>
            <div
              className={style.itemDrop}
              onClick={() => this.setState({
                isOpenEdit: !this.state.isOpenEdit,
                // isOpen: !this.props.isOpen,
              })}
            >Edit</div>

            <div
              className={style.itemDrop}
              onClick={() => this.setState({isOpenDelete: !this.state.isOpenDelete})}
            >Delete</div>

          </div>
        </div>

        <MovieEdit
          title="Add movie"
          isOpen={this.state.isOpenEdit}
          clickCloseModal={() => this.setState({ isOpenEdit: false })}
          movie={this.props.movie}
        />

        <MovieDelete
          title="Delete movie"
          isOpen={this.state.isOpenDelete}
          clickCloseModal={() => this.setState({ isOpenDelete: false })}
          movieId={this.props.movie.id}
        />

      </>
    );
  }
}

MovieActions.propTypes = {
  movie: PropTypes.object,
};

export default MovieActions;
