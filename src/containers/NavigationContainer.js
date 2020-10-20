import React from 'react'
import { Navigation, Button } from '../components'

export default function NavigationContainer() {
    return (
        <Navigation>
            <Navigation.Frame>
                <Navigation.Item>
                    <Navigation.Logotype>Angry<br />People<br />Club</Navigation.Logotype>
                </Navigation.Item>
                <Navigation.Item>
                    <Button to='/' >Get started</Button>
                </Navigation.Item>
            </Navigation.Frame>
        </Navigation>
    )
}