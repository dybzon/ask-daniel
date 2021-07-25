import React, { useState } from 'react';
import styled from 'styled-components';
import { AnswersContainer } from './AnswersContainer';
import { QuestionsContainer } from './QuestionsContainer';


type QuestionWithAnswer = {
  question: string;
  answer: string;
  time: Date;
}

export const ChatContainer = () => {
  const [question, setQuestion] = useState<string>();
  const [isThinking, setIsThinking] = useState<boolean>(false);
  const [questionAnswerPairs, setQuestionAnswerPairs] = useState<QuestionWithAnswer[]>([]);
  const handleSubmitQuestion = (submittedQuestion: string) => {
    setIsThinking(true);
    setTimeout(() => onThinkingComplete(submittedQuestion), 2500);
  }

  const onThinkingComplete = (submittedQuestion: string) => {
    const answer = getAnswer(submittedQuestion);
    setQuestionAnswerPairs([...questionAnswerPairs, { question: submittedQuestion, answer, time: new Date() }])
    setQuestion('');
    setIsThinking(false);
  }

  const previousQuestions = questionAnswerPairs.map(qa => ({ message: qa.question, time: qa.time }));
  const previousAnswers = questionAnswerPairs.map(qa => ({ message: qa.answer, time: qa.time }));
  return <OuterContainer>
    <QuestionLayoutContainer>
      <QuestionsContainer 
        onValueChange={setQuestion} 
        value={question ?? ''} 
        onSubmitQuestion={handleSubmitQuestion} 
        isThinking={isThinking}
        previousQuestions={previousQuestions} />
    </QuestionLayoutContainer>
    <AnswerLayoutContainer>
      <AnswersContainer 
        isAsking={!!question}
        isThinking={isThinking}
        previousAnswers={previousAnswers} />
    </AnswerLayoutContainer>
  </OuterContainer>;
}

const OuterContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const QuestionLayoutContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const AnswerLayoutContainer = styled.div`
  width: 100%;
  height: 100%;
`;

function getAnswer(question: string): string {
  if(!question) {
    return '';
  }

  let answer = undefined;
  let questionKeywordIndex = 0;
  const questionKeywords = question.split(' ').map(w => w.toLowerCase()).filter(w => w.length > 3 && !ignoredWords.includes(w))
  while(!answer && questionKeywordIndex < questionKeywords.length) {
    answer = answers.find(a => a.toLowerCase().includes(questionKeywords[questionKeywordIndex]));
    questionKeywordIndex++;
  }

  return answer || 'Det ved jeg sgu ikke noget om.';
}

const answers = [
  'Anti-vaxxers skal dø!',
  'Jeg elsker atomkraft. Jeg er jo ikke dum.',
  'Tabular Editor er fantastisk',
  'Kom så allesammen, gentag efter mig: Hva’ vil vi ha’? mRNA!',
  'Dan Jørgensen er dælme sølle for en klimaminister. Stop nu idiotiet og lad videnskaben komme til.',
  'Er du bange for at blive forgiftet med vaccinepartikler? Så gør som alle andre frie folk og tag mundbind på!',
]

const ignoredWords: string[] = [
  'skal', 'blive', 'med', 'alle', 'andre', 'stop', 'dælme', 'gentag', 'efter', 'ikke', 'dø'
]