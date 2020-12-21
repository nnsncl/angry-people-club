import React from 'react'
import {
    Wrapper,
    Header,
    Body,
    Item,
    ActivityIndicator,
    AvatarWrapper,
    AvatarContent,
    Label,
    Footer
} from './styles/Sidebar';

// https://www.youtube.com/watch?v=zc1loX80TX8&ab_channel=CleverProgrammer
// 39:19


export default function Sidebar({ children, ...restProps }) {
    return <Wrapper { ...restProps }>{children}</Wrapper>
};

Sidebar.Header = function SidebarHeader({ children, ...restProps }) {
    return <Header {...restProps}>{children}</Header>
}

Sidebar.Body = function SidebarBody({ children, ...restProps }) {
    return <Body {...restProps}>{children}</Body>
}

Sidebar.Label = function SidebarLabel({ children, ...restProps }) {
    return <Label {...restProps}>{children}</Label>
}

Sidebar.Item = function SidebarItem({ children, ...restProps }) {
    return <Item {...restProps}>{children}</Item>
}

Sidebar.Footer = function SidebarFooter({ children, ...restProps }) {
    return <Footer {...restProps}>{children}</Footer>
}

Sidebar.Avatar = function SidebarAvatar() {
    return (
        <AvatarWrapper>
            <AvatarContent>
                <ActivityIndicator />
            </AvatarContent>
        </AvatarWrapper>
    );
}