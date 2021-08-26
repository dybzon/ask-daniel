import { useEffect, useState } from 'react';
import { Response } from './messageTypes';

type ResponseFunctions = {
    getResponse: (question: string) => Response;
};

export const useResponseFunctions: () => ResponseFunctions = () => {
    const [responses, setResponses] = useState<Response[]>();

    useEffect(() => {
        if (responses) {
            return;
        }

        const fetchResponses = async () => {
            const response = await fetch(`${import.meta.env.VITE_AZUREFUNCTIONS_BASE}GetResponses`);

            if (response.ok) {
                const result = (await response.json()) as Response[];
                setResponses(result);
            }
        };

        fetchResponses();
    }, [responses, setResponses]);

    function getResponse(question: string): Response {
        // Find question keywords and match these against response keywords,
        // then return best suitable response, or alternatively a fallback response
        const questionKeywords = question
            .replace(punctuationRegex, '')
            .split(' ')
            .map((w) => w.toLowerCase());

        if (!responses) {
            return getFallbackResponse();
        }

        const ratedResponses = responses.map((a) => {
            return {
                ...a,
                matchedKeywordCount: a.keywords.filter((kw) => questionKeywords.includes(kw)).length,
            };
        });

        const highestScore = Math.max(...ratedResponses.map((a) => a.matchedKeywordCount));
        const bestResponse = ratedResponses.find((a) => a.matchedKeywordCount === highestScore && a.matchedKeywordCount > 0);
        if (bestResponse) return bestResponse;

        return getFallbackResponse();
    }

    return { getResponse };
};

const getFallbackResponse = (): Response => {
    return {
        id: 0,
        responseParts: [{ id: 0, value: fallbackResponses[Math.floor(fallbackResponses.length * Math.random())], type: 'String' }],
        keywords: [],
    };
};

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
