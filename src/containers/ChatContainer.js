import React from 'react';
// import styled from 'styled-components';
import { Message } from '../components';
import { Layout } from '../components/layout/index';


export default function ChatContainer() {
    return (
        <>
            <div style={{ flex: "1" }} >
                <Layout maxFreeze >
                    <Layout.Row>
                        <Layout.Col size="1" >
                            <Message />
                        </Layout.Col>
                    </Layout.Row>
                </Layout>
            </div>
            <div style={{ background: '#212121', padding: '5.6rem', margin: '2.3rem', borderRadius: "8px" }} >
                Input
                </div>
        </>
    );
};