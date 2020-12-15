import React, { useState, useEffect, useContext } from 'react';

import { AuthContext } from '../auth/Auth';

import { motion } from 'framer-motion';
import { layoutVariant } from '../theme/animations/index'

import ScrollContainer from '../utils/ScrollContainer';

import { Typography, Input, Button } from '../components';
import { Layout } from '../components/layout/index';

import {
    NavigationContainer,
} from '../containers';


const userSeeds = {
    email: 'niki',
    name: 'nokinik',
}

export default function Home() {
    const { currentUser } = useContext(AuthContext);
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
                <Layout maxFreeze >
                    <Layout.Row h75 >
                        <Layout.Col halfScreenLg >
                            <Typography.TitleSm>Let's start by anonymity.</Typography.TitleSm>
                            <Typography.BodyLarge>Since you've logged in with Google, yes, we know who you are but don't worry, {currentUser.displayName}, you're about to turn anonymous.</Typography.BodyLarge>
                            <Typography.BodyLarge hasMarginBottom ><b>We've created a username for you</b></Typography.BodyLarge>
                            <Input
                                label=""
                                name="text"
                                type="text"
                                placeholder="Vicious Cucumber"
                            />
                            <Button.Action>This is my name</Button.Action>
                        </Layout.Col>
                    </Layout.Row>
                </Layout>
            </ScrollContainer>
        </motion.div>
    );
};