import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { setRommInfos } from '../features/appSlice';

import { Sidebar, Avatar, Button, Typography } from '../components';

import db from '../services/firebase';

const Badge = styled.span`
    font-size: 1.3rem;
    border-radius: 56px;
    background: #FD5C00;
    padding: 0.3rem 0.9rem;
    margin-left: 0.9rem;
`;

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
            <Sidebar.Label hasMarginBottom >
                <Typography.Body>Rooms<Badge>{rooms.length}</Badge></Typography.Body>
                <Button.Small onClick={handleAddRoom} >&#43;</Button.Small>
            </Sidebar.Label>
            <Sidebar.List>
                {rooms.map(({ id, room }) => (
                    <Sidebar.ListItem
                        key={id}
                        id={id}
                        hasSmallMarginBottom
                        hasBackground
                        flexItem
                        onClick={() => dispatch(setRommInfos({
                            roomID: id,
                            roomName: room.roomName,
                        }))}>
                        <Sidebar.Item>
                            <Avatar large backgroundURL='https://media.giphy.com/media/Lopx9eUi34rbq/giphy.gif' />
                            <Typography.BodySmall><b>{room.roomName}</b></Typography.BodySmall>
                        </Sidebar.Item>
                    </Sidebar.ListItem>
                ))}
            </Sidebar.List>
        </>
    );
};
