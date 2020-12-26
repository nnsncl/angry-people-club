import React from 'react'
import { auth, provider } from '../services/firebase';

import { Navigation, Button, Typography } from '../components'

export default function NavigationContainer() {
    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .catch((error) => alert(error.message))
    }

    return (
        <Navigation
            initial={{ y: -190, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 36, damping: 9, mass: .3 }}
            exit={{ y: 0, opacity: 0 }}
        >
            <Navigation.Frame>
                <Navigation.Item>
                    <Navigation.Logotype to="/" >
                        <svg fill="none" width="36px" height="36px" viewBox="0 0 271 132">
                            <path fillRule="evenodd" clipRule="evenodd" d="M270 102c-20 5-27-10-33-22-9 6-13 21-13 33-7 6-16 1-25-1-7-18-16-34-21-54-3 20-14 34-18 53-7 3-14 2-21-1-7-19-13-39-18-60-19 18-12 71-52 60-8-24-19-45-24-72-4 4-4 9-6 16-8 6-7 16-11 28-3 8-10 15-12 22-2 5 0 10-2 14-2 6-9 11-14 14-1-43 17-83 30-118C38 9 40-2 55 0c-1 10 7 18 9 27 1 4 0 10 2 14 3 10 10 20 12 30 2 6 2 12 6 16 8-23 19-42 25-66 6-3 10-12 20-9l22 72 16-37c3-9 8-25 20-23 9 1 13 23 16 34 3 10 5 21 10 27 8-16 14-38 36-36-1 17 11 35 22 47 0 3-2 3-1 6z" fill="#eb5e28" />
                        </svg>
                    </Navigation.Logotype>
                    <Typography.BodySmall>Angry&nbsp;People&nbsp;Club.</Typography.BodySmall>
                </Navigation.Item>
                <Navigation.Item>
                    <Button.Auth googleIcon onClick={signIn} >Sign in with Google</Button.Auth>
                </Navigation.Item>
            </Navigation.Frame>
        </Navigation>
    )
}