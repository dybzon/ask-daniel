import React from 'react';
import styled from 'styled-components';
import ThinkBubbleImg from './think-bubble-full.png';

interface Props {

}

export const ThinkBubble: (props: Props) => JSX.Element = () => {
  return <BubbleContainer>
    <TextContainer>
      hmm ...
    </TextContainer>
  </BubbleContainer>;
}



const BubbleContainer = styled.div`
  background-image: url("${ThinkBubbleImg}");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 300px;
  min-height: 300px;
  position: relative;
`;

const TextContainer = styled.p`
  position: absolute;
  top: 10%;
  left: 10%;
`;