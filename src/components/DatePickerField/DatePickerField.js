import React from "react";
import { useField, useFormikContext } from "formik";

import style from "./style.module";

import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';

// Apply React optimization techniques “// PATTERN: {Avoid spreding props on DOM elements}”
const DatePickerField = (props) => {
  const {id, name, placeholderText} = props;
  const { setFieldValue } = useFormikContext();
  const [field] = useField(props);

  return (
    <div className={style.itemDateWrap}>
      <label htmlFor={field.name} className={style.label}>
        Releze date
      </label>

      <div className={style.itemDate}>
        <DatePicker
          id={id}
          name={name}
          placeholderText={placeholderText}
          selected={ 
            (field.value && new Date(field.value)) || null}
          onSelect={(val) => {
            setFieldValue(field.name, val);
          }}
          onChange={(val) => {
            setFieldValue(field.name, val);
          }}
        />
      </div>
    </div>
  );
};

export default DatePickerField;
