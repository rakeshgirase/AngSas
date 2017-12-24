import {Component, OnInit, OnDestroy, ViewChild} from "@angular/core";
import {NavigationExtras, Router} from "@angular/router";
import {PageRoute, RouterExtensions} from "nativescript-angular/router";
import {DrawerTransitionBase, SlideInOnTopTransition} from "nativescript-pro-ui/sidedrawer";
import {RadSideDrawerComponent} from "nativescript-pro-ui/sidedrawer/angular";
import {QuestionService} from "./questions/question.service";
import {IOption, IQuestionWrapper, State} from "./questions/questions.model";
import {SettingsService} from "../shared/settings.service";
import {suspendEvent, resumeEvent, exitEvent, ApplicationEventData} from "application";
import {MyDrawerComponent} from "../shared/my-drawer/my-drawer.component";
import {AndroidActivityBackPressedEventData, AndroidApplication} from "application";
import * as application from "application";
import * as dialogs from "ui/dialogs";
import {isAndroid} from "platform";

@Component({
    selector: "Exam",
    moduleId: module.id,
    templateUrl: "./exam.component.html"
})
export class ExamComponent implements OnInit {

    @ViewChild("drawer") drawerComponent: RadSideDrawerComponent;
    @ViewChild("mydrawer") myDrawer: MyDrawerComponent;

    private questionWrapper: IQuestionWrapper;

    private showAnswerFlag: boolean;

    private _sideDrawerTransition: DrawerTransitionBase;
    private state: State;
    private mode: string;

    constructor(private routerExtensions: RouterExtensions, private questionService: QuestionService, private settingsService: SettingsService, private _pageRoute: PageRoute) {
        application.android.on(AndroidApplication.activityBackPressedEvent, (data: AndroidActivityBackPressedEventData) => {
            data.cancel = true;
        });
    }

    /* ***********************************************************
     * Use the @ViewChild decorator to get a reference to the drawer component.
     * It is used in the "onDrawerButtonTap" function below to manipulate the drawer.
     *************************************************************/

    /* ***********************************************************
     * Use the sideDrawerTransition property to change the open/close animation of the drawer.
     *************************************************************/

    ngOnInit(): void {
        this.showAnswerFlag = false;
        this._sideDrawerTransition = new SlideInOnTopTransition();
        this._pageRoute.activatedRoute
            .switchMap((activatedRoute) => activatedRoute.params)
            .forEach((params) => {
                this.mode = params.mode;
                this.settingsService.clearCache("practice");
                this.settingsService.createSetting();
                this.state = this.settingsService.readCache(this.mode);
                this.showFromState();
                this.drawerComponent.sideDrawer.closeDrawer();
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
        if (this.state.questions.length > this.state.questionNumber || this.state.questionNumber === this.state.totalQuestions) {
            this.questionWrapper = this.state.questions[this.state.questionNumber - 1];
        } else {
            this.next();
        }
    }

    next(): void {
        if (this.isPracticeMode()) {
            this.showAnswerFlag = false;
            this.state.questionNumber = this.state.questionNumber + 1;
            const question = this.questionService.getNextQuestion();
            this.questionWrapper = {question};
            this.state.questions.push(this.questionWrapper);
        } else if (this.state.questionNumber < this.state.totalQuestions) {
            this.state.questionNumber = this.state.questionNumber + 1;
            if (this.state.questions.length >= this.state.questionNumber) {
                this.questionWrapper = this.state.questions[this.state.questionNumber - 1];
            } else {
                const question = this.questionService.getNextQuestion();
                this.questionWrapper = {question};
                this.state.questions.push(this.questionWrapper);
            }
        }
        this.settingsService.saveCache(this.mode, this.state);
    }

    select(option: IOption): void {
        this.questionWrapper.selectedOption = option;
    }

    quit(): void {
        dialogs.confirm("Are you sure you want to quit?").then((proceed) => {
            if (proceed) {
                this.showResult();
            }
        });
    }

    submit(): void {
        dialogs.confirm("Are you sure you want to submit?").then((proceed) => {
            if (proceed) {
                this.showResult();
            }
        });
    }

    private showResult(): void {
        this.settingsService.clearCache(this.mode);
        this.routerExtensions.navigate(["exam/show/result"],
            {
                animated: true,
                transition: {
                    name: "slide",
                    duration: 200,
                    curve: "ease"
                },
                queryParams: {
                    questions: JSON.stringify(this.state.questions),
                    totalQuestions: this.state.totalQuestions,
                    mode: this.mode
                },
                clearHistory: true
            });
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

    isPracticeMode(): boolean {
        return this.myDrawer.selectedPage === 'practice';
    }

    getColor(option: IOption): string {
        let color = "white";
        if (this.showAnswerFlag && this.isPracticeMode()) {
            if(this.questionWrapper.selectedOption){
                if (option.correct) {
                    color = "#07C65A";
                } else if (this.questionWrapper.selectedOption === option && !option.correct) {
                    color = "#ed1b1f";
                }
            } else if (option.correct) {
                color = "#4c8ec1";
            }
        } else {
            if (this.questionWrapper.selectedOption === option) {
                color = "lightblue";
            }
        }

        return color;
    }


    getTextColor(option: IOption): string {
        let color = "black";
        if (this.showAnswerFlag && this.isPracticeMode()) {
            if (this.questionWrapper.selectedOption === option || option.correct) {
                color = "#fff";
            }
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
