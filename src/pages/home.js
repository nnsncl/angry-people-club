import React, { useState, useEffect } from 'react';

// import { AuthContext } from '../auth/Auth';

import { motion } from 'framer-motion';
import { layoutVariant } from '../theme/animations/index'

import ScrollContainer from '../utils/ScrollContainer';

import { Typography, Button } from '../components';
import { Layout } from '../components/layout/index';

import {
    NavigationContainer,
} from '../containers';


const userSeeds = {
    email: 'niki',
    name: 'nokinik',
}

export default function Home() {
    // const { currentUser } = useContext(AuthContext);
    const [userInformations, setUserInformations] = useState(null);

    useEffect(() => {
        setUserInformations(userSeeds);
    }, []);

    console.log(userInformations)
    // console.log(setUserInformations(user))
    // console.log(userInformations)

    return (
        <motion.div
            variants={layoutVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <NavigationContainer />
            <ScrollContainer>
                <Layout>
                    <Layout.Row>
                        <Layout.Col size={'3'} >
                            <Typography.TitleMd>Let's start by your user name</Typography.TitleMd>
                        </Layout.Col>
                        <Layout.Col size={'1'} style={{ height: '100vh', backgroundColor: 'red' }}>
                            <p>a</p>
                        </Layout.Col>
                    </Layout.Row>
                </Layout>
            </ScrollContainer>
        </motion.div>
    );
};