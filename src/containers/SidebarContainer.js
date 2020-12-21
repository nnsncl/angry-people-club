import React from 'react'
import { Sidebar, Typography } from '../components';


export default function SidebarContainer() {
    return (
        <Sidebar>
            <div style={{ display: "flex", alignItems: "center", width: "100%" }} >
                <svg fill="none" width="36px" height="36px" viewBox="0 0 271 132" style={{ marginRight: "1.3rem" }} >
                    <path fillRule="evenodd" clipRule="evenodd" d="M270 102c-20 5-27-10-33-22-9 6-13 21-13 33-7 6-16 1-25-1-7-18-16-34-21-54-3 20-14 34-18 53-7 3-14 2-21-1-7-19-13-39-18-60-19 18-12 71-52 60-8-24-19-45-24-72-4 4-4 9-6 16-8 6-7 16-11 28-3 8-10 15-12 22-2 5 0 10-2 14-2 6-9 11-14 14-1-43 17-83 30-118C38 9 40-2 55 0c-1 10 7 18 9 27 1 4 0 10 2 14 3 10 10 20 12 30 2 6 2 12 6 16 8-23 19-42 25-66 6-3 10-12 20-9l22 72 16-37c3-9 8-25 20-23 9 1 13 23 16 34 3 10 5 21 10 27 8-16 14-38 36-36-1 17 11 35 22 47 0 3-2 3-1 6z" fill="#eb5e28" />
                </svg>
                <Typography.BodySmall>Angry&nbsp;People&nbsp;Club.</Typography.BodySmall>
            </div>
            <Sidebar.Header>
                <Sidebar.Label>
                    <Typography.BodySmall>Current Room</Typography.BodySmall>
                </Sidebar.Label>
                <Sidebar.Item hasBackground>
                    <svg width="32px" height="32px" viewBox="0 0 48 48">
                        <path d="M33 27h-3v-6h3a1 1 0 000-2h-3v-4l-2-1-1 1v4h-6v-4l-1-1-1 1v4h-4l-2 1 2 1h4v6h-4l-2 1 2 1h4v4l1 1 1-1v-4h6v4l1 1 2-1v-4h3l2-1-2-1zm-12-6h6v6h-6v-6z" fill="white" />
                    </svg>
                    <Typography.BodySmall>text</Typography.BodySmall>
                </Sidebar.Item>
            </Sidebar.Header>
            <Sidebar.Body>
                <Sidebar.Label>
                    <Typography.BodySmall>Rooms</Typography.BodySmall>
                </Sidebar.Label>
                <Sidebar.Item>
                    <svg width="32px" height="32px" viewBox="0 0 48 48">
                        <path d="M33 27h-3v-6h3a1 1 0 000-2h-3v-4l-2-1-1 1v4h-6v-4l-1-1-1 1v4h-4l-2 1 2 1h4v6h-4l-2 1 2 1h4v4l1 1 1-1v-4h6v4l1 1 2-1v-4h3l2-1-2-1zm-12-6h6v6h-6v-6z" fill="white" />
                    </svg>
                    <Typography.BodySmall>text</Typography.BodySmall>
                </Sidebar.Item>
                <Sidebar.Label>
                    <Typography.BodySmall>Members</Typography.BodySmall>
                </Sidebar.Label>
                <Sidebar.Item hasSmallMarginBottom >
                    <Sidebar.Avatar />
                    <Typography.BodySmall>User Name</Typography.BodySmall>
                </Sidebar.Item>
            </Sidebar.Body>
            <Sidebar.Footer>
            <Typography.BodySmall>Made with <span role="img" aria-label="Anger symbol" title="Anger symbol" >💢</span> by <a href="https://github.com/nnsncl" rel="noopener noreferrer" title="Go to project's creator github" target="_blank" >nuni</a>.</Typography.BodySmall>
            </Sidebar.Footer>

        </Sidebar>
    )
}
