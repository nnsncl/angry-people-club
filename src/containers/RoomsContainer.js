import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { setRommInfos } from '../features/appSlice';

import { Sidebar, Avatar, Typography } from '../components';

import db from '../services/firebase';

const Badge = styled.span`
    font-size: 1.3rem;
    border-radius: 56px;
    background: #FD5C00;
    padding: 0.3rem 0.9rem;
    margin-left: 0.9rem;
`;

export default function MembersContainer({ children }) {
    const [rooms, setRooms] = useState([]);
    const dispatch = useDispatch();
    let dring = new Audio();
    dring.src = '/mp3/dring.mp3';

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

    return (
        <>
            <Sidebar.Label hasMarginBottom >
                <Typography.Body>Rooms<Badge>{rooms.length}</Badge></Typography.Body>
                {children}
            </Sidebar.Label>
            <Sidebar.List>
                {rooms.map(({ id, room }) => (
                    <Sidebar.ListItem
                        key={id}
                        id={id}
                        hasSmallMarginBottom
                        hasBackground
                        flexItem
                        onClick={() => dispatch(
                            setRommInfos({
                                roomID: id,
                                roomName: room.roomName,
                        }), dring.play()
                        )}>
                        <Sidebar.Item>
                            <Avatar large backgroundURL={room.roomPhotoURL} />
                            <Typography.BodySmall><b>{room.roomName}</b></Typography.BodySmall>
                        </Sidebar.Item>
                    </Sidebar.ListItem>
                ))}
            </Sidebar.List>
        </>
    );
};
