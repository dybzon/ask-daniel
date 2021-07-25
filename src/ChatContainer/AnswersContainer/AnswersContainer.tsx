import { ChatMessage, ChatMessages } from '../ChatMessages';
import React from 'react';
import styled from 'styled-components';
import { AnswerBubble } from './AnswerBubble';
import DanielImg from './daniel1.png';
import { ThinkBubble } from './ThinkBubble';


interface Props {
  isThinking: boolean; // Determines whether the oracle is currently thinking. No new questions can be asked while thinking.
  isAsking: boolean; // Determines whether some stupid noob is currently posing a question to the oracle.
  previousAnswers: ChatMessage[];
}

export const AnswersContainer: (props: Props) => JSX.Element = ({ isAsking, isThinking, previousAnswers }) => {
  let currentAnswer: string | undefined = undefined;
  const chatMessages = [...previousAnswers];
  if(!isAsking && !isThinking) {
    const latestMessage = chatMessages.pop();
    if(latestMessage) {
      currentAnswer = latestMessage.message;
    }
  }

  return <StyledContainer>
    {isThinking ? <ThinkBubble /> : <AnswerBubble answer={currentAnswer} />}
    <ImageContainer><StyledImage /></ImageContainer>
    <ChatMessages messages={chatMessages} />
  </StyledContainer>
}

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const StyledImage = styled.div`
  background-image: url("${DanielImg}");
  background-repeat: no-repeat;
  background-size: contain;
  width: 300px;
  height: 300px;
  border-radius: 150px;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;