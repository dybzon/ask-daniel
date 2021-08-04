import React from 'react';
import styled, { keyframes } from 'styled-components';
import thinkBubble1 from './think-bubble-1dot.png';
import thinkBubble2 from './think-bubble-2dots.png';
import thinkBubble3 from './think-bubble-3dots.png';
import thinkBubble4 from './think-bubble-full.png';

export const ThinkBubble = () => {
    return (
        <BubbleContainer>
            <TextContainer>hmm ...</TextContainer>
        </BubbleContainer>
    );
};

const thinkBubbleAnimation = keyframes`
  0% {background-image: url(${thinkBubble1});}
  25% {background-image: url(${thinkBubble2});}
  50% {background-image: url(${thinkBubble3});}
  75% {background-image: url(${thinkBubble4});}
`;

const BubbleContainer = styled.div`
    flex: 0 1 80%;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    animation: ${thinkBubbleAnimation} 1.2s linear infinite;
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
`;

const TextContainer = styled.p``;
