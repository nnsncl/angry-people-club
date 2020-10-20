import React, { useContext } from 'react';
import { withRouter, Redirect } from 'react-router';
import { AuthContext } from '../auth/Auth';
import { Typography, Button } from '../components'
import { Layout } from '../layout'

import {
    GridLayoutContainer,
    NavigationContainer,
} from '../containers'

const Landing = () => {

    const { currentUser } = useContext(AuthContext);

    if (currentUser) {
        return <Redirect to='/' />;
    }

    return (
        <>
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
                            <Typography.TitleMd>Join the Club, contribute to make the world a worse place.</Typography.TitleMd>
                            <Typography.BodyLarge>Did you ever wonder what the world could be if there were places specially designed to spread hate?</Typography.BodyLarge>
                            <Typography.BodyLarge>Done. We've created the Angry People Club, a place for trolling and spit your hate through anonymous messages after a long, stressful day.</Typography.BodyLarge>
                            <Typography.BodyLarge>Everything you send on the <b>Angry People Club&nbsp;&copy;</b> is <strong>protected with anonymity</strong> so everybody can enjoy your complete sincerity.</Typography.BodyLarge>
                            <Typography.BodyLarge><b>You're welcome.</b></Typography.BodyLarge>
                            <Button hasmargin='true' to='/signup' >Get started</Button>
                        </Layout.Col>
                    </Layout.Row>
                </Layout>
            </main>

        </>
    );

};

export default withRouter(Landing);