import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import style from "./style.module.css";


import PropTypes from 'prop-types';

import Button from '@/components/Button/Button';
import Modal from '@/components/Modal/Modal';
import Input from '@/components/Input/Input';
import DatePickerField from "@/components/DatePicker/DatePicker";
import MultiSelectField from "@/components/MultiSelect/MultiSelectField";
import NoticeMovieAdd from '@/main/MovieAdd/NoticeMovieAdd';

import { addMovie } from "@/redux/actions";


const MovieAdd = (props) => {
  const { isOpen, genresList, clickCloseModal, addMovie, messageAddMovieSucc } = props;

  const validationSchema = Yup.object().shape({
    title: Yup.string()
      .required('Please, enter movie title'),
    poster_path: Yup.string().url()
      .required('Please, enter Url to the poster image'),

    release_date: Yup.date().default(function () {
      return new Date();
    }),

    runtime: Yup.number().required('Please, enter a positive number').positive('Please, enter a positive number').integer('Please, enter a positive number'),
  });


  return (
    <Modal
      title={messageAddMovieSucc ? "" : "Add movie"}
      isOpen={isOpen}
      clickCloseModal={clickCloseModal}
    >

      { messageAddMovieSucc && <NoticeMovieAdd />}

      {!messageAddMovieSucc && (
        <Formik
          initialValues={{
            title: '',
            release_date: new Date(),
            poster_path: '',
            overview: '',
            runtime: '',
            genres: '',
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => { console.log('values', values) }}
        >

          { ({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
            <Form>

              <div className={style.item}>
                <Field id="title" type="text" name="title" label="Title" placeholder="Title" component={Input} />
                {touched.title && errors.title && <p>{errors.title}</p>}
                {/* <ErrorMessage name="title" render={msg => <div>{msg}</div>} /> */}
              </div>

              <div className={`${style.item} ${style.itemDateWrap}`}>
                <label htmlFor="release_date" className={style.label}>Releze date</label>
                <div className={style.itemDate}>
                  <DatePickerField id="release_date" name="release_date" placeholderText='Releze date' label='Releze date' />
                </div>
              </div>

              <div className={style.item}>
                <Field id="poster_path" type="text" name="poster_path" label="Movie URL" placeholder="Movie URL here" component={Input} />
                {touched.poster_path && errors.poster_path && <p>{errors.poster_path}</p>}
              </div>

              <div className={style.item}>
                <label htmlFor="genres" className={style.label}>Genres</label>
                <MultiSelectField id="genres" name="genres" placeholder="Select genre" items={genresList} label='Genre' />
              </div>

              <div className={style.item}>
                <Field id="runtime" type="number" name="runtime" label="Runtime" placeholder="Runtime here" component={Input} />
                {touched.runtime && errors.runtime && <p>{errors.runtime}</p>}
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
  )
};

MovieAdd.propTypes = {
  isOpen: PropTypes.bool,
  genresList: PropTypes.array,
  clickCloseModal: PropTypes.func,
  addMovie: PropTypes.func,
  messageAddMovieSucc: PropTypes.bool,
};


const mapStateToProps = state => {
  return {
    genresList: state.movies.genresList,
    messageAddMovieSucc: state.movies.messageAddMovieSucc,
  }
}

const mapDispatchToProps = {
  addMovie
}
export default connect(mapStateToProps, mapDispatchToProps)(MovieAdd);


















// const MovieAdd = (props) => {
//   const { isOpen, genresList, clickCloseModal, addMovie, messageAddMovieSucc } = props;

//   const [selectedGenre, setSelectedGenre] = useState();
//   const [date, setDate] = useState(new Date());
//   const [title, setTitle] = useState('');
//   const [posterPath, setPosterPath] = useState('');
//   const [overview, setOverview] = useState('');
//   const [runTime, setRunTime] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const newMovie = {
//       "title": title,
//       "release_date": date,
//       "poster_path": posterPath,
//       "overview": overview,
//       "runtime": +runTime,
//       "genres": selectedGenre,
//     };

//     addMovie(newMovie);

//     setTitle('');
//     setPosterPath('');
//     setRunTime('');
//     setOverview('');
//     setSelectedGenre([]);
//   }

//   return (
//     <Modal
//       title={messageAddMovieSucc ? "" : "Add movie"}
//       isOpen={isOpen}
//       clickCloseModal={clickCloseModal}
//     >

//       { messageAddMovieSucc && <NoticeMovieAdd />}

//       {!messageAddMovieSucc && (
//         <form onSubmit={handleSubmit}>

//           <div className={style.item}>
//             <Input
//               type="text"
//               id="title"
//               label="Title"
//               placeholder="Title"
//               value={title}
//               handleInputChange={event => setTitle(event.target.value)}
//             />
//           </div>

//           <div className={`${style.item} ${style.itemDateWrap}`}>
//             <label className={style.label}>Releze data</label>
//             <div className={style.itemDate}>
//               <DatePicker
//                 selected={date}
//                 onChange={date => setDate(date)}
//               />
//             </div>
//           </div>

//           <div className={style.item}>
//             <Input
//               type="text"
//               id="poster_path"
//               label="Movie URL"
//               placeholder="Movie URL here"
//               value={posterPath}
//               handleInputChange={event => setPosterPath(event.target.value)}
//             />
//           </div>

//           <div className={style.item}>
//             <MultiSelect
//               label="Genre"
//               placeholder="Select genre"
//               items={genresList}
//               selectedItems={selectedGenre}
//               handleChange={value => setSelectedGenre(value)}
//             />
//           </div>

//           <div className={style.item}>
//             <Input
//               type="text"
//               id="overview"
//               label="Overview"
//               placeholder="Overview here"
//               value={overview}
//               handleInputChange={event => setOverview(event.target.value)}
//             />
//           </div>

//           <div className={style.item}>
//           <Input
//               type="number"
//               id="runtime"
//               label="Runtime"
//               placeholder="Runtime here"
//               value={runTime}
//               min="1"
//               handleInputChange={event => setRunTime(event.target.value)}
//             />
//           </div>

//           <div className={style.btnWrap}>
//             <Button type="reset" text="Reset" className="btnPrimaryInvert" />
//             <Button type="submit" text="submit" className="btnPrimary" />
//           </div>

//         </form>
//       )}

//     </Modal>
//   )
// };
