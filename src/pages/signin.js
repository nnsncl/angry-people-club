import React, { useCallback, useContext } from 'react';
import { withRouter, Redirect } from 'react-router';
import firebaseApp from '../firebase';
import { AuthContext } from '../auth/Auth';

import { Layout } from '../layout';
import { Form, Input, Typography, Button } from '../components';

import { motion } from 'framer-motion';
import { layoutVariant } from '../components/animations/index'

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
        <motion.div
            variants={layoutVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <Layout maxFreeze >
                <Layout.Row h100 alignCenter >
                    <Layout.Col halfScreenLg >

                        <Form onSubmit={handleSignIn} >
                            <Typography.TitleLarge small>Sign in</Typography.TitleLarge>
                            <Input
                                label="Email address"
                                name="email"
                                type="email"
                                placeholder="mail@mail.co"
                            />
                            <Input
                                label="Password"
                                name="password"
                                type="password"
                                placeholder="••••••••"
                            />
                            <Input.Container>
                                <Button.Action hasMarginBottom type='submit'>Sign In</Button.Action>
                                <Typography.Body>Don't have an account? <Button.Link to='/signup' >Sign up</Button.Link>.</Typography.Body>
                            </Input.Container>

                        </Form>
                    </Layout.Col>
                </Layout.Row>
            </Layout>
        </motion.div>
    );

};

export default withRouter(SignIn);