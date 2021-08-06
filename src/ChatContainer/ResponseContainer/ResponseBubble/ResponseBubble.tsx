import { isComplexMessage, Message } from '../../responseService';
import React from 'react';
import styled from 'styled-components';
import BubbleImg from './answer-bubble.png';

interface Props {
    response?: Message;
}

export const ResponseBubble: (props: Props) => JSX.Element | null = ({ response }) => {
    if (!response) {
        return <Placeholder />;
    }

    let messageText: JSX.Element;

    if (isComplexMessage(response)) {
        messageText = (
            <>
                {response.map((mp, i) =>
                    mp.type === 'Link' ? (
                        <Link href={mp.src} key={i} target="_blank">
                            {mp.value}
                        </Link>
                    ) : (
                        <Text key={i}>{mp.value}</Text>
                    )
                )}
            </>
        );
    } else {
        messageText = <Text>{response}</Text>;
    }

    return (
        <Bubble>
            <TextContainer>{messageText}</TextContainer>
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

const Text = styled.span``;

const Link = styled.a``;
