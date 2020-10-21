import React, { useContext } from 'react';
import { withRouter, Redirect } from 'react-router';
import { AuthContext } from '../auth/Auth';
import { Typography, Button } from '../components'
import { Layout } from '../layout'

import { motion } from 'framer-motion'
import styled from 'styled-components'

import {
    GridLayoutContainer,
    NavigationContainer,
    ScrollContainer,
} from '../containers'



const DirectionContainer = styled(motion.section)`
    right: 0;
    left: 0;
    z-index: 1;

    #pos-1 {
        transform: rotate(19deg);
    }
    #pos-2 {

    }
    #pos-3 {
        transform: rotate(9deg);
    }
    #pos-4 {
        transform: rotate(-13deg);
    }
    #pos-5 {

    }
    #pos-6 {
        transform: rotate(13deg);
    }
`;

const Frame = styled(motion.div)`
    font-size: 9vw;
    white-space: nowrap;
    text-transform: uppercase;
    letter-spacing: -3px;
    line-height: 1.2em;
`;

const Item = styled(motion.span)`
    display: block;
    background-color: white;
    white-space: nowrap;
    padding: .9rem 2.3rem;
`;


const Landing = () => {

    const { currentUser } = useContext(AuthContext);

    if (currentUser) {
        return <Redirect to='/' />;
    }

    return (
        <ScrollContainer>
            <NavigationContainer />
            <main>
                <Layout maxFreeze >
                    <Layout.Row h75 >
                        <Layout.Col size="1"  >
                            <Typography.TitleLarge>Sabotage<br />your social life</Typography.TitleLarge>
                        </Layout.Col>
                    </Layout.Row>
                </Layout>
                <GridLayoutContainer />
                <Layout maxFreeze >
                    <Layout.Row responsiveCol hasPadding >
                        <Layout.Col halfScreenLg >
                            <Typography.TitleMd>Did you ever wonder what the world could be if there were <b>places specially designed to spread hate</b>?</Typography.TitleMd>
                            <Typography.BodyLarge>Done. We've created the <b>Angry People Club</b>, a place for trolling and <b>spit your hate through anonymous messages after a long, stressful day.</b></Typography.BodyLarge>
                            <Typography.BodyLarge>Everything you send on the <b>Angry People Club</b> is <strong>protected with anonymity</strong> so everybody can enjoy your complete sincerity.</Typography.BodyLarge>
                            <Typography.BodyLarge><b>You're welcome.</b></Typography.BodyLarge>
                            <Button hasmargin='true' to='/signup' >Get started</Button>
                        </Layout.Col>
                    </Layout.Row>
                </Layout>
                <DirectionContainer>
                    <Frame id="pos-1" >
                        <Item>Feels good to spit on his coffee</Item>
                    </Frame>
                    <Frame id="pos-2" >
                        <Item>I'll burn the place down before i quit</Item>
                    </Frame>
                    <Frame id="pos-3" >
                        <Item>Wish my partner was not that ugly</Item>
                    </Frame>
                    <Frame id="pos-4" >
                        <Item>Stole and crashed a bike today</Item>
                    </Frame>
                    <Frame id="pos-5" >
                        <Item>Sabotage, this is the way</Item>
                    </Frame>
                    <Frame id="pos-6" >
                        <Item>What was that smell</Item>
                    </Frame>
                </DirectionContainer>
                <Layout maxFreeze >
                    <Layout.Row responsiveCol hasPadding >
                        <Layout.Col halfScreenLg >
                            <Typography.TitleSm>Join the Club, contribute to make the world a worse place.</Typography.TitleSm>
                            <Button hasmargin='true' to='/signup' >Get started</Button>
                        </Layout.Col>
                    </Layout.Row>
                </Layout>
            </main>

        </ScrollContainer>
    );

};

export default withRouter(Landing);