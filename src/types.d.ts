export interface IText {
    title: string;
    description: string;
    data: string;
}

export interface ITextMutation {
    title: string;
    description: string;
    data: string;
    id: string;
}

export interface IApiText {
    [id: string]: ITextMutation;
}