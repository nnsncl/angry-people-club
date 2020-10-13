import React, { useCallback, useContext } from 'react';
import { withRouter, Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import firebaseApp from '../firebase';
import { AuthContext } from '../auth/Auth';
import { Typography } from '../components'
import { Layout } from '../layout'

import {
    GridLayoutContainer,
    NavigationContainer,
} from '../containers'

const SignIn = ({ history }) => {
    const handleSignIn = useCallback(
        async event => {
            event.preventDefault();
            const { email, password } = event.target.elements;

            try {
                await firebaseApp
                    .auth()
                    .signInWithEmailAndPassword(email.value, password.value);
                history.push('/');
            } catch (error) {
                alert(error);
            }
        }, [history]
    );

    const { currentUser } = useContext(AuthContext);

    if (currentUser) {
        return <Redirect to='/' />;
    }

    return (
        <>
            <NavigationContainer />
            <Layout maxFreeze hasPadding >
            <Layout.Row responsiveCol >
                <Layout.Col size="1"  >
                    <Typography.TitleLarge>Start sabotaging<br />your social life.</Typography.TitleLarge>
                    <Typography.BodyLarge>Everything you send on the <b>Angry People Club&nbsp;&copy;</b> is <strong>protected with anonymity</strong> so everybody can enjoy your complete sincerity.</Typography.BodyLarge>
                </Layout.Col>
                <Layout.Col size="1" >
                    
                </Layout.Col>
            </Layout.Row>
        </Layout>
        <GridLayoutContainer />
        <Layout maxFreeze hasPadding >
            <Layout.Row responsiveCol >
                <Layout.Col size="1"  >
                    <Typography.TitleMd>Join the Club and contribute to make the world a worse place.</Typography.TitleMd>
                </Layout.Col>
                <Layout.Col size="1" >
                    <Typography.BodyLarge>Did you ever wonder what the world could be if there were places specially designed to spread hate?</Typography.BodyLarge>
                    <Typography.BodyLarge>Done. We've created the Angry People Club, a place for trolling and spit your hate through anonymous messages after a long, stressful day.</Typography.BodyLarge>
                    <Typography.BodyLarge><b>You're welcome.</b></Typography.BodyLarge>
                </Layout.Col>
            </Layout.Row>
        </Layout>

            {/* <form onSubmit={handleSignIn} >
                <h1>Sign In</h1>
                <label htmlFor='email' >Email</label>
                <input name='email' type='email' placeholder='Email address' />
                <label htmlFor='password' >Email</label>
                <input name='password' type='password' placeholder='Password' />
                <button type='submit' >Sign In</button>
            </form>
            <Link to='/signup' >Sign Up</Link> */}
        </>
    );

};

export default withRouter(SignIn);