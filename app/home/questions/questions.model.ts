export interface IQuestionWrapper {
    question: IQuestion;
    selectedOption?: IOption;
}

export interface IQuestion {
    question: string;
    options: IOptions;
    submittedAnswer: string;
    answer: string;
    answeredCorrectly: boolean;
    complete: boolean;
    errorMessage: string;
}

export interface IOptions {
    options: Array<IOption>;
}

export interface IOption {
    tag: string;
    description: string;
    correct: boolean;
}