import { ChatMessages } from './ChatMessages';
import React, { useState } from 'react';
import styled from 'styled-components';
import { ResponseContainer } from './ResponseContainer';
import { QuestionsContainer } from './QuestionsContainer';
import { useIdleInfo, Message } from '@/utils';
import { theme } from '@/theme';
import { useResponseFunctions } from '@/utils/responseHooks';
import { addQuestion } from '@/utils/questionHooks';

export type QuestionWithResponse = {
    question: string;
    response: Message;
    time: Date;
};

export const ChatContainer = () => {
    const [question, setQuestion] = useState<string>('');
    const [isThinking, setIsThinking] = useState<boolean>(false);
    const [questionResponsePairs, setQuestionResponsePairs] = useState<QuestionWithResponse[]>([]);
    const { getResponse } = useResponseFunctions();
    const handleSubmitQuestion = (submittedQuestion: string, skipSave?: boolean) => {
        setIsThinking(true);
        if (!skipSave) addQuestion(submittedQuestion);
        setTimeout(() => onThinkingComplete(submittedQuestion), 2500);
    };

    const [idleInfo, setIdleInfo] = useIdleInfo(setQuestion, handleSubmitQuestion);
    const { lastActionTime } = idleInfo;

    const handleInputChange = (input: string) => {
        setIdleInfo((s) => ({ ...s, isIdle: false, lastActionTime: new Date() }));
        setQuestion(input);
    };

    const onThinkingComplete = (submittedQuestion: string) => {
        const response = getResponse(submittedQuestion);
        setQuestionResponsePairs([{ question: submittedQuestion, response: response, time: new Date() }, ...questionResponsePairs]);
        setQuestion('');
        setIsThinking(false);
    };

    let lastMessagePair: QuestionWithResponse | undefined = undefined;
    const isAsking = !!question;
    const messages = [...questionResponsePairs];
    if (!isAsking && !isThinking) {
        lastMessagePair = messages.shift();
    }

    return (
        <OuterContainer>
            <QuestionsContainer
                onValueChange={handleInputChange}
                value={question ?? ''}
                onSubmitQuestion={handleSubmitQuestion}
                isThinking={isThinking}
                lastQuestion={lastMessagePair?.question}
            />
            <ResponseContainer
                lastActionTime={lastActionTime}
                isThinking={isThinking}
                lastResponse={lastMessagePair?.response}
                isAsking={isAsking}
            />
            <ChatHistoryContainer>
                <ChatMessages messages={messages} />
            </ChatHistoryContainer>
        </OuterContainer>
    );
};

const OuterContainer = styled.div`
    display: grid;
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* Internet Explorer 10+ */
    ::-webkit-scrollbar {
        /* WebKit */
        width: 0;
        height: 0;
    }

    background-color: ${theme.colors.dark.primary.default};

    // Default grid 2 x 2
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 40% 60%;

    @media (max-width: ${theme.breakpoints.md}px) {
        // Small grid 1 x 3
        grid-template-columns: 100%;
        grid-template-rows: 20% 20% 60%;

        div,
        p,
        textarea {
            font-size: 22px;
        }
    }

    @media (max-width: ${theme.breakpoints.sm}px) {
        div,
        p,
        textarea {
            font-size: 18px;
        }
    }
`;

const ChatHistoryContainer = styled.div`
    justify-self: center;
    width: 100%;
    max-width: 800px;

    @media (min-width: ${theme.breakpoints.md}px) {
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row-start: 2;
    }
`;
