import React from 'react';
import firebaseApp from '../firebase';

import { motion } from 'framer-motion';
import { layoutVariant } from '../components/animations/index'

export default function Home() {
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