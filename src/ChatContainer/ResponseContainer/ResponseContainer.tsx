import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ResponseBubble } from './ResponseBubble';
import { ThinkBubble } from './ThinkBubble';
import DanielAvatar from './daniel-avatar.png';
import DanielNodding from './daniel-thinking.gif';
import { Message } from '@/utils';
import { theme } from '@/theme';

interface Props {
    isThinking: boolean; // Determines whether the oracle is currently thinking. No new questions can be asked while thinking.
    isAsking: boolean; // Determines whether some stupid noob is currently posing a question to the oracle.
    lastActionTime: Date; // Indicates the time of the last user action.
    lastResponse?: Message;
}

const noddingTimeSeconds = 3;
const noddingTimeMs = noddingTimeSeconds * 1000;

export const ResponseContainer: (props: Props) => JSX.Element = ({ isThinking, lastResponse, lastActionTime, isAsking }) => {
    const [isNodding, setIsNodding] = useState(false);
    useEffect(() => {
        const now = new Date();
        const shouldNod = isAsking && now.getTime() - lastActionTime.getTime() < noddingTimeMs;
        if (shouldNod !== isNodding) {
            setIsNodding(shouldNod);
        }

        if (!shouldNod) {
            return;
        }

        const noddingTimer = setTimeout(() => setIsNodding(false), noddingTimeMs);
        return () => clearTimeout(noddingTimer);
    }, [lastActionTime, isNodding, setIsNodding, isAsking]);
    return (
        <LayoutContainer>
            {isThinking ? <ThinkBubble /> : <ResponseBubble response={lastResponse} />}
            <ImageContainer>
                <StyledImage shouldNod={isNodding} />
            </ImageContainer>
        </LayoutContainer>
    );
};

const LayoutContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 8px;
    width: calc(100%-8px); ;
`;

const StyledImage = styled.div<{ shouldNod: boolean }>`
    background-image: url('${(props) => (props.shouldNod ? DanielNodding : DanielAvatar)}');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100%;
    padding-bottom: 100%;
    border-radius: 30%;
    border: 8px solid ${theme.colors.dark.third.default};
`;

const ImageContainer = styled.div`
    flex: 0 1 20%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
