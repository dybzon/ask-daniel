import { useEffect, useState } from 'react';
import { getUserId } from './identificationFuncs';

export type Question = {
    id: number;
    askedByMe?: boolean;
    value: string;
};

const userId = getUserId();

export const useAutoQuestion: () => () => string = () => {
    const [autoQuestions, setAutoQuestions] = useState<string[]>();

    useEffect(() => {
        if (autoQuestions) {
            return;
        }

        const fetchAutoQuestions = async () => {
            const response = await fetch(`${import.meta.env.VITE_AZUREFUNCTIONS_BASE}GetAutoQuestions`);

            if (response.ok) {
                const result = (await response.json()) as Question[];
                setAutoQuestions(result.map((q) => q.value));
            }
        };

        fetchAutoQuestions();
    }, [autoQuestions, setAutoQuestions]);

    const getAutoQuestion = () => {
        return autoQuestions ? autoQuestions[Math.floor(Math.random() * autoQuestions.length)] : fallbackAutoQuestion;
    };

    return getAutoQuestion;
};

type SuggestedQuestionFunctions = {
    getMatches: (value?: string) => Question[];
};

export const useSuggestedQuestions: () => SuggestedQuestionFunctions = () => {
    const [suggestedQuestions, setSuggestedQuestions] = useState<Question[]>();

    useEffect(() => {
        if (suggestedQuestions) {
            return;
        }

        const fetchSuggestedQuestions = async () => {
            const response = await fetch(
                `${import.meta.env.VITE_AZUREFUNCTIONS_BASE}GetSuggestedQuestions?` + new URLSearchParams({ userId })
            );

            if (response.ok) {
                const result = (await response.json()) as Question[];
                setSuggestedQuestions(result);
            }
        };

        fetchSuggestedQuestions();
    }, [suggestedQuestions, setSuggestedQuestions]);

    const getMatches = (value?: string) => {
        const allSuggestions = suggestedQuestions ?? [];
        if (!value) return allSuggestions;

        return allSuggestions.filter((q) => q.value.toLowerCase().includes(value.toLowerCase()));
    };

    return { getMatches };
};

const fallbackAutoQuestion = 'Har du hørt om Rasmus Dybkjær?';

export const addQuestion = async (question: string): Promise<unknown> => {
    const url = `${import.meta.env.VITE_AZUREFUNCTIONS_BASE}AddQuestion`;
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question, userId }),
    };
    const response = await fetch(url, options);
    return await response.json();
};
