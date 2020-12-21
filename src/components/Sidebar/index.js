import React from 'react'
import {
    SidebarWrapper,
    SidebarHeader,
    SidebarBody,
    SidebarFooter
} from './styles/Sidebar';

import { Typography } from '../../components';

export default function Sidebar({ title }) {
    return (
        <SidebarWrapper>
            <svg fill="none" width="36px" height="36px" viewBox="0 0 271 132">
                <path fillRule="evenodd" clipRule="evenodd" d="M270 102c-20 5-27-10-33-22-9 6-13 21-13 33-7 6-16 1-25-1-7-18-16-34-21-54-3 20-14 34-18 53-7 3-14 2-21-1-7-19-13-39-18-60-19 18-12 71-52 60-8-24-19-45-24-72-4 4-4 9-6 16-8 6-7 16-11 28-3 8-10 15-12 22-2 5 0 10-2 14-2 6-9 11-14 14-1-43 17-83 30-118C38 9 40-2 55 0c-1 10 7 18 9 27 1 4 0 10 2 14 3 10 10 20 12 30 2 6 2 12 6 16 8-23 19-42 25-66 6-3 10-12 20-9l22 72 16-37c3-9 8-25 20-23 9 1 13 23 16 34 3 10 5 21 10 27 8-16 14-38 36-36-1 17 11 35 22 47 0 3-2 3-1 6z" fill="#eb5e28" />
            </svg>
            <SidebarHeader>
                {/* Create SidebarItem */}
                <Typography.Body>{title}</Typography.Body>
                {/* Change the icon */}
                <svg width="16px" height="16px" viewBox="0 0 64 64">
                    <path d="M9 3c14 0 28 18 46 18 0 0-17 16-46 16" fill="none" stroke="white" strokeMiterlimit="10" strokeWidth="5" strokeLinejoin="round" strokeLinecap="round" />
                    <path fill="none" stroke="white" strokeMiterlimit="10" strokeWidth="5" d="M9 62V2" strokeLinejoin="round" strokeLinecap="round" />
                </svg>
            </SidebarHeader>
            <SidebarBody></SidebarBody>
            <SidebarFooter></SidebarFooter>
        </SidebarWrapper>
    )
};
