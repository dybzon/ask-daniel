import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { theme } from '@/theme';
import { useSuggestedQuestions } from '@/utils';

interface Props {
    onSuggestionSelected: (question: string) => void;
    currentQuestion: string;
    isThinking: boolean; // Determines whether the oracle is currently thinking. No new questions can be asked while thinking.
}

export const QuestionSuggestions = ({ onSuggestionSelected, currentQuestion, isThinking }: Props): JSX.Element | null => {
    const { getMatches } = useSuggestedQuestions();
    if (isThinking || !currentQuestion) return null;

    const matches = getMatches(currentQuestion);
    if (matches.length === 0) return null;

    return (
        <SuggestionsWrapper>
            <SuggestionsContainer>
                {matches.map((m) => (
                    <Suggestion suggestion={m.value} key={m.id} askedByMe={m.askedByMe} onSuggestionSelected={onSuggestionSelected} />
                ))}
            </SuggestionsContainer>
        </SuggestionsWrapper>
    );
};

const SuggestionsWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(100%);
`;

const SuggestionsContainer = styled.div`
    max-width: 100%;
    max-height: 100%;
    background-color: ${theme.colors.dark.black};

    overflow-y: scroll;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* Internet Explorer 10+ */
    ::-webkit-scrollbar {
        /* WebKit */
        width: 0;
        height: 0;
    }
`;

interface SuggestionProps {
    suggestion: string;
    askedByMe?: boolean;
    onSuggestionSelected: (question: string) => void;
}

const Suggestion = ({ suggestion, onSuggestionSelected, askedByMe }: SuggestionProps): JSX.Element => {
    const [focused, setFocused] = useState(false);
    const onFocus = () => setFocused(true);
    const onBlur = () => setFocused(false);

    const handleEnter = focused
        ? (e: React.KeyboardEvent<HTMLDivElement>) => {
              if (e.key === 'Enter') {
                  e.preventDefault();
                  onSuggestionSelected(suggestion);
              }
          }
        : undefined;

    return (
        <SuggestionContainer
            tabIndex={0}
            onClick={() => onSuggestionSelected(suggestion)}
            onFocus={onFocus}
            onBlur={onBlur}
            onKeyDown={handleEnter}
        >
            {suggestion}
            {askedByMe ? ' (*asked by you)' : ''}
        </SuggestionContainer>
    );
};

const SuggestionContainer = styled.div`
    padding: 4px 12px;
    margin: 4px;
    border-radius: 8px;
    max-width: 100%;
    background-color: ${theme.colors.dark.secondary.default};
    color: ${theme.colors.dark.white};
    display: flex;

    :hover,
    :active,
    :focus {
        background-color: ${theme.colors.dark.secondary.light};
        cursor: pointer;
    }
`;
