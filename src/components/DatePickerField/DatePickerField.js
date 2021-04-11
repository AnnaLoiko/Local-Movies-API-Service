import React from "react";
import { useField, useFormikContext } from "formik";

import style from "./style.module";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePickerField = ({ ...props }) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(props);

  return (
    <div className={style.itemDateWrap}>
      <label htmlFor={field.name} className={style.label}>
        Releze date
      </label>

      <div className={style.itemDate}>
        <DatePicker
          {...field}
          {...props}
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
