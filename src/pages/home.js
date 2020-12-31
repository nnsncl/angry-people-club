import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { auth } from '../services/firebase';

import db from '../services/firebase';

import { motion } from 'framer-motion';
import { layoutVariant } from '../theme/animations/index'

import { Modal, Sidebar, Avatar, Typography, Input, Button } from '../components';
import { Layout } from '../components/layout/index';

import {
    NavigationContainer,
    ChatContainer,
    RoomsContainer,
} from '../containers';

export default function Home() {
    const user = useSelector(selectUser);

    const [toggleProfileModal, setToggleProfileModal] = useState(false);
    const [toggleRoomModal, setToggleRoomModal] = useState(false);

    const [userName, setUserName] = useState('');
    const [userPhoto, setUserPhoto] = useState('');

    const [roomName, setRoomName] = useState('');
    const [roomPhoto, setRoomPhoto] = useState('');

    const handleUserInfosUpdate = () => {
        auth.currentUser.updateProfile({
            displayName: `${userName}`,
            photoURL: `${userPhoto}`,
        })
    }

    const handleAddRoom = () => {
        if (roomName) {
            db.collection('rooms').add({
                roomName: `${roomName}`,
                roomPhotoURL: `${roomPhoto}`,
            })
        }
        setToggleRoomModal(!toggleRoomModal)
    }

    return (
        <motion.div
            variants={layoutVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <Modal
                title="Profile informations"
                toggleModal={toggleProfileModal}
                setToggleModal={setToggleProfileModal}
            >
                <Typography.Body>Your actual personnal informations are based on the Google account you've logged in with.</Typography.Body>
                <form >
                    <Input.Label htmlFor='user-name' >Username</Input.Label>
                    <Input
                        type='text'
                        name='user-name'
                        placeholder={auth.currentUser.displayName}
                        defaultValue={userName ? userName : auth.currentUser.displayName}
                        onChange={e => setUserName(e.target.value)}
                    />
                    <Input.Label htmlFor='user-photo' >Profile picture URL</Input.Label>
                    <Input
                        type='text'
                        name='user-photo'
                        placeholder={auth.currentUser.photoURL}
                        defaultValue={userPhoto ? userPhoto : auth.currentUser.photoURL}
                        onChange={e => setUserPhoto(e.target.value)}
                    />
                    <div>
                        <Button.Action onClick={handleUserInfosUpdate} type='submit' >Update</Button.Action>
                    </div>
                </form>
            </Modal>

            <Modal
                title="Add a new room"
                toggleModal={toggleRoomModal}
                setToggleModal={setToggleRoomModal}
            >
                <form onSubmit={e => e.preventDefault()} >
                    <Input.Label htmlFor='room-name' >Room name</Input.Label>
                    <Input
                        type='text'
                        name='room-name'
                        placeholder='Select a room name'
                        defaultValue=''
                        onChange={e => setRoomName(e.target.value)}
                    />
                    <Input.Label htmlFor='room-photo' >Room picture URL</Input.Label>
                    <Input
                        type='text'
                        name='room-photo'
                        placeholder='Paste a photo URL'
                        defaultValue=''
                        onChange={e => setRoomPhoto(e.target.value)}
                    />
                    <div>
                        <Button.Action onClick={handleAddRoom} type='submit' >Create a room</Button.Action>
                    </div>
                </form>
            </Modal>

            <NavigationContainer />
            <Layout maxFreezeLarge >
                <Layout.Row h100 stretchContent responsiveCol >
                    <Layout.Col size="1" >
                        <Sidebar>
                            <Sidebar.Header>
                                <Sidebar.Item>
                                    <Avatar Xlarge backgroundURL={user.photo} />
                                    <Sidebar.Item flexItem>
                                        <span>
                                            <Typography.BodySmall><strong>{user.displayName}</strong></Typography.BodySmall>
                                            <Typography.BodySmall>{user.uid.substring(0, 8)}</Typography.BodySmall>
                                        </span>
                                        <div>
                                            <Button.Ghost onClick={() => setToggleProfileModal(!toggleProfileModal)} >
                                                <svg width="24" height="24" viewBox="0 0 48 48" fill="none">
                                                    <path opacity="0.3" d="M24 22C19.5817 22 16 18.4183 16 14C16 9.58172 19.5817 6 24 6C28.4183 6 32 9.58172 32 14C32 18.4183 28.4183 22 24 22Z" fill="white" />
                                                    <path d="M6.0013 40.3984C6.77652 30.853 14.5238 26 23.9667 26C33.5424 26 41.4098 30.5864 41.9958 40.4C42.0192 40.7909 41.9958 42 40.4934 42C33.0822 42 22.0694 42 7.455 42C6.95342 42 5.95908 40.9184 6.0013 40.3984Z" fill="white" />
                                                </svg>

                                            </Button.Ghost>
                                            <Button.Ghost onClick={() => auth.signOut()} >
                                                <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M15.246 10.6053C16.1702 10.0002 17.4098 10.2589 18.0148 11.183C18.6199 12.1072 18.3612 13.3468 17.437 13.9518C14.0694 16.1566 12 19.9006 12 24C12 30.6274 17.3726 36 24 36C30.6274 36 36 30.6274 36 24C36 19.991 34.0217 16.3194 30.7751 14.094C29.8641 13.4695 29.6318 12.2246 30.2563 11.3136C30.8808 10.4025 32.1256 10.1702 33.0367 10.7947C37.36 13.7582 40 18.6577 40 24C40 32.8366 32.8366 40 24 40C15.1634 40 8 32.8366 8 24C8 18.5371 10.7611 13.5415 15.246 10.6053Z" fill="white" />
                                                    <rect opacity="0.3" x="22" y="6" width="4" height="20" rx="1" fill="white" />
                                                </svg>
                                            </Button.Ghost>
                                        </div>
                                    </Sidebar.Item>
                                </Sidebar.Item>
                            </Sidebar.Header>
                            <Sidebar.Body>
                                <RoomsContainer>
                                    <Button.Small onClick={() => setToggleRoomModal(!toggleRoomModal)} >&#43;</Button.Small>
                                </RoomsContainer>
                            </Sidebar.Body>
                        </Sidebar>
                    </Layout.Col>
                    <Layout.Col size="2" >
                        <ChatContainer />
                    </Layout.Col>
                </Layout.Row>
            </Layout>
        </motion.div>
    );
};