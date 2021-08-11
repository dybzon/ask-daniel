import { isComplexMessage, Message } from '../../responseService';
import React from 'react';
import styled from 'styled-components';
import { theme } from '../../../theme';
import { ExternalLink } from '../../../components';

interface Props {
    response?: Message;
}

export const ResponseBubble: (props: Props) => JSX.Element | null = ({ response }) => {
    let messageText: JSX.Element;

    if (response && isComplexMessage(response)) {
        messageText = (
            <>
                {response.map((mp, i) =>
                    mp.type === 'Link' ? (
                        <ExternalLink href={mp.src} key={i} target="_blank">
                            {mp.value}
                        </ExternalLink>
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
                <TextContainer>{messageText}</TextContainer>
                <BubblePointer />
            </Bubble>
        </BubbleContainer>
    );
};

const BubbleContainer = styled.div`
    flex: 0 1 80%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const Bubble = styled.div`
    background-color: ${theme.colors.dark.third.default};
    width: 90%;
    height: 90%;
    border-radius: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;
`;

const BubblePointer = styled.div`
    width: 10%;
    padding-bottom: 7.09%; // = width / 1.41 (height of the resulting element)
    position: absolute;
    top: 50;
    right: 0;
    transform: translateX(99%);
    overflow: hidden;

    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: ${theme.colors.dark.third.default};
        transform-origin: top left;
        transform: rotate(45deg);
    }
`;

const TextContainer = styled.p`
    width: 90%;
    height: 90%;
    margin: 0;
    color: ${theme.colors.dark.white};
`;

const Text = styled.span``;
