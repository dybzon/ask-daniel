import React, { useEffect, useState } from 'react';
import { useAutoQuestion } from './questionHooks';

type IdleInfo = {
    isIdle: boolean;
    lastActionTime: Date;
    idleQuestionSubstringCounter: number;
    hasAskedIdleQuestion: boolean;
    idleQuestion: string;
};

const idleTimeoutSeconds = 30;

export const useIdleInfo = (
    setQuestion: (question: string) => void,
    submitQuestion: (question: string, skipSave?: boolean) => void
): [IdleInfo, React.Dispatch<React.SetStateAction<IdleInfo>>] => {
    const getAutoQuestion = useAutoQuestion();
    const [idleInfo, setIdleInfo] = useState<IdleInfo>({
        isIdle: false,
        lastActionTime: new Date(),
        idleQuestionSubstringCounter: 0,
        idleQuestion: '',
        hasAskedIdleQuestion: false,
    });

    const { isIdle, lastActionTime, idleQuestionSubstringCounter, hasAskedIdleQuestion, idleQuestion } = idleInfo;
    // Add effect to automatically type a question when the user is idling
    useEffect(() => {
        if (!isIdle || hasAskedIdleQuestion) return;

        const idleCounterInterval = setInterval(() => {
            if (idleQuestionSubstringCounter > idleQuestion.length) {
                setIdleInfo((s) => ({ ...s, hasAskedIdleQuestion: true }));
                submitQuestion(idleQuestion, true);
                return;
            }

            setIdleInfo((s) => ({ ...s, idleQuestionSubstringCounter: idleQuestionSubstringCounter + 1 }));
            setQuestion(idleQuestion.substring(0, idleQuestionSubstringCounter));
        }, 150);

        return () => clearInterval(idleCounterInterval);
    }, [setIdleInfo, setQuestion, idleInfo]);

    // Add effect to detect idling
    useEffect(() => {
        const checkIdleInterval = setInterval(() => {
            if (isIdle) return;

            const now = new Date();
            if (now.getTime() - lastActionTime.getTime() > idleTimeoutSeconds * 1000) {
                setIdleInfo((s) => ({
                    ...s,
                    isIdle: true,
                    hasAskedIdleQuestion: false,
                    idleQuestionSubstringCounter: 0,
                    idleQuestion: getAutoQuestion(),
                }));
            }
        }, 1000);
        return () => clearInterval(checkIdleInterval);
    }, [setIdleInfo, lastActionTime, isIdle]);

    return [idleInfo, setIdleInfo];
};
