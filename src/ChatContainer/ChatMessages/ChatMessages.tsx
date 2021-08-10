import { QuestionWithResponse } from '../ChatContainer';
import React from 'react';
import styled from 'styled-components';
import { isComplexMessage, Message } from '../responseService';
import { theme } from '../../theme';

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
    const { time, response, question } = messages;
    return (
        <>
            <Question time={time} question={question} />
            <Response time={time} response={response} />
        </>
    );
};

interface QuestionProps {
    question: string;
    time: Date;
}

const Question: (props: QuestionProps) => JSX.Element = ({ question, time }) => {
    return (
        <MessageContainer justifyContent="flex-start">
            <MessageWrapper backgroundColor={theme.colors.dark.secondary.default}>
                <MessageTime>
                    {getHours(time)}.{getMinutes(time)}
                </MessageTime>
                <MessageContent>{question}</MessageContent>
            </MessageWrapper>
        </MessageContainer>
    );
};

interface ResponseProps {
    response: Message;
    time: Date;
}

const Response: (props: ResponseProps) => JSX.Element = ({ response, time }) => {
    let messageText: JSX.Element;

    if (isComplexMessage(response)) {
        messageText = (
            <>
                {response.map((mp, i) =>
                    mp.type === 'Link' ? (
                        <Link href={mp.src} key={i} target="_blank">
                            {mp.value}
                        </Link>
                    ) : (
                        <Text key={i}>{mp.value}</Text>
                    )
                )}
            </>
        );
    } else {
        messageText = <Text>{response}</Text>;
    }

    return (
        <MessageContainer justifyContent="flex-end">
            <MessageWrapper backgroundColor={theme.colors.dark.third.default}>
                <MessageTime>
                    {getHours(time)}.{getMinutes(time)}
                </MessageTime>
                <MessageContent>{messageText}</MessageContent>
            </MessageWrapper>
        </MessageContainer>
    );
};

const MessagesContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
`;

const MessageContainer = styled.div<{ justifyContent: string }>`
    display: flex;
    flex-direction: row;
    justify-content: ${(props) => props.justifyContent};
`;

const MessageWrapper = styled.div<{ backgroundColor: string }>`
    padding: 4px 12px;
    margin: 4px;
    border-radius: 8px;
    max-width: 80%;
    background-color: ${(props) => props.backgroundColor};
    color: ${theme.colors.dark.white};
    display: flex;
`;

const MessageTime = styled.div`
    width: 50px;
    margin-right: 12px;
`;

const MessageContent = styled.div``;

const Text = styled.span``;

const Link = styled.a`
    color: ${theme.colors.dark.white};
    text-decoration: none;
    position: relative;
    z-index: 0;

    :hover {
        :after {
            transform: rotate(180deg);
            transition: 0.3s all;
        }
    }

    :after {
        content: '';
        width: 120%;
        height: 50%;
        position: absolute;
        top: 25%;
        left: -10%;
        background-color: ${theme.colors.dark.secondary.default};
        transition: 0.3s all;
        transform: rotate(6deg);
        z-index: -1;
    }
`;

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
