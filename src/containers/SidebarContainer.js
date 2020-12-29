import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { auth } from '../services/firebase';
// import { selectRoomName } from '../features/appSlice';

import { Sidebar, Avatar, Typography, Button } from '../components';
import { RoomsContainer } from '../containers';

export default function SidebarContainer() {
    const user = useSelector(selectUser);
    // const roomName = useSelector(selectRoomName);

    
    // console.dir(auth.user.uid);
    // useEffect(() => {
    //     auth.user.updateProfile({
    //         email: 'nuniroland@gmail.com',
    //         phoneNumber: null,
    //         emailVerified: true,
    //         password: null,
    //         displayName: 'Gama Niki',
    //         photoURL: 'https://media.giphy.com/media/Ny0wKKu09ppug/giphy.gif',
    //         disabled: false,
    //     })
    // }, [auth.user]);

    return (
        <Sidebar>
            <Sidebar.Header>
                <Sidebar.Item>
                    <Avatar Xlarge backgroundURL={user.photo} />
                    <Sidebar.Item flexItem>
                        <span>
                            <Typography.BodySmall><strong>{user.displayName}</strong></Typography.BodySmall>
                            <Typography.BodySmall>{user.uid.substring(0, 8)}</Typography.BodySmall>
                        </span>
                    </Sidebar.Item>
                </Sidebar.Item>
            </Sidebar.Header>
            <Sidebar.Body>
                <RoomsContainer />
            </Sidebar.Body>
            <Sidebar.Footer>
                <Sidebar.Item flexItem >
                    <Button.Ghost onClick={() => auth.signOut()} >
                        <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.246 10.6053C16.1702 10.0002 17.4098 10.2589 18.0148 11.183C18.6199 12.1072 18.3612 13.3468 17.437 13.9518C14.0694 16.1566 12 19.9006 12 24C12 30.6274 17.3726 36 24 36C30.6274 36 36 30.6274 36 24C36 19.991 34.0217 16.3194 30.7751 14.094C29.8641 13.4695 29.6318 12.2246 30.2563 11.3136C30.8808 10.4025 32.1256 10.1702 33.0367 10.7947C37.36 13.7582 40 18.6577 40 24C40 32.8366 32.8366 40 24 40C15.1634 40 8 32.8366 8 24C8 18.5371 10.7611 13.5415 15.246 10.6053Z" fill="white" />
                            <rect opacity="0.3" x="22" y="6" width="4" height="20" rx="1" fill="white" />
                        </svg>
                    </Button.Ghost>
                </Sidebar.Item>
            </Sidebar.Footer>
        </Sidebar>
    )
}
