import { ChatMessages } from '../ChatMessages';
import React from 'react';
import styled from 'styled-components';
import BubbleImg from './question-bubble.png';
import { ChatMessage } from '../ChatMessages';

interface Props {
  onValueChange: (value: string) => void;
  onSubmitQuestion: (question: string) => void;
  value: string;
  isThinking: boolean; // Determines whether the oracle is currently thinking. No new questions can be asked while thinking.
  previousQuestions: ChatMessage[];
}

export const QuestionsContainer: (props: Props) => JSX.Element = ({onValueChange, onSubmitQuestion, value, isThinking, previousQuestions}) => {
  const chatMessages = [...previousQuestions];
  let questionPlaceholder: string = '';
  if(isThinking && value) {
    questionPlaceholder = value;
  }
  else if (!value && previousQuestions.length > 0) {
    const latestMessage = chatMessages.pop();
    if(latestMessage) {
      questionPlaceholder = latestMessage.message;
    }
  }

  const handleValueChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if(isThinking) return;
    onValueChange(e.target.value);
  } 
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if(e.key === 'Enter' && e.shiftKey === false) {
      e.preventDefault();
      onSubmitQuestion(value);
    }
  }
  
  return (
    <>
      <BubbleContainer>
      <QuestionTextArea onChange={handleValueChange} autoFocus={true} onKeyDown={handleKeyDown} value={value} placeholder={questionPlaceholder} />
      </BubbleContainer>
      <ChatMessages messages={chatMessages} />
    </>);
}

const BubbleContainer = styled.div`
  background-image: url("${BubbleImg}");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 300px;
`;

const QuestionTextArea = styled.textarea`
  border: none;
  outline: none;
  background-color: transparent;
  resize: none;
  position: relative;
  top: 15%;
  left: 23%;
  width: 70%;
  height: 85%;
`;
