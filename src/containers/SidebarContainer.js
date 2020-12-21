import React, { useEffect } from 'react'
import { Sidebar, Avatar, Typography } from '../components';

import { useAuth } from '../hooks/use-auth';


export default function SidebarContainer() {
    const auth = useAuth();

    useEffect(() => {
        auth.user.updateProfile({
            email: 'nuniroland@gmail.com',
            phoneNumber: '+11234567890',
            emailVerified: false,
            password: 'newPassword',
            displayName: 'John Doe',
            photoURL: 'https://media.giphy.com/media/h26R1JMxiqYpwp0rkF/giphy.gif',
            disabled: false,
        })
    }, [auth.user]);

    return (
        <Sidebar>

            <svg width="30" height="36" viewBox="0 0 30 36" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M3 0C1.34314 0 0 1.34314 0 3V27C0 28.6569 1.34314 30 3 30H17L22.0641 36L23.9282 30H27C28.6569 30 30 28.6569 30 27V3C30 1.34314 28.6569 0 27 0H3Z" fill="white" />
                <path fillRule="evenodd" clipRule="evenodd" d="M24.9277 17.7256C23.4443 18.105 22.9618 16.9867 22.5298 16.0828C21.8286 16.5368 21.5531 17.6405 21.545 18.6103C21.014 19.0512 20.3427 18.6164 19.7006 18.4838C19.1596 17.1443 18.5382 15.8872 18.163 14.3774C17.8968 15.9148 17.1451 16.9537 16.8098 18.4207C16.308 18.6705 15.749 18.5639 15.2727 18.3577C14.7566 16.908 14.2854 15.4125 13.9195 13.8087C12.5481 15.1572 13.0313 19.2122 10.1066 18.3577C9.52945 16.5078 8.68393 14.9332 8.32303 12.8611C8.03134 13.176 8.03097 13.567 7.89262 14.1247C7.27741 14.5464 7.33568 15.2741 7.03188 16.2093C6.83681 16.8093 6.33564 17.3779 6.17048 17.9151C6.06891 18.2468 6.1574 18.6762 6.04764 18.9893C5.89186 19.4334 5.37511 19.8029 5.00209 20C4.93975 16.7369 6.28423 13.7504 7.2161 11.092C7.81477 10.7168 7.95127 9.86768 9.06138 10.0175C8.95228 10.7549 9.55937 11.3459 9.73768 12.0396C9.82587 12.3829 9.75762 12.7729 9.86044 13.1131C10.0905 13.8723 10.5769 14.6134 10.7832 15.388C10.9107 15.8686 10.8832 16.2621 11.2136 16.5882C11.7958 14.891 12.6011 13.4224 13.0587 11.5972C13.5119 11.3411 13.793 10.6623 14.5347 10.9025C15.1176 12.6836 15.565 14.6033 16.1335 16.3988C16.4608 15.55 16.9575 14.4685 17.3022 13.5557C17.5422 12.9199 17.9548 11.6642 18.8393 11.7867C19.4601 11.8729 19.7898 13.5554 20.008 14.3773C20.2149 15.1568 20.3508 15.963 20.7459 16.4622C21.3151 15.2538 21.7321 13.5618 23.3901 13.6822C23.3271 15.0422 24.2296 16.3625 24.9894 17.2838C25.0387 17.5024 24.8979 17.5264 24.9277 17.7256Z" fill="#EB5E28" />
            </svg>

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
                <Sidebar.Item hasMarginBottom >
                    <svg width="32px" height="32px" viewBox="0 0 48 48">
                        <path d="M33 27h-3v-6h3a1 1 0 000-2h-3v-4l-2-1-1 1v4h-6v-4l-1-1-1 1v4h-4l-2 1 2 1h4v6h-4l-2 1 2 1h4v4l1 1 1-1v-4h6v4l1 1 2-1v-4h3l2-1-2-1zm-12-6h6v6h-6v-6z" fill="white" />
                    </svg>
                    <Typography.BodySmall>text</Typography.BodySmall>
                </Sidebar.Item>
                <Sidebar.Label>
                    <Typography.BodySmall>Members</Typography.BodySmall>
                </Sidebar.Label>
                <Sidebar.Item  hasSmallMarginBottom >
                    <Avatar hasIndicator backgroundURL={auth.user.photoURL} />
                    <Typography.BodySmall>{auth.user.displayName}</Typography.BodySmall>
                </Sidebar.Item>
            </Sidebar.Body>

            <Sidebar.Footer>
                <Typography.BodySmall>Made with <span role="img" aria-label="Anger symbol" title="Anger symbol" >💢</span> by <a href="https://github.com/nnsncl" rel="noopener noreferrer" title="Go to project's creator github" target="_blank" >nuni</a>.</Typography.BodySmall>
            </Sidebar.Footer>

        </Sidebar>
    )
}
