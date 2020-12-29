import React from 'react'
import { Container, Action, Ghost, Small, Auth, Light, Link } from './styles/Button'

export default function Button({ children, ...restProps }) {
    return (
        <Container {...restProps} >
            {children}
        </Container>
    )
}

Button.Action = function ButtonAction({ children, ...restProps }) {
    return <Action {...restProps}>{children}</Action>
}

Button.Ghost = function ButtonGhost({ children, ...restProps }) {
    return <Ghost {...restProps}>{children}</Ghost>
}

Button.Light = function ButtonLight({ children, ...restProps }) {
    return <Light {...restProps} >{children}</Light>
}

Button.Small = function ButtonSmall({ children, ...restProps }) {
    return <Small {...restProps} >{children}</Small>
}

Button.Auth = function ButtonAction({ googleIcon, children, ...restProps }) {
    return (
        <Auth {...restProps}>
            { googleIcon
                ? <svg viewBox="0 0 533.5 544.3">
                    <path d="M534 278c0-18-2-37-5-55H272v105h147c-6 34-26 64-54 83v68h87c52-48 82-118 82-201z" fill="#4285f4" />
                    <path d="M272 544c74 0 135-24 181-65l-88-68c-25 16-56 26-93 26-71 0-131-48-153-113H29v70c46 92 140 150 243 150z" fill="#34a853" />
                    <path d="M119 324c-11-33-11-70 0-104v-70H29c-39 77-39 168 0 244l90-70z" fill="#fbbc04" />
                    <path d="M272 108c39-1 76 14 105 41l77-78a272 272 0 00-425 79l90 70c22-64 82-112 153-112z" fill="#ea4335" />
                </svg>
                : <></>}
            {children}
        </Auth>
    )
}

Button.Link = function ButtonLink({ children, ...restProps }) {
    return <Link {...restProps} >{children}</Link>
}