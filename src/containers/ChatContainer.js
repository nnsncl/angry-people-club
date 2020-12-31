import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import * as firebase from 'firebase/app';
import "firebase/firestore";
import db from '../services/firebase';

import { selectRoomID, selectRoomName } from '../features/appSlice';
import { selectUser } from '../features/userSlice';

import { Message, ChatInput, AppBar, Typography, Button, Avatar } from '../components';
import { Layout } from '../components/layout/index';

export default function ChatContainer() {
    const user = useSelector(selectUser);

    const roomID = useSelector(selectRoomID);
    const roomName = useSelector(selectRoomName);
    const [roomPhoto, setRoomPhoto] = useState('');


    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);
    // Might be updated with use-firestore-query
    useEffect(() => {
        if (roomID !== null) {
            db
                .collection("rooms")
                .doc(roomID)
                .collection("messages")
                .orderBy("timeStamp")
                .onSnapshot((snapshot) => setMessages(
                    snapshot.docs.map((doc) =>
                        doc.data()
                    )
                ))
                
            const docRef = db.collection("rooms").doc(roomID);
            docRef.get().then(function (doc) {
                if (doc.exists) {
                    setRoomPhoto(doc.data().roomPhotoURL)
                }
            }).catch(function (error) {
                console.log("Error getting document:", error);
            })

        }
    }, [messages, roomID])



    useEffect(() => {
        const messagesList = document.getElementById('messages-list');
        if (messagesList) {
            messagesList.scrollTop = (messagesList.offsetHeight * messages.length) / 2;
        }
    }, [messages])



    const handleSendMessage = (e) => {
        let mlerm = new Audio();
        mlerm.src = '/mp3/mlerm.mp3';

        if (e.key === 'Enter') {
            db
                .collection('rooms')
                .doc(roomID)
                .collection('messages')
                .add({
                    timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
                    message: input,
                    user: user,
                });
            mlerm.play();
            setInput('');
        }
    }

    return (
        <>
            <div style={{ color: '#111', height: '100%', width: '100%', background: "white", borderRadius: '1.3rem', }} >
                <Layout maxFreeze >
                    <Layout.Row style={{ flex: '0.1' }} >
                        {roomName
                            ? <Layout.Col size="1" >
                                <AppBar>
                                    <AppBar.Frame>
                                        <Avatar Xlarge backgroundURL={roomPhoto} />
                                        <Typography.BodyLarge>{roomName}</Typography.BodyLarge>
                                    </AppBar.Frame>
                                    <AppBar.Frame>
                                        {/* <Button.Ghost>
                                            <svg width="24" height="24" viewBox="0 0 48 48" fill="none">
                                                <rect x="11.272" y="33.8994" width="32" height="6" rx="1.5" transform="rotate(-45 11.272 33.8994)" fill="#111" />
                                                <rect opacity="0.6" x="14.1006" y="11.2725" width="32" height="6" rx="1.5" transform="rotate(45 14.1006 11.2725)" fill="#111" />
                                            </svg>
                                        </Button.Ghost> */}
                                    </AppBar.Frame>
                                </AppBar>
                            </Layout.Col>
                            : null}
                    </Layout.Row>
                    {roomID
                        ? <Layout.Row id="messages-list" style={{ flex: '0.8', height: '63vh', maxHeight: '63vh', overflow: 'scroll' }} >
                            <Layout.Col size="1" >
                                {messages.map(message => (
                                    <Message
                                        key={uuidv4()}
                                        backgroundURL={message.user.photo}
                                        userName={message.user.displayName}
                                        timeStamp={message.timeStamp}
                                        content={message.message}
                                    />))}
                            </Layout.Col>
                        </Layout.Row>
                        : <Layout.Row stretchContent alignCenter hasPadding >
                            <Layout.Col halfScreenLg >
                                <Typography.TitleSm>😡💢</Typography.TitleSm>
                                <Typography.TitleSm>Join a room,<br /><b>engage rage mode.</b></Typography.TitleSm>
                                <Typography.Body>Join or create a room to provide a new place for trolling to the club.</Typography.Body>
                            </Layout.Col>
                        </Layout.Row>}
                    <Layout.Row style={{ flex: '0.1' }} >
                        <Layout.Col size='1' >
                            {roomID &&
                                <ChatInput>
                                    <ChatInput.Form onSubmit={handleSendMessage} >
                                        <ChatInput.Frame>
                                            <Avatar large backgroundURL={user.photo} />
                                            <ChatInput.Input
                                                placeholder={`Send a message to #${roomName}`}
                                                value={input}
                                                onChange={e => setInput(e.target.value)}
                                                disabled={!roomID}
                                                onKeyPress={handleSendMessage}
                                            />
                                        </ChatInput.Frame>
                                        <ChatInput.Frame>
                                            <ChatInput.IconFrame>
                                                <ChatInput.IconContainer>
                                                    <svg width="24" height="24" viewBox="0 0 48 48" fill="none" >
                                                        <rect opacity="0.3" x="8" y="22" width="34" height="4" rx="1" fill="#111" />
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M24.1199 38.3198C19.9999 38.3198 16.5599 36.3198 14.8799 33.9198L17.6399 31.5198C18.9999 33.2798 21.3199 34.8398 24.0799 34.8398C27.3599 34.8398 29.4399 33.3198 29.4399 30.8398C29.4399 28.2398 27.8399 26.8798 24.7999 25.5598L22.1999 24.4398C17.8799 22.5998 15.9999 19.9598 15.9999 16.3998C15.9999 12.0798 20.0799 9.27979 24.2799 9.27979C27.5999 9.27979 30.3199 10.5998 32.2399 12.9198L29.6799 15.4798C28.1999 13.7198 26.6399 12.7598 24.1599 12.7598C21.7599 12.7598 19.6399 14.1198 19.6399 16.4798C19.6399 18.5598 20.8399 19.9598 23.8399 21.2798L26.4399 22.3998C30.2799 24.0798 33.1199 26.4398 33.1199 30.4398C33.1199 35.0798 29.6799 38.3198 24.1199 38.3198Z" fill="#111" />
                                                    </svg>
                                                </ChatInput.IconContainer>
                                                <ChatInput.IconContainer>
                                                    <svg width="24" height="24" viewBox="0 0 48 48" fill="none" >
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M20 38L26 10H30L24 38H20Z" fill="#111" />
                                                    </svg>
                                                </ChatInput.IconContainer>
                                                <ChatInput.IconContainer>
                                                    <svg width="24" height="24" viewBox="0 0 48 48" fill="none" >
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M24.24 38.3201C17.56 38.3201 12.8 33.9601 12.8 26.9601V9.6001H17.44V27.0801C17.44 31.4801 20.2 33.9201 24.24 33.9201C28.2801 33.9201 31.0001 31.4801 31.0001 27.0801V9.6001H35.6401V26.9601C35.6401 33.9601 30.92 38.3201 24.24 38.3201Z" fill="#111" />
                                                        <rect opacity="0.3" x="8" y="42" width="32" height="4" rx="1" fill="#111" />
                                                    </svg>
                                                </ChatInput.IconContainer>
                                                <ChatInput.IconContainer>
                                                    <svg width="24" height="24" viewBox="0 0 48 48" fill="none" >
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M14.68 38.0001V9.6001H25.36C30 9.6001 33.8 13.4001 33.8 18.0401C33.8 20.0401 33.04 21.6801 31.8 22.9201C34.2 24.2001 35.8 26.5201 35.8 29.5601C35.8 34.2401 32 38.0001 27.2 38.0001H14.68ZM21.0799 32.12H26.5999C28.3199 32.12 29.5599 30.88 29.5599 29.32C29.5599 27.76 28.3199 26.48 26.5999 26.48H21.0799V32.12ZM21.0799 21.0799H24.6399C26.3599 21.0799 27.5999 19.8399 27.5999 18.2799C27.5999 16.7199 26.3599 15.4399 24.6399 15.4399H21.0799V21.0799Z" fill="#111" />
                                                    </svg>
                                                </ChatInput.IconContainer>
                                            </ChatInput.IconFrame>
                                            <Button.Small disabled={!roomID} type='submit' >Send</Button.Small>
                                        </ChatInput.Frame>
                                    </ChatInput.Form>
                                </ChatInput>}
                        </Layout.Col>
                    </Layout.Row>
                </Layout>
            </div>
        </>
    );
};