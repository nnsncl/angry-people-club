import React from 'react'
import { Navigation } from '../components'

export default function NavigationContainer() {
    return (
        <Navigation>
            <Navigation.Frame>
                <Navigation.Item>
                    <Navigation.Logotype>Angry<br />People<br />Club</Navigation.Logotype>
                </Navigation.Item>
                <Navigation.Item>
                    <span role="img" aria-label="pouting face emoji" >😡</span>
                </Navigation.Item>
            </Navigation.Frame>
        </Navigation>
    )
}