import React from 'react';
import { Container } from './styles/Form';

export default function Form({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}