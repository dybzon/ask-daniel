import { ChatMessages } from './ChatMessages';
import React, { useState } from 'react';
import styled from 'styled-components';
import { ResponseContainer } from './ResponseContainer';
import { QuestionsContainer } from './QuestionsContainer';
import { useIdleInfo } from './chatHooks';
import { responseService } from './responseService';

export type QuestionWithResponse = {
    question: string;
    response: string;
    time: Date;
};

export const ChatContainer = () => {
    const [question, setQuestion] = useState<string>('');
    const [isThinking, setIsThinking] = useState<boolean>(false);
    const [questionResponsePairs, setQuestionResponsePairs] = useState<QuestionWithResponse[]>([]);
    const handleSubmitQuestion = (submittedQuestion: string) => {
        setIsThinking(true);
        setTimeout(() => onThinkingComplete(submittedQuestion), 2500);
    };

    const [idleInfo, setIdleInfo] = useIdleInfo(setQuestion, handleSubmitQuestion);
    const { lastActionTime } = idleInfo;

    const handleInputChange = (input: string) => {
        setIdleInfo((s) => ({ ...s, isIdle: false, lastActionTime: new Date() }));
        setQuestion(input);
    };

    const onThinkingComplete = (submittedQuestion: string) => {
        const response = responseService.getResponse(submittedQuestion);
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
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 40% 60%;
`;

const ChatHistoryContainer = styled.div`
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 2;
    justify-self: center;
    width: 100%;
    max-width: 800px;
`;
