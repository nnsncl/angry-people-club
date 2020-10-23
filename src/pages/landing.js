import React, { useContext } from 'react';
import { withRouter, Redirect } from 'react-router';
import { AuthContext } from '../auth/Auth';
import { Typography, AnimatedTitle, Button } from '../components'
import { Layout } from '../layout'

import {
    GridLayoutContainer,
    NavigationContainer,
    DirectionalScrollContainer,
    FooterContainer,
} from '../containers'

const Landing = () => {

    const { currentUser } = useContext(AuthContext);

    if (currentUser) {
        return <Redirect to='/' />;
    }

    return (
        <>
            <NavigationContainer />
            <Layout maxFreeze >
                <Layout.Row h75 >
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
                        <Typography.BodyLarge>Done. We've created the <b>Angry People Club</b>, a place for trolling and <b>spit your hate through anonymous messages after a long, stressful day.</b></Typography.BodyLarge>
                        <Typography.BodyLarge>Everything you send on the <b>Angry People Club</b> is <strong>protected with anonymity</strong> so everybody can enjoy your complete sincerity.</Typography.BodyLarge>
                        <Typography.BodyLarge><b>You're welcome.</b></Typography.BodyLarge>
                        <Button hasmargin='true' to='/signup' >Get started</Button>
                    </Layout.Col>
                </Layout.Row>
            </Layout>
            <DirectionalScrollContainer />
            <Layout maxFreeze >
                <Layout.Row responsiveCol hasPadding >
                    <Layout.Col halfScreenLg >
                        <Typography.TitleSm>Join the Club, contribute to make the world a worse place.</Typography.TitleSm>
                        <Button hasmargin='true' to='/signup' >Get started</Button>
                    </Layout.Col>
                </Layout.Row>
            </Layout>
            <FooterContainer />
        </>
    );

};

export default withRouter(Landing);