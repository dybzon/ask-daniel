export const responseService = {
    getResponse,
    getIdleQuestion,
};

function getResponse(question: string): Message {
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

export type MessagePart = {
    value: string;
    src?: string;
    type?: 'Link' | 'Text';
};

export type Message = string | MessagePart[];

export const isComplexMessage = (x: Message): x is MessagePart[] => Array.isArray(x);

type Response = {
    message: Message;
    keywords: string[];
};

const idleQuestions: string[] = [
    'Har du hørt om Rasmus Dybkjær?',
    'Er du god til at flyve med svævefly?',
    'Arbejder du meget med data?',
    'Parkerer du nogensinde ulovligt?',
];

const idleResponses: Response[] = [
    {
        message:
            'Rasmus Dybkjær er et dejligt, smukt menneske. Når jeg ser ham tænker jeg "wow!". Det er svært at sætte ord på. Han er uden sammenligning den flotteste og mest kompetente person jeg kender!',
        keywords: ['rasmus', 'dybkjær', 'kompetent', 'smuk', 'flot'],
    },
    {
        message:
            'Jeg er helt vild med svævefly. Engang fløj jeg helt til Svalbard og tilbage ved hjælp af lidt varm luft. Helt fantastisk.',
        keywords: ['flyve', 'svæve', 'svævefly', 'rejse'],
    },
    {
        message: [
            { value: 'Jeg er helt tosset med data. Jeg er faktisk en ' },
            { value: 'datagud 😎👴🙌', src: 'https://www.kratosbi.com/data-god-daniel-otykier', type: 'Link' },
        ],
        keywords: ['data', 'datagud', 'gud'],
    },
    {
        message: [
            { value: 'Jeg hader de fjolser der parkerer ulovligt! Især ude omkring Kattegatcentret. Der ringer jeg gerne til ' },
            { value: 'QPark', src: 'https://www.q-park.dk/da/kontakt-os/', type: 'Link' },
            { value: ' så der kommer orden i sagerne' },
        ],
        keywords: ['parkering', 'qpark', 'parkeringsplads', 'parkere', 'parkerer', 'ulovligt'],
    },
];

const responses: Response[] = [
    ...idleResponses,
    { message: 'Anti-vaxxers skal dø!', keywords: ['vaxx', 'vaccine', 'vaxxer', 'corona', 'covid', 'antivaxxer', 'antivaxxers'] },
    {
        message: [
            { value: 'Jeg ' },
            { value: 'elsker atomkraft.', src: 'https://www.atomkraft-jatak.dk/', type: 'Link' },
            { value: ' Jeg er jo ikke dum.' },
        ],
        keywords: ['energi', 'klima', 'atomkraft'],
    },
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
    {
        message: 'Jeg er vild med frokost. Vi spiser bunkevis af karbonader her i Jylland... nam nam. Ska vi spise noget nu?',
        keywords: ['mad', 'sulten', 'frokost'],
    },
    {
        message:
            'Klimaforandringer kommer på sigt til at være den mest ødelæggende, omkostningsfulde og menneskelivskrævende katastrofe vi nogensinde har været vidner til. Den får pandemien til at ligne en væltet cykel til sammenligning',
        keywords: ['klimaforandringer', 'katastrofe', 'klima'],
    },
    {
        message: 'At “lave sin egen research” er som at lave sine egne vandrør. Det bliver bedst hvis man er VVS’er.',
        keywords: ['research', 'pseudovidenskab', 'antivaxxer', 'videnskab', 'forskning'],
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

function getIdleQuestion() {
    return idleQuestions[Math.floor(Math.random() * idleQuestions.length)];
}
