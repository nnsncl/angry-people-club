import React from 'react';

import { motion } from 'framer-motion';
import { layoutVariant } from '../theme/animations/index'

import { ScrollContainer } from '../hooks/use-scroll';

// import { Typography, Sidebar } from '../components';

import {
    ChatContainer,
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
            <ScrollContainer>
                <div style={{ display: "flex", flexDirection: "row" }} >
                    <SidebarContainer />
                    <ChatContainer />
                </div>

            </ScrollContainer>
        </motion.div>
    );
};