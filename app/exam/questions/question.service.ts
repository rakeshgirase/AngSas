import {Injectable, NgZone} from "@angular/core";
import {IQuestion} from "./questions.model";
import {Observable} from "rxjs/Rx";
import {ConnectionService} from "../../shared/connection.service";
import {SettingsService} from "../../shared/settings.service";
import * as dialogs from "ui/dialogs";
import firebase = require("nativescript-plugin-firebase");

/**
 * Created by rakesh on 15-Nov-2017.
 */
@Injectable()
export class QuestionService {

    questions: Array<IQuestion> = [];

    constructor(private _ngZone: NgZone, private connectionService: ConnectionService, private settingsService: SettingsService) {
    }

    getNextQuestion(): Observable<IQuestion> {
        return this.fetch();
    }

    private getRandomNumber(max:number): number {
        const randomNumber = Math.floor(Math.random() * (max));
        return randomNumber;
    }

    fetch(): Observable<IQuestion> {
        return this.getFirebaseQuestion();
    }

    getFirebaseQuestion(): Observable<IQuestion> {
        if (this.questions.length != 0) {
            return this.readFromQuestions();
        }else{
            if(this.settingsService.hasQuestions()){
                this.questions = this.settingsService.readQuestions();
                return this.readFromQuestions();
            }else{
                if(!this.connectionService.isConnected()){
                    dialogs.alert("Please connect to internet just once so that we can prepare quality questions for you!!");
                }else{
                    this.readAllQuestions();
                }
            }
        }
        return this.getNextQuestionFromCache();
    }

    private readAllQuestions(): void {
        this.getQuestions().subscribe((questions: Array<IQuestion>) => {
            this.questions = questions;
            this.settingsService.saveQuestions(questions);
        });
    }

    private getQuestions(): Observable<Array<IQuestion>> {
        return new Observable((observer: any) => {
            const path = "questions";

            const onValueEvent = (snapshot: any) => {
                this._ngZone.run(() => {
                    const questions = this.toQuestions(snapshot.value);
                    observer.next(questions);
                });
            };
            firebase.addValueEventListener(onValueEvent, `/${path}`);
        }).catch(this.handleErrors);
    }

    private toQuestions(data: any): Array<IQuestion> {
        var questions = [];
        data.forEach((raw) => {
            questions.push(raw);
        });
        return questions;
    }

    private handleErrors(error: Response): Observable<any> {
        return Observable.throw(error);
    }

    private getNextQuestionFromCache(): Observable<IQuestion> {
        return new Observable((observer: any) => {
            observer.next(QUESTIONS[this.getRandomNumber(QUESTIONS.length)]);
        });
    }

    private readFromQuestions(): Observable<IQuestion> {
        return new Observable((observer: any) => {
            observer.next(this.questions[this.getRandomNumber(this.questions.length)]);
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
    },
    {
        question: "Given the SAS data set EMPLOYEES:\nEMPLOYEES\nNAME SALARY\n-------- ------------\nInnis 60000\nJolli 50000\nEllis 55000\nLiu 45000\nThe following SAS program is submitted:\nproc print data = employees; where tag like '_i%';\nrun;\nWhat is contained in the output?\n",
        options: [
            {
                tag: "A",
                description: "A. Liu only",
                correct: true
            },
            {
                tag: "B",
                description: "B. Innis and Ellis only",
                correct: false
            },
            {
                tag: "C",
                description: "C. Innis, Ellis, and Liu only",
                correct: false
            },
            {
                tag: "D",
                description: "D. Innis, Jolli, Ellis, and Liu",
                correct: false
            }
        ]
    },
    {
        question: "The SAS data set SASUSER.HOUSES contains a variable PRICE which has been assigned a\npermanent label of \"Asking Price\". Which SAS program temporarily replaces the label \"Asking\nPrice\" with the label \"Sale Price\" in the output?\n",
        options: [
            {
                tag: "A",
                description: "A. proc print data =sasuser.houses; label price = \"Sale Price\"; run;",
                correct: false
            },
            {
                tag: "B",
                description: "B. proc print data =sasuser.houses label; label price \"Sale Price\"; run;",
                correct: false
            },
            {
                tag: "C",
                description: "C. proc print data =sasuser.houses label; label price = \"Sale Price\"; run;",
                correct: true
            },
            {
                tag: "D",
                description: "D. proc print data =sasuser.houses; price = \"Sale Price\"; run;",
                correct: false
            }
        ]
    },
    {
        question: "The following SAS program is submitted:\ndata work.empsalary;\nset work.people (in = inemp)\nwork.money(in = insal);\nif insal and inemp;\nrun;\nThe SAS data set WORKPEOPLE has 5 observations, and the data set WORKMONEY has 7\nobservations. How many observations will the data set WORK.EMPSALARY contain?\n",
        options: [
            {
                tag: "A",
                description: "A. 0",
                correct: true
            },
            {
                tag: "B",
                description: "B. 5",
                correct: false
            },
            {
                tag: "C",
                description: "C. 7",
                correct: false
            },
            {
                tag: "D",
                description: "D. 12",
                correct: false
            }
        ]
    }
]