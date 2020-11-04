import React, { useCallback } from 'react';
import { withRouter } from 'react-router';
import firebaseApp from '../firebase';

import { Layout } from '../layout';
import { Form, Input, Typography, Button } from '../components';

import { motion } from 'framer-motion';
import { layoutVariant } from '../components/animations/index'

const SignUp = ({ history }) => {
    const handleSignUp = useCallback(async event => {
        // useCallback is used to memoize callbacks
        event.preventDefault();
        // Avoid page reload on sumbit
        const { email, password } = event.target.elements;

        try {
            await firebaseApp
                // Call createUserWithEmailAndPassword function from Firebase API and pass in email and password values
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value);
            // redirect to the Home private route
            history.push('/');
        } catch (error) {
            alert(error);
        }
    }, [history])

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

                        <Form onSubmit={handleSignUp} >
                            <Typography.TitleLarge small>Sign up</Typography.TitleLarge>
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
                                <Typography.Body>Already have an account? <Button.Link to='/signin' >Sign in</Button.Link>.</Typography.Body>
                            </Input.Container>

                        </Form>
                    </Layout.Col>
                </Layout.Row>
            </Layout>
        </motion.div>
    );
};

export default withRouter(SignUp);