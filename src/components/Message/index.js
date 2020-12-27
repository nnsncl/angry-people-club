import React from 'react';
import { Wrapper, Frame, Heading, Content } from './styles/Message';
import { Avatar, Typography } from '../../components';

export default function Message({ backgroundURL, userName, timeStamp, content }) {

    return (
        <Wrapper>
            <Frame>
                <Avatar Xlarge backgroundURL={backgroundURL} />
            </Frame>
            <Frame>
                <Heading>
                    <Typography.Body><b>{userName}</b>&nbsp;•&nbsp;</Typography.Body>
                    <Typography.BodySmall>
                        {new Date(timeStamp?.toDate()).toUTCString()}
                    </Typography.BodySmall>
                </Heading>
                <Content>
                    <Typography.Body>{content}</Typography.Body>
                </Content>
            </Frame>
        </Wrapper>
    );
};