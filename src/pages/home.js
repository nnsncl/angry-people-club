import React, { useState, useEffect } from 'react';

import { motion } from 'framer-motion';
import { layoutVariant } from '../theme/animations/index'

import { ScrollContainer } from '../hooks/use-scroll';

// import { Typography, Sidebar } from '../components';
// import { Layout } from '../components/layout/index';

import {
    NavigationContainer,
    SidebarContainer,
} from '../containers';


const userSeeds = {
    email: 'niki',
    name: 'nokinik',
}

export default function Home() {
    const [userInformations, setUserInformations] = useState(null);

    useEffect(() => {
        setUserInformations(userSeeds);
    }, []);

    console.log(userInformations)

    return (
        <motion.div
            variants={layoutVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            {/* <NavigationContainer /> */}
            <ScrollContainer>
                <SidebarContainer />
                {/* <Sidebar
                    title="Room Name"
                /> */}
            </ScrollContainer>
        </motion.div>
    );
};