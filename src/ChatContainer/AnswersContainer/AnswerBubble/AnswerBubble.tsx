import React from 'react';
import styled from 'styled-components';
import BubbleImg from './answer-bubble.png';

interface Props {
    answer?: string;
}

export const AnswerBubble: (props: Props) => JSX.Element | null = ({ answer }) => {
    if (!answer) {
        return <AnswerPlaceholder />;
    }

    return (
        <BubbleContainer>
            <AnswerTextContainer>{answer}</AnswerTextContainer>
        </BubbleContainer>
    );
};

const BubbleContainer = styled.div`
    background-image: url('${BubbleImg}');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: relative;
    flex: 0 1 80%;
`;

const AnswerTextContainer = styled.p`
    position: absolute;
    top: 10%;
    left: 10%;
`;

const AnswerPlaceholder = styled.div`
    flex: 0 1 80%;
    background-size: 100% 100%;
`;
