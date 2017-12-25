import {Injectable, NgZone} from "@angular/core";
import {IOption, IQuestion} from "./questions.model";
import {Observable} from "rxjs/Rx";
import firebase = require("nativescript-plugin-firebase");

/**
 * Created by rakesh on 15-Nov-2017.
 */
@Injectable()
export class QuestionService {

    constructor(private _ngZone: NgZone) {
    }

    getNextQuestion(): Observable<IQuestion> {
        const id: number = this.getRandomNumber();
        return this.getFirebaseQuestion(id);
    }

    private getRandomNumber(): number {
        console.info("Fetching Random Number....");
        const randomNumber = Math.floor(Math.random() * (800));
        return randomNumber;
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
        let question:IQuestion = {question:undefined, options:[]};
        if (data) {
            data.options.forEach((option:IOption)=>{
                question.options.push(option);
            });
            question.question = data.question;
        }

        return question;
    }

    private handleErrors(error: Response): Observable<any> {
        console.error("Got error....")
        return Observable.throw(error);
    }
}