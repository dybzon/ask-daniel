import React from 'react';
import styled from 'styled-components';
import { theme } from '@/theme';
import { QuestionSuggestions } from './QuestionSuggestions';

interface Props {
    onValueChange: (value: string) => void;
    onSubmitQuestion: (question: string, skipSave?: boolean) => void;
    value: string;
    isThinking: boolean; // Determines whether the oracle is currently thinking. No new questions can be asked while thinking.
    lastQuestion?: string;
}

export const QuestionsContainer: (props: Props) => JSX.Element = ({ onValueChange, onSubmitQuestion, value, isThinking, lastQuestion }) => {
    const handleValueChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (isThinking) return;
        onValueChange(e.target.value);
    };
    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter' && e.shiftKey === false) {
            e.preventDefault();
            onSubmitQuestion(value);
        }
    };
    const handleSuggestionSelected = (question: string) => {
        onValueChange(question);
        onSubmitQuestion(question, true);
    };

    return (
        <BubbleContainer>
            <Bubble>
                <BubblePointer />
                <QuestionTextArea
                    onChange={handleValueChange}
                    autoFocus={true}
                    onKeyDown={handleKeyDown}
                    value={value}
                    placeholder={lastQuestion}
                    aria-label="Textarea for question input"
                />
                <QuestionSuggestions currentQuestion={value} isThinking={isThinking} onSuggestionSelected={handleSuggestionSelected} />
            </Bubble>
        </BubbleContainer>
    );
};

const BubbleContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-right: 8px;
    width: calc(100%-8px); ;
`;

const Bubble = styled.div`
    background-color: ${theme.colors.dark.secondary.default};
    width: 90%;
    height: 90%;
    border-radius: 50px;
    position: relative;

    @media (max-width: ${theme.breakpoints.md}px) {
        border-radius: 30px;
    }
    @media (max-width: ${theme.breakpoints.sm}px) {
        border-radius: 20px;
    }
`;

const BubblePointer = styled.div`
    width: 10%;
    padding-bottom: 7.09%; // = width / 1.41 (height of the resulting element)
    position: relative;
    top: 40%;
    left: 0;
    transform: translateX(-100%);
    overflow: hidden;

    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: ${theme.colors.dark.secondary.default};
        transform-origin: top right;
        transform: rotate(-45deg);
    }
`;

const QuestionTextArea = styled.textarea`
    border: none;
    outline: none;
    background-color: transparent;
    resize: none;
    position: absolute;
    top: 5%;
    left: 5%;
    width: 90%;
    height: 90%;
    color: ${theme.colors.dark.white};
    ::placeholder {
        color: ${theme.colors.dark.third.light};
    }
`;
