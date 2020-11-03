import React, { useCallback } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import firebaseApp from '../firebase';

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
            <h1>Sign Up</h1>
            <form onSubmit={handleSignUp}>
                <label htmlFor='email' >Email</label>
                <input name='email' type='email' placeholder='Email address' />
                <label htmlFor='password' >Email</label>
                <input name='password' type='password' placeholder='Password' />
                <button type='submit' >Sign Up</button>
            </form>
            <Link to='/signin' >Sign In</Link>
        </motion.div>
    );
};

export default withRouter(SignUp);