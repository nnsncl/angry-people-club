import React from 'react';

import { motion } from 'framer-motion';
import { layoutVariant } from '../theme/animations/index'

import { ScrollContainer } from '../hooks/use-scroll';

// import { Typography, Sidebar } from '../components';
// import { Layout } from '../components/layout/index';

import {
    NavigationContainer,
    SidebarContainer,
} from '../containers';


export default function Home() {
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
            </ScrollContainer>
        </motion.div>
    );
};