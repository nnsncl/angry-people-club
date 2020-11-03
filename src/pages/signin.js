import React, { useCallback, useContext } from 'react';
import { withRouter, Redirect } from 'react-router';
import firebaseApp from '../firebase';
import { AuthContext } from '../auth/Auth';
import { Link } from 'react-router-dom';

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
            <form onSubmit={handleSignIn} >
                <h1>Sign In</h1>
                <label htmlFor='email' >Email</label>
                <input name='email' type='email' placeholder='Email address' />
                <label htmlFor='password' >Email</label>
                <input name='password' type='password' placeholder='Password' />
                <button type='submit' >Sign In</button>
            </form>
            <Link to='/signup' >Sign Up</Link>
        </motion.div>
    );

};

export default withRouter(SignIn);