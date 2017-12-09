import {Component, OnInit, OnDestroy, ViewChild} from "@angular/core";
import {NavigationExtras, Router} from "@angular/router";
import {PageRoute, RouterExtensions} from "nativescript-angular/router";
import {DrawerTransitionBase, SlideInOnTopTransition} from "nativescript-pro-ui/sidedrawer";
import {RadSideDrawerComponent} from "nativescript-pro-ui/sidedrawer/angular";
import {QuestionService} from "./questions/question.service";
import {IOption, IQuestionWrapper, State} from "./questions/questions.model";
import {SettingsService} from "../shared/settings.service";
import {suspendEvent, resumeEvent, exitEvent, ApplicationEventData} from "application";
import * as dialogs from "ui/dialogs";

@Component({
    selector: "Exam",
    moduleId: module.id,
    templateUrl: "./exam.component.html"
})
export class ExamComponent implements OnInit {

    @ViewChild("drawer") drawerComponent: RadSideDrawerComponent;

    private questionWrapper: IQuestionWrapper;

    private showAnswerFlag: boolean;

    private _sideDrawerTransition: DrawerTransitionBase;
    private state: State;
    private mode: string;

    constructor(private router: RouterExtensions, private questionService: QuestionService, private settingsService: SettingsService, private _pageRoute: PageRoute,) {
    }

    /* ***********************************************************
     * Use the @ViewChild decorator to get a reference to the drawer component.
     * It is used in the "onDrawerButtonTap" function below to manipulate the drawer.
     *************************************************************/

    /* ***********************************************************
     * Use the sideDrawerTransition property to change the open/close animation of the drawer.
     *************************************************************/

    ngOnInit(): void {
        this._sideDrawerTransition = new SlideInOnTopTransition();
        this._pageRoute.activatedRoute
            .switchMap((activatedRoute) => activatedRoute.params)
            .forEach((params) => {
                this.mode = params.mode;
                this.settingsService.createSetting();
                this.state = this.settingsService.readCache(this.mode);
                this.showFromState();
            });
    }

    get sideDrawerTransition(): DrawerTransitionBase {
        return this._sideDrawerTransition;
    }

    showAnswer(): void {
        this.showAnswerFlag = true;
    }

    previous(): void {
        this.showAnswerFlag = false;
        if (this.state.questionNumber > 1) {
            this.state.questionNumber = this.state.questionNumber - 1;
            this.questionWrapper = this.state.questions[this.state.questionNumber - 1];
            this.settingsService.saveCache(this.mode, this.state);
        }
    }

    showFromState(): void {
        if (this.state.questions.length > this.state.questionNumber) {
            this.questionWrapper = this.state.questions[this.state.questionNumber - 1];
        } else {
            this.next();
        }
    }

    next(): void {
        if (this.state.questionNumber < this.state.totalQuestions) {
            this.showAnswerFlag = false;
            this.state.questionNumber = this.state.questionNumber + 1;
            if (this.state.questions.length >= this.state.questionNumber) {
                this.questionWrapper = this.state.questions[this.state.questionNumber - 1];
            } else {
                const question = this.questionService.getNextQuestion();
                this.questionWrapper = {question};
                this.state.questions.push(this.questionWrapper);
            }
            this.settingsService.saveCache(this.mode, this.state);
        }
    }

    select(option: IOption): void {
        this.questionWrapper.selectedOption = option;
    }

    showResult(): void {
        console.log("State is: " + this.state);
        /*dialogs.confirm("Are you sure you want to process?").then(function (proceed) {
            if (proceed) {

            }
        });*/
        const navigationExtras: NavigationExtras = {
            queryParams: {
                questions: JSON.stringify(this.state.questions),
                totalQuestions: this.state.totalQuestions
            }
        };
        this.router.navigate(["exam/show/proceed"], navigationExtras);

    }

    getLabelBackground(option: IOption): string {
        let color = "white";
        if (this.showAnswerFlag && option.correct) {
            color = "lightgreen";
        } else if (!this.questionWrapper.selectedOption.correct) {
            color = "red";
        }

        return color;
    }

    allQuestionsAsked(): boolean {
        return this.state.questions.length === this.state.totalQuestions;
    }

    getColor(option: IOption): string {
        let color = "white";
        if (this.questionWrapper.selectedOption === option) {
            color = "lightblue";
        }

        return color;
    }

    /* ***********************************************************
     * According to guidelines, if you have a drawer on your page, you should always
     * have a button that opens it. Use the showDrawer() function to open the app drawer section.
     *************************************************************/
    onDrawerButtonTap(): void {
        this.drawerComponent.sideDrawer.showDrawer();
    }

    clear(): void {
        this.settingsService.clearAll();
    }
}
