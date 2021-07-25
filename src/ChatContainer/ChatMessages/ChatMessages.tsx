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
  return <MessagesContainer>
    {messages.map(m => (<MessageContainer key={m.time+m.message}>
    <MessageTime>{m.time.getHours()}.{m.time.getMinutes()}:{m.time.getSeconds()}</MessageTime>
    <Message>{m.message}</Message>
  </MessageContainer>))}
  </MessagesContainer>
}

const MessagesContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

const MessageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: start;
  
`;

const MessageTime = styled.div`
  width: 50px;
  flex: 0 0 1;
  margin-right: 12px;
`;

const Message = styled.div`
  flex: 1 1 1;
`;