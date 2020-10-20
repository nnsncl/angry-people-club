import React from 'react'
import { motion } from 'framer-motion'
import { Container, Link } from './styles/Button'

export default function Button({ children, ...restProps }) {
    return (
        <motion.div
            drag
            dragConstraints={{
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
            }}>
            <Container
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                {...restProps} >
                {children}
            </Container>
        </motion.div>
    )
}

Button.Link = function ButtonLink({ children, ...restProps }) {
    return <Link {...restProps} >{children}</Link>
}