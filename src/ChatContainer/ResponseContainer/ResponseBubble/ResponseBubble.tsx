import React from 'react';
import styled from 'styled-components';
import BubbleImg from './answer-bubble.png';

interface Props {
    response?: string;
}

export const ResponseBubble: (props: Props) => JSX.Element | null = ({ response }) => {
    if (!response) {
        return <Placeholder />;
    }

    return (
        <Bubble>
            <TextContainer>{response}</TextContainer>
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

const TextContainer = styled.p`
    max-width: 80%;
    max-height: 80%;
    margin: 0;
`;

const Placeholder = styled.div`
    flex: 0 1 80%;
    background-size: 100% 100%;
`;
