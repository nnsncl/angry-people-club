import React from 'react';

import { motion } from 'framer-motion';
import { layoutVariant } from '../theme/animations/index'

// import { Typography, Sidebar } from '../components';
import { Layout } from '../components/layout/index';

import {
    NavigationContainer,
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
                <NavigationContainer />
                <Layout maxFreezeLarge >
                    <Layout.Row h100 stretchContent responsiveCol >
                        <Layout.Col size="1" >
                            <SidebarContainer />
                        </Layout.Col>
                        <Layout.Col size="5" >
                            <ChatContainer />
                        </Layout.Col>
                    </Layout.Row>
                </Layout>
        </motion.div>
    );
};