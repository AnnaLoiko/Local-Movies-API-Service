
import React from "react";
import { useField, useFormikContext } from "formik";
import MultiSelect from '@/components/MultiSelect/MultiSelect';

// Apply React optimization techniques - avoid spreding props on DOM elements
const MultiSelectField = (props) => {
    const {id, name, placeholderText, label, genresList} = props;
    const { setFieldValue } = useFormikContext();
    const [field] = useField(props);

    return (
        <MultiSelect
            id={id}
            name={name}
            placeholderText={placeholderText}
            genresList={genresList}
            value={(field.value || [])}
            handleChange={val => {
                setFieldValue(field.name, val);
            }}
        />
    );
};


export default MultiSelectField;

