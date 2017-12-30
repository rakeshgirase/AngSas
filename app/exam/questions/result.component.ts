/**
 * Created by rakesh on 20-Nov-2017.
 */
import {Component, OnInit, ViewChild} from "@angular/core";
import {IQuestionWrapper} from "./questions.model";
import {PageRoute, RouterExtensions} from "nativescript-angular/router";
import "rxjs/add/operator/switchMap";
import {ActivatedRoute, NavigationExtras, Router} from "@angular/router";
import {RadSideDrawerComponent} from "nativescript-pro-ui/sidedrawer/angular";

@Component({
    selector: "show/result",
    moduleId: module.id,
    templateUrl: "./result.component.html"
})
export class ResultComponent {

    @ViewChild("drawer") drawerComponent: RadSideDrawerComponent;

    private right: number = 0;
    private wrong: number = 0;
    private totalQuestions: number;
    private mode: string;
    private questions: Array<IQuestionWrapper>;
    private percentage: number;

    constructor(private route: ActivatedRoute,private routerExtensions: RouterExtensions) {
        this.route.queryParams.subscribe((params) => {
            this.questions = JSON.parse(params.questions);
            this.totalQuestions = params.totalQuestions;
            this.mode = params.mode;
            this.calculateResult();
        });
    }

    calculateResult(): void {
        for (const question of this.questions) {
            if (question.selectedOption && question.selectedOption.correct) {
                this.right = this.right + 1;
            } else {
                this.wrong = this.wrong + 1;
            }
        }
        this.percentage = this.right*100/this.questions.length;
    }

    showDetailedResult(): void {
        this.routerExtensions.navigate(["exam/show/detail"],
            {
                animated: true,
                transition: {
                    name: "slide",
                    duration: 200,
                    curve: "ease"
                },
                queryParams:{
                    questions: JSON.stringify(this.questions),
                    mode: this.mode
                }
            });
    }

    onDrawerButtonTap(): void {
        this.drawerComponent.sideDrawer.showDrawer();
    }
}