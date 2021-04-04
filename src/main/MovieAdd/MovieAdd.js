import React from "react";
import { connect } from "react-redux";
import { Formik, Form, Field} from "formik";
import * as Yup from "yup";

import style from "./style.module.css";

import PropTypes from "prop-types";

import Button from "@/components/Button/Button";
import Modal from "@/components/Modal/Modal";
import Input from "@/components/Input/Input";
import DatePickerField from "@/components/DatePickerField/DatePickerField";
import MultiSelectField from "@/components/MultiSelect/MultiSelectField";
import NoticeMovieAdd from "@/main/MovieAdd/NoticeMovieAdd";

import { addMovie } from "@/redux/actions";

const MovieAdd = (props) => {
  const {
    isOpen,
    genresList,
    clickCloseModal,
    addMovie,
    messageAddMovieSucc,
  } = props;


  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Please, enter movie title"),

    poster_path: Yup.string()
      .url("Poster path shoud be a valid url")
      .required("Please, enter Url to the poster image"),

    release_date: Yup.date().default(function () {
      return new Date();
    }),

    genres: Yup.array().min(1, 'Genres field must have at least 1 items').required('Genres field must have at least 1 items'),

    overview: Yup.string()
      .min(3, "Please, enter not too short overview...")
      .required("Please, enter movie Overview"),

    runtime: Yup.number()
      .required("Please, enter a positive number")
      .positive("Please, enter a positive number")
      .integer("Please, enter a positive number"),

    });
    


  return (
    <Modal
      title={messageAddMovieSucc ? "" : "Add movie"}
      isOpen={isOpen}
      clickCloseModal={clickCloseModal}                                                     
    >
      {messageAddMovieSucc && <NoticeMovieAdd />}
      

      {!messageAddMovieSucc && (
        <Formik
          initialValues={{
            title: "",
            release_date: undefined,
            poster_path: "",
            overview: "",
            runtime: "",
            genres: [],
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => addMovie(values)}
        >
          {({ errors, touched }) => (
            <Form>
              <div className={style.item}>
                <Field
                  id="title"
                  type="text"
                  name="title"
                  label="Title"
                  placeholder="Title"
                  component={Input}
                  error={touched.title && errors.title}
                />
                {touched.title && errors.title && (<span className="errorInput">{errors.title}</span>)}
              </div>

              <div className={style.item}>
                <DatePickerField
                  id="release_date"
                  name="release_date"
                  placeholderText="Releze date"
                  label="Releze date"
                />
              </div>

              <div className={style.item}>
                <Field
                  id="poster_path"
                  type="text"
                  name="poster_path"
                  label="Movie URL"
                  placeholder="Movie URL here"
                  component={Input}
                  error={touched.poster_path && errors.poster_path}
                />
                {touched.poster_path && errors.poster_path && (<span className="errorInput">{errors.poster_path}</span>)}
              </div>

              <div className={style.item}>
                <MultiSelectField
                  id="genres"
                  name="genres"
                  placeholder="Select genre"
                  genresList={genresList}
                  label="Genre"
                  error={touched.genres && errors.genres}
                />
                {touched.genres && errors.genres && (<span className="errorInput">{errors.genres}</span>)}
              </div>

              <div className={style.item}>
                <Field
                  id="overview"
                  type="text"
                  name="overview"
                  label="Overview"
                  placeholder="Overview here"
                  component={Input}
                  error={touched.overview && errors.overview}
                />
                {touched.overview && errors.overview && (<span className="errorInput">{errors.overview}</span>)}
              </div>

              <div className={style.item}>
                <Field
                  id="runtime"
                  type="number"
                  name="runtime"
                  label="Runtime"
                  placeholder="Runtime here"
                  component={Input}
                  error={touched.runtime && errors.runtime}
                />
                {touched.runtime && errors.runtime && (<span className="errorInput">{errors.runtime}</span>)}
              </div>

              <div className={style.btnWrap}>
                <Button type="reset" text="Reset" className="btnPrimaryInvert" />
                <Button type="submit" text="Submit" className="btnPrimary" />
              </div>
            </Form>
          )}
        </Formik>
      )}
    </Modal>
  );
};

MovieAdd.propTypes = {
  isOpen: PropTypes.bool,
  genresList: PropTypes.array,
  clickCloseModal: PropTypes.func,
  addMovie: PropTypes.func,
  messageAddMovieSucc: PropTypes.bool,
};

const mapStateToProps = (state) => {
  return {
    genresList: state.movies.genresList,
    messageAddMovieSucc: state.movies.messageAddMovieSucc,
  };
};

const mapDispatchToProps = {
  addMovie,
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieAdd);
