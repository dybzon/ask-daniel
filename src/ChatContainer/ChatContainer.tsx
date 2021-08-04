import { ChatMessages } from './ChatMessages';
import React, { useState } from 'react';
import styled from 'styled-components';
import { ResponseContainer } from './ResponseContainer';
import { QuestionsContainer } from './QuestionsContainer';

export type QuestionWithResponse = {
    question: string;
    response: string;
    time: Date;
};

export const ChatContainer = () => {
    const [question, setQuestion] = useState<string>();
    const [isThinking, setIsThinking] = useState<boolean>(false);
    const [questionResponsePairs, setQuestionResponsePairs] = useState<QuestionWithResponse[]>([]);
    const handleSubmitQuestion = (submittedQuestion: string) => {
        setIsThinking(true);
        setTimeout(() => onThinkingComplete(submittedQuestion), 2500);
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
                onValueChange={setQuestion}
                value={question ?? ''}
                onSubmitQuestion={handleSubmitQuestion}
                isThinking={isThinking}
                lastQuestion={lastMessagePair?.question}
            />
            <ResponseContainer isAsking={isAsking} isThinking={isThinking} lastResponse={lastMessagePair?.response} />
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
`;

function getResponse(question: string): string {
    if (!question) {
        return '';
    }

    // Find question keywords and match these against response keywords,
    // then return best suitable response, or alternatively a fallback response
    const questionKeywords = question
        .replace(punctuationRegex, '')
        .split(' ')
        .map((w) => w.toLowerCase());

    const ratedResponses = responses.map((a) => {
        return {
            ...a,
            matchedKeywordCount: a.keywords.filter((kw) => questionKeywords.includes(kw)).length,
        };
    });

    const highestScore = Math.max(...ratedResponses.map((a) => a.matchedKeywordCount));
    const bestResponse = ratedResponses.find((a) => a.matchedKeywordCount === highestScore && a.matchedKeywordCount > 0);
    if (bestResponse) return bestResponse.message;

    return fallbackResponses[Math.floor(fallbackResponses.length * Math.random())];
}

const responses = [
    { message: 'Anti-vaxxers skal dø!', keywords: ['vaxx', 'vaccine', 'vaxxer', 'corona', 'covid', 'antivaxxer', 'antivaxxers'] },
    { message: 'Jeg elsker atomkraft. Jeg er jo ikke dum.', keywords: ['energi', 'klima', 'atomkraft'] },
    { message: 'Tabular Editor er fantastisk', keywords: ['tabular', 'datamodel'] },
    {
        message: 'Kom så allesammen, gentag efter mig: Hva’ vil vi ha’? mRNA!',
        keywords: ['vaxx', 'vaccine', 'vaxxer', 'corona', 'covid', 'mrna', 'genetik', 'antivaxxer', 'antivaxxers'],
    },
    {
        message: 'Dan Jørgensen er dælme sølle for en klimaminister. Stop nu idiotiet og lad videnskaben komme til.',
        keywords: ['klima', 'klimaminister', 'videnskab', 'politik', 'jørgensen', 'dan'],
    },
    {
        message: 'Er du bange for at blive forgiftet med vaccinepartikler? Så gør som alle andre frie folk og tag mundbind på!',
        keywords: ['vaxx', 'vaccine', 'vaxxer', 'corona', 'covid', 'mundbind', 'antivaxxer', 'antivaxxers'],
    },
];

const fallbackResponses = [
    'Det ved jeg sgu ikke noget om.',
    'Hvad er det for noget pis at fyre af?',
    'Det ku du li at vide',
    'Det er satme det dummeste jeg har hørt længe',
    'Hold nu kæft',
    'Spørg om noget andet',
    'Hvorfor spørger du ikke om noget fornuftigt? Du spilder min tid.',
];

const punctuationRegex = /[.,/#!$%^&*;:{}=\-_`~()?]/g;
