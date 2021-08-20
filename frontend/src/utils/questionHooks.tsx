import { useEffect, useState } from 'react';

type QuestionFunctions = {
    getAutoQuestion: () => string;
    getSuggestedQuestions: () => string[];
};

export const useQuestionFunctions: () => QuestionFunctions = () => {
    const [autoQuestions, setAutoQuestions] = useState<string[]>();
    const [suggestedQuestions, setSuggestedQuestions] = useState<string[]>();

    useEffect(() => {
        if (autoQuestions) {
            return;
        }

        const fetchAutoQuestions = async () => {
            const response = await fetch(`${import.meta.env.VITE_AZUREFUNCTIONS_BASE}GetAutoQuestions`);

            if (response.ok) {
                const result = (await response.json()) as string[];
                setAutoQuestions(result);
            }
        };

        fetchAutoQuestions();
    }, [autoQuestions, setAutoQuestions]);

    useEffect(() => {
        if (suggestedQuestions) {
            return;
        }

        const fetchSuggestedQuestions = async () => {
            const response = await fetch(`${import.meta.env.VITE_AZUREFUNCTIONS_BASE}GetSuggestedQuestions`);

            if (response.ok) {
                const result = (await response.json()) as string[];
                setSuggestedQuestions(result);
            }
        };

        fetchSuggestedQuestions();
    }, [suggestedQuestions, setSuggestedQuestions]);

    const getAutoQuestion = () => {
        return autoQuestions ? autoQuestions[Math.floor(Math.random() * autoQuestions.length)] : fallbackAutoQuestion;
    };

    const getSuggestedQuestions = () => suggestedQuestions ?? [];

    return { getAutoQuestion, getSuggestedQuestions };
};

const fallbackAutoQuestion = 'Har du hørt om Rasmus Dybkjær?';
