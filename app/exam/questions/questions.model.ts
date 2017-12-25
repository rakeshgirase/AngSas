import {QuestionService} from "./question.service";

export interface IQuestionWrapper {
    question: IQuestion;
    selectedOption?: IOption;
}

export interface IQuestion {
    number?: string;
    question: string;
    options: Array<IOption>;
}

export interface IOptions {
    options: Array<IOption>;
}

export interface IOption {
    tag: string;
    description: string;
    correct: boolean;
}

export interface ISetting {
    totalQuestionsShort: number;
    totalQuestionsMain: number;
}

export interface State {
    questionWrapper?: IQuestionWrapper;
    questions: Array<IQuestionWrapper>;
    questionNumber: number;
    totalQuestions: number;
}