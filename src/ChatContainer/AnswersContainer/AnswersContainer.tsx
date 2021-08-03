import { ChatMessage, ChatMessages } from '../ChatMessages';
import React from 'react';
import styled from 'styled-components';
import { AnswerBubble } from './AnswerBubble';
import { ThinkBubble } from './ThinkBubble';
import DanielImg from './daniel1.png';

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
            <ResponseContainer>
                {isThinking ? <ThinkBubble /> : <AnswerBubble answer={currentAnswer} />}
                <ImageContainer>
                    <StyledImage />
                </ImageContainer>
            </ResponseContainer>
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
    display: flex;
    flex-direction: row;
`;

const StyledImage = styled.div`
    background-image: url('${DanielImg}');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 95%;
    border-radius: 50%;
    border: 4px solid #404040;
`;

const ImageContainer = styled.div`
    flex: 0 1 20%;
`;
