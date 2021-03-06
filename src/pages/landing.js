import React from 'react';
import { withRouter } from 'react-router';

import { auth, provider } from '../services/firebase';
import { ScrollContainer, scrollToTop } from '../hooks/use-scroll';

import { Typography, AnimatedTitle, Button } from '../components';
import { Layout } from '../components/layout/index';

import {
    GridLayoutContainer,
    NavigationContainer,
    DirectionalScrollContainer,
    FooterContainer,
} from '../containers';

import { motion } from 'framer-motion';
import { layoutVariant } from '../theme/animations/index'

function Landing() {
    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .catch((error) => alert(error.message))
    }
    scrollToTop();

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
                    <Layout.Row h75  >
                        <Layout.Col halfScreenLg >
                            <AnimatedTitle>Sabotage your social life</AnimatedTitle>
                        </Layout.Col>
                    </Layout.Row>
                </Layout>
                <GridLayoutContainer />
                <Layout maxFreeze >
                    <Layout.Row responsiveCol hasPadding >
                        <Layout.Col halfScreenLg >
                            <Typography.TitleMd>Did you ever wonder what the world could be if there were <b>places specially designed to spread hate</b>?</Typography.TitleMd>
                        </Layout.Col>
                    </Layout.Row>
                </Layout>
                <DirectionalScrollContainer />
                <Layout maxFreeze >
                    <Layout.Row responsiveCol hasPadding alignCenter >
                        <Layout.Col  size={'1'} >
                            <Typography.TitleSm>Guess what, <b>we did it.</b></Typography.TitleSm>
                            <Typography.BodyLarge>We've created the <b>Angry People Club</b>, a place for trolling and <b>spit your hate through anonymous messages after a long, stressful day.</b></Typography.BodyLarge>
                            <Typography.BodyLarge>Everything you send on the <b>Angry People Club</b> is <strong>protected with anonymity</strong> so everybody can enjoy your complete sincerity.</Typography.BodyLarge>
                            <Typography.BodyLarge hasMarginBottom ><b>You're welcome.</b></Typography.BodyLarge>
                            <Button.Auth googleIcon onClick={signIn} >Sign in with Google</Button.Auth>
                        </Layout.Col>
                        <Layout.Col size={'2'} >
                            <img width='100%' src='/images/sample.png' alt="sample" />
                        </Layout.Col>
                    </Layout.Row>
                </Layout>
                <Layout maxFreeze >
                    <Layout.Row responsiveCol hasPadding >
                        <Layout.Col halfScreenLg >
                            <Typography.TitleSm hasMarginBottom >Join the Club, contribute to make the world a worse place.</Typography.TitleSm>
                            <Button.Auth googleIcon onClick={signIn} >Sign in with Google</Button.Auth>
                        </Layout.Col>
                    </Layout.Row>
                </Layout>
                <FooterContainer />
            </ScrollContainer>
        </motion.div>
    );
};

export default withRouter(Landing);