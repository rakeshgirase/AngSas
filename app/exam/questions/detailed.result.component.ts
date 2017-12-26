/**
 * Created by rakesh on 20-Nov-2017.
 */
import {Component, OnInit, ViewChild} from "@angular/core";
import {IOption, IQuestionWrapper} from "./questions.model";
import {PageRoute, RouterExtensions} from "nativescript-angular/router";
import "rxjs/add/operator/switchMap";
import {ActivatedRoute} from "@angular/router";
import {RadSideDrawerComponent} from "nativescript-pro-ui/sidedrawer/angular";
import {AndroidActivityBackPressedEventData, AndroidApplication} from "application";
import * as application from "application";

@Component({
    selector: "show/detail",
    moduleId: module.id,
    templateUrl: "./detailed.result.component.html"
})
export class DetailedResultComponent {

    @ViewChild("drawer") drawerComponent: RadSideDrawerComponent;

    private allQuestions: Array<IQuestionWrapper>;
    private questions: Array<IQuestionWrapper>;
    private mode: string;

    constructor(private route: ActivatedRoute, private router: RouterExtensions) {
        application.android.on(AndroidApplication.activityBackPressedEvent, (data: AndroidActivityBackPressedEventData) => {
            this.router.back();
        });
        this.route.queryParams.subscribe((params) => {
            this.allQuestions = JSON.parse(params.questions);
            this.questions = this.allQuestions;
            this.mode = params.mode;
        });
    }

    getColor(questionWrapper: IQuestionWrapper, option: IOption): string {
        let color = "white";
        if (questionWrapper.selectedOption) {
            if (option.correct) {
                color = "#07C65A";
            } else if (option.tag === questionWrapper.selectedOption.tag) {
                color = "#ed1b1f";
            }
        } else if (option.correct) {
            color = "#4c8ec1";
        }
        return color;
    }

    getTextColor(questionWrapper: IQuestionWrapper, option: IOption): string {
        let color = "black";
        if ((questionWrapper.selectedOption && (option.tag === questionWrapper.selectedOption.tag)) || option.correct) {
            color = "#fff";
        }
        return color;
    }

    onDrawerButtonTap(): void {
        this.drawerComponent.sideDrawer.showDrawer();
    }

    all(): void {
        this.questions = this.allQuestions;
    }

    correct(): void {
        this.questions = this.allQuestions.filter(question=> question.selectedOption && question.selectedOption.correct);
    }

    incorrect(): void {
        this.questions = this.allQuestions.filter(question=> question.selectedOption && !question.selectedOption.correct);
    }

    skipped(): void {
        this.questions = this.allQuestions.filter(question=> !question.selectedOption);
    }

}