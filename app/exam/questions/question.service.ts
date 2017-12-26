import {Injectable, NgZone} from "@angular/core";
import {IOption, IQuestion} from "./questions.model";
import {Observable} from "rxjs/Rx";
import firebase = require("nativescript-plugin-firebase");
import {ConnectionService} from "../../shared/connection.service";

/**
 * Created by rakesh on 15-Nov-2017.
 */
@Injectable()
export class QuestionService {

    constructor(private _ngZone: NgZone, private connectionService: ConnectionService) {
    }

    getNextQuestion(): Observable<IQuestion> {
        return this.fetch();
    }

    private getRandomNumber(): number {
        const randomNumber = Math.floor(Math.random() * (800));
        return randomNumber;
    }

    fetch(): Observable<any> {
        if (this.connectionService.isConnected()) {
            let id = this.getRandomNumber();
            return this.getFirebaseQuestion(id);
        } else {
            return this.getNextQuestionFromCache();
        }
    }

    getFirebaseQuestion(id: number): Observable<any> {
            return new Observable((observer: any) => {
                const path = "questions" + "/" + id;

                const onValueEvent = (snapshot: any) => {
                    this._ngZone.run(() => {
                        const results = this.toQuestion(snapshot.value);
                        observer.next(results);
                    });
                };
                firebase.addValueEventListener(onValueEvent, `/${path}`);
            }).catch(this.handleErrors);
    }

    private toQuestion(data: any): IQuestion {
        let question: IQuestion = {question: undefined, options: []};
        if (data) {
            data.options.forEach((option: IOption) => {
                question.options.push(option);
            });
            question.question = data.question;
        }

        return question;
    }

    private handleErrors(error: Response): Observable<any> {
        return Observable.throw(error);
    }

    private getNextQuestionFromCache(): Observable<any> {
        return new Observable((observer: any) => {
            observer.next(QUESTIONS[0]);
        });
    }
}

const QUESTIONS: Array<IQuestion> = [
    {
        question: "The following SAS program is submitted:\nfootnote 1 'Sales Report for Last Month';\nfootnote2 'Selected Products Only';\nfootnote3 'All Regions';\nfootnote4 'All Figures in Thousands of Dollars';\nproc print data = sasuser.shoes;\nfootnote2 'All Products';\nrun;\nWhich footnote(s) is/are displayed in the report?\n",
        options: [
            {
                tag: "A",
                description: "A. All Products",
                correct: false
            },
            {
                tag: "B",
                description: "B. Sales Report for Last Month All Products",
                correct: true
            },
            {
                tag: "C",
                description: "C. All Products All Regions All Figures in Thousands of Dollars",
                correct: false
            },
            {
                tag: "D",
                description: "D. Sales Report for Last Month All Products All Regions All Figures in Thousands of Dollars",
                correct: false
            }
        ]
    }
    ]