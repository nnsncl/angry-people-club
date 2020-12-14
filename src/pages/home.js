import React, { useContext } from 'react';
import firebaseApp from '../services/firebase';
import { AuthContext } from '../auth/Auth';

import { motion } from 'framer-motion';
import { layoutVariant } from '../theme/animations/index'

export default function Home() {

    const { currentUser } = useContext(AuthContext);
    console.log(currentUser)

    return (
        <motion.div
            variants={layoutVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <h1>Home</h1>
            <button onClick={() => firebaseApp.auth().signOut()} >Sign out</button>
            {/* Call signOut from auth module to log out the user on click using the firebase API */}
        </motion.div>
    );
};