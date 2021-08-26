export type MessagePart = {
    id: number;
    value: string;
    src?: string;
    type: 'Link' | 'String';
};

export type Message = Response | string;

export const isComplexMessage = (x: Message): x is Response => typeof x === 'object';

export type Response = {
    id: number;
    responseParts: MessagePart[];
    keywords: string[];
};
