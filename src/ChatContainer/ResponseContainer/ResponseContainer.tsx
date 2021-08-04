import React from 'react';
import styled from 'styled-components';
import { ResponseBubble } from './ResponseBubble';
import { ThinkBubble } from './ThinkBubble';
import DanielImg from './daniel1.png';

interface Props {
    isThinking: boolean; // Determines whether the oracle is currently thinking. No new questions can be asked while thinking.
    isAsking: boolean; // Determines whether some stupid noob is currently posing a question to the oracle.
    lastResponse?: string;
}

export const ResponseContainer: (props: Props) => JSX.Element = ({ isThinking, lastResponse }) => {
    return (
        <LayoutContainer>
            {isThinking ? <ThinkBubble /> : <ResponseBubble response={lastResponse} />}
            <ImageContainer>
                <StyledImage />
            </ImageContainer>
        </LayoutContainer>
    );
};

const LayoutContainer = styled.div`
    grid-column-start: 2;
    grid-row-start: 1;
    display: flex;
    flex-direction: row;
`;

const StyledImage = styled.div`
    background-image: url('${DanielImg}');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 95%;
    border-radius: 50%;
    border: 4px solid #404040;
`;

const ImageContainer = styled.div`
    flex: 0 1 20%;
`;
