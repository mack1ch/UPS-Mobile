export const inputTypes = [
    'password',
    'text',
    'number',
    'tel',
    'search',
    'time',
    'date',
    'url',
    'email',
] as const;
export type InputType = (typeof inputTypes)[number];
