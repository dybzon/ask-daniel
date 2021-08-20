export type MessagePart = {
    value: string;
    src?: string;
    type?: 'Link' | 'Text';
};

export type Message = string | MessagePart[];

export const isComplexMessage = (x: Message): x is MessagePart[] => Array.isArray(x);

export type Response = {
    parts: Message;
    keywords: string[];
};
