import React from 'react'
import { Container, LabelLarge, Wide } from './styles/Input'

export default function Input({ name, type, placeholder, label, ...restProps }) {
    return (
        <Container>
            <LabelLarge htmlFor={name} >{label}</LabelLarge>
            <Wide
            name={name}
            id={name}
            type={type}
            placeholder={placeholder}
            {...restProps}
             />
        </Container>
    )
}

Input.Container = function InputContainer({ children, ...restProps }) {
    return <Container {...restProps} >{children}</Container>
}