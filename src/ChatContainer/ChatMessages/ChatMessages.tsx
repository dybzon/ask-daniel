import { QuestionWithResponse } from '../ChatContainer';
import React from 'react';
import styled from 'styled-components';

export interface ChatMessage {
    message: string;
    time: Date;
}

interface Props {
    messages: QuestionWithResponse[];
}

export const ChatMessages: (props: Props) => JSX.Element = ({ messages }) => {
    return (
        <MessagesContainer>
            {messages.map((m) => (
                <ChatMessagePair key={m.time.toString()} messages={m} />
            ))}
        </MessagesContainer>
    );
};

const ChatMessagePair = ({ messages }: { messages: QuestionWithResponse }) => {
    return (
        <>
            <QuestionContainer>
                <MessageWrapper>
                    <MessageTime>
                        {getHours(messages.time)}.{getMinutes(messages.time)}
                    </MessageTime>
                    <Message>{messages.question}</Message>
                </MessageWrapper>
            </QuestionContainer>
            <ResponseContainer>
                <MessageWrapper>
                    <MessageTime>
                        {getHours(messages.time)}.{getMinutes(messages.time)}
                    </MessageTime>
                    <Message>{messages.response}</Message>
                </MessageWrapper>
            </ResponseContainer>
        </>
    );
};

const MessagesContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
`;

const QuestionContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`;

const ResponseContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`;

const MessageWrapper = styled.div`
    padding: 4px 12px;
    margin: 4px;
    border-radius: 8px;
    max-width: 80%;
    background-color: #404040;
    color: white;
    display: flex;
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
