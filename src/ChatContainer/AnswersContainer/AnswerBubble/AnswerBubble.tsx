import React from 'react';
import styled from 'styled-components';
import BubbleImg from './answer-bubble.png';

interface Props {
  answer?: string;
}

export const AnswerBubble: (props: Props) => JSX.Element | null = ({answer}) => {
  if(!answer) {
    return <AnswerPlaceholder />;
  }

  return <BubbleContainer>
    <AnswerTextContainer>
      {answer}
    </AnswerTextContainer>
  </BubbleContainer>;
}



const BubbleContainer = styled.div`
  background-image: url("${BubbleImg}");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 300px;
  min-height: 300px;
  position: relative;
`;

const AnswerTextContainer = styled.p`
  position: absolute;
  top: 10%;
  left: 10%;
`;

const AnswerPlaceholder = styled.div`
  background-size: 100% 100%;
  width: 100%;
  min-height: 300px;
`;