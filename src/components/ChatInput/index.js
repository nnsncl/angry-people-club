import React from 'react'
import { Wrapper, Frame, IconContainer, IconFrame, Input, Form } from './styles/ChatInput';

export default function ChatInput({ children }) {
    return <Wrapper>{children}</Wrapper>
}

ChatInput.Frame = function ChatInputFrame({ children }) {
    return <Frame>{children}</Frame>
}

ChatInput.Form = function ChatInputForm({ children }) {
    return <Form onSubmit={e => e.preventDefault()} >{children}</Form>
}

ChatInput.Input = function ChatInputInput({ placeholder, value, ...restProps }) {
    return <Input placeholder={placeholder} value={value} type='text'{...restProps} />
}

ChatInput.IconFrame = function ChatInputIconFrame({ children }) {
    return <IconFrame>{children}</IconFrame>
}

ChatInput.IconContainer = function ChatInputIconContainer({ children }) {
    return <IconContainer>{children}</IconContainer>
}