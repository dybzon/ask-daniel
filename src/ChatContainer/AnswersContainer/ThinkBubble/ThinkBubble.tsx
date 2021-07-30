import React from 'react';
import styled from 'styled-components';
import ThinkBubbleImg from './think-bubble-full.png';

export const ThinkBubble = () => {
    return (
        <BubbleContainer>
            <TextContainer>hmm ...</TextContainer>
        </BubbleContainer>
    );
};

const BubbleContainer = styled.div`
    background-image: url('${ThinkBubbleImg}');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: relative;
`;

const TextContainer = styled.p`
    position: absolute;
    top: 10%;
    left: 10%;
`;
