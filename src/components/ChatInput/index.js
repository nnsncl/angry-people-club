import React from 'react'
import { Wrapper, Frame, IconContainer, Input, Form } from './styles/ChatInput';
import { Button } from '../../components';

export default function ChatInput() {
    return (
        <Wrapper>
            <Frame>
                <Form>
                    <Input placeholder={`Message`} />
                    <button type="submit" >submit</button>
                </Form>
            </Frame>

            <Frame>
                <IconContainer>
                    <svg width="24" height="24" viewBox="0 0 48 48" fill="none" >
                        <path fillRule="evenodd" clipRule="evenodd" d="M0.360046 37.9998L14.2 9.27979L28.04 37.9998H24.12L20.6 30.5598H7.80005L4.28005 37.9998H0.360046ZM14.2001 17.0396L9.40009 27.1996H19.0001L14.2001 17.0396Z" fill="white" />
                        <path opacity="0.3" fillRule="evenodd" clipRule="evenodd" d="M42.6801 36V38H46.1201V18H42.6801V20C41.0001 18.48 38.7601 17.6802 36.3201 17.6802C30.4401 17.6802 26.1201 22.2002 26.1201 28C26.1201 33.8003 30.4401 38.3203 36.3201 38.3203C38.7601 38.3203 41.0001 37.52 42.6801 36ZM42.6801 31.8403C41.5201 33.7202 39.28 35.0806 36.4 35.0806C32.48 35.0806 29.6801 31.9604 29.6801 28.0005C29.6801 24.0405 32.48 20.9204 36.4 20.9204C39.28 20.9204 41.5201 22.2803 42.6801 24.1606V31.8403Z" fill="white" />
                    </svg>
                </IconContainer>

                <IconContainer>
                    <svg width="24" height="24" viewBox="0 0 48 48" fill="none" >
                        <rect opacity="0.3" x="8" y="22" width="34" height="4" rx="1" fill="white" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M24.1199 38.3198C19.9999 38.3198 16.5599 36.3198 14.8799 33.9198L17.6399 31.5198C18.9999 33.2798 21.3199 34.8398 24.0799 34.8398C27.3599 34.8398 29.4399 33.3198 29.4399 30.8398C29.4399 28.2398 27.8399 26.8798 24.7999 25.5598L22.1999 24.4398C17.8799 22.5998 15.9999 19.9598 15.9999 16.3998C15.9999 12.0798 20.0799 9.27979 24.2799 9.27979C27.5999 9.27979 30.3199 10.5998 32.2399 12.9198L29.6799 15.4798C28.1999 13.7198 26.6399 12.7598 24.1599 12.7598C21.7599 12.7598 19.6399 14.1198 19.6399 16.4798C19.6399 18.5598 20.8399 19.9598 23.8399 21.2798L26.4399 22.3998C30.2799 24.0798 33.1199 26.4398 33.1199 30.4398C33.1199 35.0798 29.6799 38.3198 24.1199 38.3198Z" fill="white" />
                    </svg>
                </IconContainer>
                <IconContainer>
                    <svg width="24" height="24" viewBox="0 0 48 48" fill="none" >
                        <path fillRule="evenodd" clipRule="evenodd" d="M20 38L26 10H30L24 38H20Z" fill="white" />
                    </svg>
                </IconContainer>
                <IconContainer>
                    <svg width="24" height="24" viewBox="0 0 48 48" fill="none" >
                        <path fillRule="evenodd" clipRule="evenodd" d="M24.24 38.3201C17.56 38.3201 12.8 33.9601 12.8 26.9601V9.6001H17.44V27.0801C17.44 31.4801 20.2 33.9201 24.24 33.9201C28.2801 33.9201 31.0001 31.4801 31.0001 27.0801V9.6001H35.6401V26.9601C35.6401 33.9601 30.92 38.3201 24.24 38.3201Z" fill="white" />
                        <rect opacity="0.3" x="8" y="42" width="32" height="4" rx="1" fill="white" />
                    </svg>
                </IconContainer>
                <IconContainer>
                    <svg width="24" height="24" viewBox="0 0 48 48" fill="none" >
                        <path fillRule="evenodd" clipRule="evenodd" d="M14.68 38.0001V9.6001H25.36C30 9.6001 33.8 13.4001 33.8 18.0401C33.8 20.0401 33.04 21.6801 31.8 22.9201C34.2 24.2001 35.8 26.5201 35.8 29.5601C35.8 34.2401 32 38.0001 27.2 38.0001H14.68ZM21.0799 32.12H26.5999C28.3199 32.12 29.5599 30.88 29.5599 29.32C29.5599 27.76 28.3199 26.48 26.5999 26.48H21.0799V32.12ZM21.0799 21.0799H24.6399C26.3599 21.0799 27.5999 19.8399 27.5999 18.2799C27.5999 16.7199 26.3599 15.4399 24.6399 15.4399H21.0799V21.0799Z" fill="white" />
                    </svg>
                </IconContainer>
                <IconContainer>
                    <svg width="24" height="24" viewBox="0 0 48 48" fill="none" >
                        <path fillRule="evenodd" clipRule="evenodd" d="M21.5081 39.7282V25.0802C16.3001 25.0802 12.0581 20.8382 12.0581 15.6302C12.0581 10.4222 16.3001 6.18018 21.5081 6.18018H32.6381V39.7282H29.3621V9.45618H24.8261V39.7282H21.5081Z" fill="white" />
                    </svg>
                </IconContainer>
            </Frame>
        </Wrapper>
    )
}