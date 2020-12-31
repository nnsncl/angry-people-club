import React from 'react';
import { AnimatePresence } from 'framer-motion';

import { Wrapper } from './styles/Flashbag';


const flashbagOrchestration = {
    visible: {
        opacity: 1,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.1,
            duration: 0.19,
        },
    },
    hidden: {
        opacity: 0,
        transition: {
            when: "afterChildren",
            duration: 0.19,
        },
    },
}

export default function Flashbag({ children, ...restProps }) {
    return (
        <AnimatePresence initial={false} >
            <Wrapper
                initial='hidden'
                animate='visible'
                exit='hidden'
                variants={flashbagOrchestration}
                {...restProps}>{children}</Wrapper>
        </AnimatePresence>
    )
}