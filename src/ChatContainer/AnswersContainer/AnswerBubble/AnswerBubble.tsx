import React from 'react';
import styled from 'styled-components';
import BubbleImg from './answer-bubble.png';
import DanielImg from './daniel1.png';

interface Props {
    answer?: string;
}

export const AnswerBubble: (props: Props) => JSX.Element | null = ({ answer }) => {
    if (!answer) {
        return <AnswerPlaceholder />;
    }

    return (
        <BubbleContainer>
            <ImageContainer>
                <StyledImage />
            </ImageContainer>
            <AnswerTextContainer>{answer}</AnswerTextContainer>
        </BubbleContainer>
    );
};

const BubbleContainer = styled.div`
    background-image: url('${BubbleImg}');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: relative;
`;

const StyledImage = styled.div`
    background-image: url('${DanielImg}');
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
