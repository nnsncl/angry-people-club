import React from 'react';
import { Field, Label } from './styles/Input';

export default function Input({ name, placeholder, value, type, ...restProps }) {
    return <Field name={name} placeholder={placeholder} value={value} type={type} {...restProps} />
}

Input.Label = function InputLabel({ htmlFor, ...restProps }) {
    return <Label {...restProps} htmlFor={htmlFor} ></Label>
}