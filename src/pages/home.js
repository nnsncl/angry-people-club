import React, { useContext } from 'react';

import firebaseApp from '../services/firebase';
import { AuthContext } from '../auth/Auth';

import { motion } from 'framer-motion';
import { layoutVariant } from '../theme/animations/index'

import ScrollContainer from '../utils/ScrollContainer';

import { Typography, AnimatedTitle, Button } from '../components';
import { Layout } from '../components/layout/index';

import {
    GridLayoutContainer,
    NavigationContainer,
    DirectionalScrollContainer,
    FooterContainer,
} from '../containers';




export default function Home() {

    const { currentUser } = useContext(AuthContext);
    console.log(currentUser)

    return (
        <motion.div
            variants={layoutVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <ScrollContainer>
                <NavigationContainer hasNavigation />
                <Layout>
                    <Layout.Row  >
                        <Layout.Col size={'3'} >
                        <AnimatedTitle>Let's start by your user name</AnimatedTitle>
                        </Layout.Col>
                        <Layout.Col size={'1'} style={{backgroundColor: 'red'}}>
                            <p>a</p>
                        </Layout.Col>
                    </Layout.Row>
                </Layout>
                <FooterContainer />
            </ScrollContainer>
        </motion.div>
    );
};