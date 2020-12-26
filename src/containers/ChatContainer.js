import React from 'react';
import { useSelector } from 'react-redux';
// import { useAuth } from '../hooks/use-auth';

import { Message, ChatInput } from '../components';
import { Layout } from '../components/layout/index';
import { selectUser } from '../features/userSlice';


export default function ChatContainer() {
    const user = useSelector(selectUser)
    return (
        <>
            <div style={{ flex: "1" }} >
                <Layout maxFreeze >
                    <Layout.Row>
                        <Layout.Col size="1" >
                            <Message
                                backgroundURL={user.photo}
                                userName={user.displayName}
                                timeStamp='12/12/2012'
                                content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                            />
                            <Message
                                backgroundURL={user.photo}
                                userName={user.displayName}
                                timeStamp='12/12/2012'
                                content='Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                            />
                            <Message
                                backgroundURL={user.photo}
                                userName={user.displayName}
                                timeStamp='12/12/2012'
                                content='Fok Niki dolor sit amet,'
                            />
                        </Layout.Col>
                    </Layout.Row>
                </Layout>
            </div>
            <ChatInput />
        </>
    );
};