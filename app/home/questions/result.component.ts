/**
 * Created by rakesh on 20-Nov-2017.
 */
import {Component, OnInit, ViewChild} from "@angular/core";
import {IQuestionWrapper} from "./questions.model";
import {PageRoute} from "nativescript-angular/router";
import "rxjs/add/operator/switchMap";
import {ActivatedRoute, NavigationExtras, Router} from "@angular/router";

@Component({
    selector: "result",
    moduleId: module.id,
    templateUrl: "./result.component.html"
})
export class ResultComponent {

    private right: number = 0;
    private wrong: number = 0;
    private totalQuestions: number = 10;
    private questions: Array<IQuestionWrapper>;
    private name: string;

    constructor(private pageRoute: PageRoute, private route: ActivatedRoute, private router: Router) {
        /*this.pageRoute.activatedRoute
         .switchMap((activatedRoute) => activatedRoute.params)
         .forEach((params) => {
         console.info("Paramuss: " + params.toString());
         });*/
        this.route.queryParams.subscribe((params) => {
            this.questions = JSON.parse(params.questions);
        });
        this.calculateResult();
    }

    calculateResult(): void {
        for (const question of this.questions) {
            if (question.selectedOption && question.selectedOption.correct) {
                this.right = this.right + 1;
            } else {
                this.wrong = this.wrong + 1;
            }
        }
    }

    showDetailedResult(): void {
        const navigationExtras: NavigationExtras = {
            queryParams: {
                questions: JSON.stringify(this.questions)
            }
        };
        this.router.navigate(["home/detail"], navigationExtras);
    }
}