import { theme } from '@/theme';
import React from 'react';
import styled, { Keyframes, keyframes } from 'styled-components';

export const ThinkBubble = () => {
    return (
        <BubbleContainer>
            <MainBubble>
                <TextContainer>det er satme et godt spørgsmål...</TextContainer>
            </MainBubble>
            <SmallBubble sizePct={8} verticalOffset={5} keyframes={popInAnimation(15)} />
            <SmallBubble sizePct={7} verticalOffset={-30} keyframes={popInAnimation(10)} />
            <SmallBubble sizePct={5} verticalOffset={0} keyframes={popInAnimation(5)} />
        </BubbleContainer>
    );
};

const popInAnimation = (visibleFrom: number) => keyframes`
    0% {
        visibility: hidden;
    }
    ${visibleFrom}% {
        visibility: hidden;
    }
    100% {
        visibility: visible;
    }
`;

const BubbleContainer = styled.div`
    flex: 0 1 80%;
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
`;

const MainBubble = styled.div`
    flex: 0 0 80%;
    height: 90%;
    border-radius: 80px;
    background-color: ${theme.colors.dark.third.default};

    animation: ${popInAnimation(20)} 3s linear infinite;

    position: relative;

    :before,
    :after {
        content: '';
        background-color: ${theme.colors.dark.third.default};
        border-radius: 50%;
        position: absolute;
    }
    :before {
        width: 50px;
        height: 50px;
        top: -25px;
        left: 200px;
        box-shadow: -225px 50px 0 -12px ${theme.colors.dark.third.default}, 80px 5px 0 0px ${theme.colors.dark.third.default};
    }
    :after {
        bottom: -10px;
        right: 26px;
        width: 30px;
        height: 30px;
        box-shadow: 40px -34px 0 0 ${theme.colors.dark.third.default}, -100px 0 0 30px ${theme.colors.dark.third.default},
            -150px 10px 0 6px ${theme.colors.dark.third.default}, -200px -5px 0 10px ${theme.colors.dark.third.default};
    }
`;

const SmallBubble = styled.div<{ sizePct: number; verticalOffset: number; keyframes: Keyframes }>`
    flex: 0 0 ${(props) => props.sizePct}%;

    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    animation: ${(props) => props.keyframes} 3s linear infinite;

    :after {
        content: '';
        position: absolute;
        width: 80%;
        padding-bottom: 100%;
        border-radius: 50%;
        background-color: ${theme.colors.dark.third.default};

        top: ${(props) => props.verticalOffset}px;
    }
`;

const TextContainer = styled.p`
    color: ${theme.colors.dark.white};
`;
