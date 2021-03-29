
import React from "react";
import { useField, useFormikContext } from "formik";
import MultiSelect from '@/components/MultiSelect/MultiSelect';

const MultiSelectField = ({ ...props }) => {
    console.log('===MultiSelectField==_____', props);
    const { setFieldValue } = useFormikContext();
    const [field] = useField(props);
    return (
        <MultiSelect
            {...field}
            {...props}
            selectedItems={(field.value || [])}
            handleChange={val => {
                setFieldValue(field.name, val);
            }}
        />
    );
};


export default MultiSelectField;

