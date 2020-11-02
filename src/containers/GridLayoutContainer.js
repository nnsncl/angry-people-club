import React from 'react';
import ressources from '../translations/unsplash-ressources.json';
import { GridLayout } from '../components'
import { v4 as uuidv4 } from 'uuid';


const container = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.23,
        },

    }
};

const variant = {
    hidden: {
        y: "33vh",
        opacity: 0,
    },
    visible: {
        y: "0",
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 95,
            damping: 23,
            mass: 1.9,
            ease: "easeInOut",
            duration: 0.3,
        }
    }
};

export default function GridLayoutContainer() {
    return (
        <GridLayout.FlexContainer>
            <GridLayout
                variants={container}
                initial="hidden"
                animate={"visible"}>
                {ressources.map(item => (
                    <GridLayout.Item variants={variant} key={uuidv4()} id={item.id}>
                        <GridLayout.Image backgroundImage={item.url} />
                    </GridLayout.Item>
                ))}
            </GridLayout>
        </GridLayout.FlexContainer>
    )
}