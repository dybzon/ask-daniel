import { ChatMessage, ChatMessages } from '../ChatMessages';
import React from 'react';
import styled from 'styled-components';
import { AnswerBubble } from './AnswerBubble';
import { ThinkBubble } from './ThinkBubble';

interface Props {
    isThinking: boolean; // Determines whether the oracle is currently thinking. No new questions can be asked while thinking.
    isAsking: boolean; // Determines whether some stupid noob is currently posing a question to the oracle.
    previousAnswers: ChatMessage[];
}

export const AnswersContainer: (props: Props) => JSX.Element = ({ isAsking, isThinking, previousAnswers }) => {
    let currentAnswer: string | undefined = undefined;
    const chatMessages = [...previousAnswers];
    if (!isAsking && !isThinking) {
        const latestMessage = chatMessages.pop();
        if (latestMessage) {
            currentAnswer = latestMessage.message;
        }
    }

    return (
        <>
            <ResponseContainer>{isThinking ? <ThinkBubble /> : <AnswerBubble answer={currentAnswer} />}</ResponseContainer>
            <ChatContainer>
                <ChatMessages messages={chatMessages} />
            </ChatContainer>
        </>
    );
};

const ChatContainer = styled.div`
    grid-column-start: 2;
    grid-row-start: 2;
`;

const ResponseContainer = styled.div`
    grid-column-start: 2;
    grid-row-start: 1;
`;
