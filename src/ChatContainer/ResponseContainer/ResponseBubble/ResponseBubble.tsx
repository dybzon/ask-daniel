import { isComplexMessage, Message } from '../../responseService';
import React from 'react';
import styled from 'styled-components';
import { theme } from '../../../theme';

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
        <BubbleContainer>
            <Bubble>
                <BubblePointer />
                <TextContainer>{messageText}</TextContainer>
            </Bubble>
        </BubbleContainer>
    );
};

const BubbleContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const Bubble = styled.div`
    background-color: ${theme.colors.dark.third.default};
    width: 90%;
    height: 90%;
    border-radius: 50px;
    position: relative;
`;

const BubblePointer = styled.div`
    width: 80px;
    height: 20px;
    position: relative;
    top: 40%;
    left: 97%;
    overflow: hidden;
    transform: rotate(0.05turn);

    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: ${theme.colors.dark.third.default};
        transform-origin: 0 0;
        transform: rotate(0.06turn);
    }
`;

const TextContainer = styled.p`
    position: relative;
    top: 5%;
    left: 5%;
    width: 90%;
    height: 90%;
    margin: 0;
    color: ${theme.colors.dark.white};
`;

const Placeholder = styled.div`
    flex: 0 1 80%;
    background-size: 100% 100%;
`;

const Text = styled.span``;

const Link = styled.a``;
