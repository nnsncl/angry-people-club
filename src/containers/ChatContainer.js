import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import * as firebase from 'firebase/app';
import "firebase/firestore";
import db from '../services/firebase';

import { selectRoomID, selectRoomName } from '../features/appSlice';
import { selectUser } from '../features/userSlice';

// import { useFirestoreQuery } from '../hooks/use-firestore-query';
import { scrollToBottom } from '../hooks/use-scroll';

import { Message, ChatInput, AppBar, Typography, Button, Avatar } from '../components';
import { Layout } from '../components/layout/index';

export default function ChatContainer() {
    const user = useSelector(selectUser);
    const roomID = useSelector(selectRoomID);
    const roomName = useSelector(selectRoomName);

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
        }
    }, [roomID])

    const handleSendMessage = (e) => {

        if (e.key === 'Enter') {
            db
                .collection('rooms')
                .doc(roomID)
                .collection('messages')
                .add({
                    timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
                    message: input,
                    user: user,
                })
            setInput('')
        }
    }

    useEffect(() => {
        console.log(messages)
    }, [messages])

    scrollToBottom()
    return (
        <>
            <div style={{ color: '#111',height: '100%', maxHeight: '95vh', width: '100%',  background: "#f5f3f4", borderRadius: '2.3rem', overflow: 'scroll'}} >
                <Layout maxFreeze >
                    <Layout.Row>
                        {roomName
                            ? <Layout.Col size="1" >
                                <AppBar>
                                    <AppBar.Frame>
                                        <Avatar Xlarge backgroundURL='https://media.giphy.com/media/Lopx9eUi34rbq/giphy.gif' />
                                        <Typography.BodyLarge><b>{roomName}</b></Typography.BodyLarge>
                                    </AppBar.Frame>
                                    <AppBar.Frame>
                                        <Button.Ghost>
                                            <svg width="24" height="24" viewBox="0 0 48 48" fill="none">
                                                <rect x="11.272" y="33.8994" width="32" height="6" rx="1.5" transform="rotate(-45 11.272 33.8994)" fill="#111" />
                                                <rect opacity="0.6" x="14.1006" y="11.2725" width="32" height="6" rx="1.5" transform="rotate(45 14.1006 11.2725)" fill="#111" />
                                            </svg>
                                        </Button.Ghost>
                                    </AppBar.Frame>
                                </AppBar>
                            </Layout.Col>
                            : null}
                    </Layout.Row>
                    <Layout.Row>
                        <Layout.Col size="1" >
                            <div>
                            {roomID
                                ? messages.map(message => (
                                    <Message
                                        key={uuidv4()}
                                        backgroundURL={message.user.photo}
                                        userName={message.user.displayName}
                                        timeStamp={message.timeStamp}
                                        content={message.message}
                                    />))
                                : <Typography.TitleSm>Select a room</Typography.TitleSm>
                            }
                            </div>
                            
                        </Layout.Col>
                    </Layout.Row>
                </Layout>
                 <div style={{}} >
                {roomID
                    && <ChatInput
                        placeholder={`Send a message to #${roomName}`}
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        disabled={!roomID}
                        onKeyPress={handleSendMessage}
                    />
                }
            </div>
            </div>
           
        </>
    );
};