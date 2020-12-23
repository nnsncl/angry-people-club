import React from 'react';
import { Sidebar, Avatar, Typography, Button } from '../components';

import { useAuth } from '../hooks/use-auth';

export default function SidebarFooterContainer(){
    const auth = useAuth();

    return (
        <Sidebar.Footer>
        <Sidebar.Item flexItem >
            <Avatar large squared backgroundURL={auth.user.photoURL} />
            <Sidebar.Item flexItem>
                <span>
                    <Typography.BodySmall><strong>{auth.user.displayName}</strong></Typography.BodySmall>
                    <Typography.BodySmall>{auth.user.uid.split('', 8)}</Typography.BodySmall>
                </span>
                <Button.Small onClick={() => auth.signout()} >
                    <svg width="13px" height="13px" viewBox="0 0 64 64" >
                        <path d="M44 13a24 24 0 11-24 0" fill="none" stroke="#fafafa" strokeMiterlimit="10" strokeWidth="7" strokeLinejoin="round" strokeLinecap="round" />
                        <path fill="none" stroke="white" strokeMiterlimit="10" strokeWidth="7" d="M32 8v24" strokeLinejoin="round" strokeLinecap="round" />
                    </svg>
                </Button.Small>
            </Sidebar.Item>
        </Sidebar.Item>
    </Sidebar.Footer>
    );
};
