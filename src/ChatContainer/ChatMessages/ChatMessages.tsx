import React from 'react';
import styled from 'styled-components';

export interface ChatMessage {
    message: string;
    time: Date;
}

interface Props {
    messages: ChatMessage[];
}

export const ChatMessages: (props: Props) => JSX.Element = ({ messages }) => {
    return (
        <MessagesContainer>
            {messages.map((m) => (
                <MessageContainer key={m.time + m.message}>
                    <MessageTime>
                        {getHours(m.time)}.{getMinutes(m.time)}
                    </MessageTime>
                    <Message>{m.message}</Message>
                </MessageContainer>
            ))}
        </MessagesContainer>
    );
};

const MessagesContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
`;

const MessageContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    padding: 4px;
    margin: 4px;
    border: 4px solid #404040;
    border-radius: 8px;
`;

const MessageTime = styled.div`
    width: 50px;
    margin-right: 12px;
`;

const Message = styled.div``;

function getHours(date: Date): string {
    const hours = date.getHours();
    if (hours < 10) {
        return `0${hours}`;
    }

    return hours.toString();
}

function getMinutes(date: Date): string {
    const minutes = date.getMinutes();
    if (minutes < 10) {
        return `0${minutes}`;
    }

    return minutes.toString();
}
