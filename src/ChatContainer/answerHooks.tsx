import React, {useState, useEffect} from 'react';

export const useAnswer: (question?: string) => {answer?: string; isThinking: boolean;} = (question) => {
  return { answer: question ? 'yep' : undefined, isThinking: false };
}