import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { setRommInfos } from '../features/appSlice';

import { Sidebar, Avatar, Typography, Button } from '../components';

import db from '../services/firebase';
export default function MembersContainer() {
    const [rooms, setRooms] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        db
            .collection('rooms')
            .onSnapshot((snapshot) => setRooms(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    room: doc.data(),
                }))
            ))
    }, [])

    const handleAddRoom = () => {
        const roomName = prompt('enter a room name');
        if (roomName) {
            db.collection('rooms').add({
                roomName: roomName,
                roomPhotoURL: 'https://media.giphy.com/media/Lopx9eUi34rbq/giphy.gif',
            })
        }
    }

    return (
        <>
            <Sidebar.Label>
                <Typography.BodySmall>Rooms</Typography.BodySmall>
                <Button.Ghost onClick={handleAddRoom} >
                    <svg width="24" height="24" viewBox="0 0 48 48" fill="none" >
                        <rect x="8" y="22" width="32" height="6" rx="1.5" fill="white" />
                        <rect opacity="0.6" x="26" y="8" width="32" height="6" rx="1.5" transform="rotate(90 26 8)" fill="white" />
                    </svg>
                </Button.Ghost>
            </Sidebar.Label>
            { rooms.map(({ id, room }) => (
                <Sidebar.Item
                    key={id}
                    id={id}
                    hasSmallMarginBottom
                    flexItem
                    onClick={() => dispatch(setRommInfos({
                        roomID: id,
                        roomName: room.roomName,
                    }))}>
                    <Sidebar.Item>
                        <Avatar large backgroundURL='https://media.giphy.com/media/Lopx9eUi34rbq/giphy.gif' />
                        <Typography.Body>{room.roomName}</Typography.Body>
                    </Sidebar.Item>
                    <Button.Ghost>
                        <svg width="24" height="24" viewBox="0 0 48 48" fill="none">
                            <rect opacity="0.6" x="10" y="26" width="6" height="28" rx="1" transform="rotate(-90 10 26)" fill="white" />
                            <path d="M22.5858 34.5858C21.8047 35.3668 21.8047 36.6332 22.5858 37.4142C23.3668 38.1953 24.6332 38.1953 25.4142 37.4142L37.4142 25.4142C38.1714 24.6571 38.1979 23.4379 37.4743 22.6485L26.4743 10.6485C25.7279 9.83431 24.4628 9.7793 23.6486 10.5257C22.8343 11.2721 22.7793 12.5372 23.5257 13.3514L33.2317 23.9398L22.5858 34.5858Z" fill="white" />
                        </svg>
                    </Button.Ghost>
                </Sidebar.Item>
            ))}
        </>
    );
};
