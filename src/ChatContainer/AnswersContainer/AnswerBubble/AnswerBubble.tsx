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
        <Bubble>
            <AnswerTextContainer>{answer}</AnswerTextContainer>
        </Bubble>
    );
};

const Bubble = styled.div`
    background-image: url('${BubbleImg}');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    flex: 0 1 80%;

    display: flex;
    align-items: center;
    justify-content: center;
`;

const AnswerTextContainer = styled.p`
    max-width: 80%;
    max-height: 80%;
    margin: 0;
`;

const AnswerPlaceholder = styled.div`
    flex: 0 1 80%;
    background-size: 100% 100%;
`;
