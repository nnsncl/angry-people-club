import React from 'react';

import { useAuth } from '../hooks/use-auth';

import { Message, ChatInput } from '../components';
import { Layout } from '../components/layout/index';


export default function ChatContainer() {
    const auth = useAuth();
    return (
        <>
            <div style={{ flex: "1" }} >
                <Layout maxFreeze >
                    <Layout.Row>
                        <Layout.Col size="1" >
                            <Message
                                backgroundURL={auth.user.photoURL}
                                userName={auth.user.displayName}
                                timeStamp='12/12/2012'
                                content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                            />
                            <Message
                                backgroundURL={auth.user.photoURL}
                                userName={auth.user.displayName}
                                timeStamp='12/12/2012'
                                content='Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                            />
                            <Message
                                backgroundURL={auth.user.photoURL}
                                userName={auth.user.displayName}
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