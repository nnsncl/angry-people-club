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

import { Message, ChatInput } from '../components';
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
            <div style={{ flex: "2", overflow: 'scroll', maxHeight: '75.2vh' }} >
                <Layout maxFreeze >
                    <Layout.Row>
                        <Layout.Col size="1" >
                            {roomID
                                ? messages.map(message => (
                                    <Message
                                        key={uuidv4()}
                                        backgroundURL={message.user.photo}
                                        userName={message.user.displayName}
                                        timeStamp={message.timeStamp}
                                        content={message.message}
                                    />))
                                : <p></p>
                            }
                        </Layout.Col>
                    </Layout.Row>
                </Layout>
            </div>
            <div style={{ }} >
            { roomID
                && <ChatInput
                    placeholder={`Send a message to #${roomName}`}
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    disabled={!roomID}
                    onKeyPress={handleSendMessage}
                />
            }
            </div>


        </>
    );
};