import React from 'react';
import { Wrapper, Frame, Content } from './styles/Message';
import { Avatar, Typography } from '../../components';

export default function Message({ backgroundURL, userName, timeStamp, content }) {

    return (
        <Wrapper>
            <Avatar large backgroundURL={backgroundURL} />
            <Frame>
                <Content>
                    <Frame>
                    <Typography.BodySmall><b>{userName}</b></Typography.BodySmall>
                    </Frame>

                    <Typography.BodySmall>{content}</Typography.BodySmall>
                </Content>
                <Typography.BodySmall>
                    {new Date(timeStamp?.toDate()).toUTCString().substring(0, 17)}
                </Typography.BodySmall>
            </Frame>
        </Wrapper>
    );
};
