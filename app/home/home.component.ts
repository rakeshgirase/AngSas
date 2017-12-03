import { Component, OnInit, OnDestroy, ViewChild } from "@angular/core";
import { NavigationExtras, Router } from "@angular/router";
import { PageRoute } from "nativescript-angular/router";
import { DrawerTransitionBase, SlideInOnTopTransition } from "nativescript-pro-ui/sidedrawer";
import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";
import { QuestionService } from "./questions/question.service";
import { IOption, IQuestionWrapper } from "./questions/questions.model";
import { SettingsService } from "../shared/settings.service";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit, OnDestroy {

    @ViewChild("drawer") drawerComponent: RadSideDrawerComponent;

    private questionWrapper: IQuestionWrapper;

    private showAnswerFlag: boolean;

    private questionNumber: number;
    private questionsAsked: number;
    private totalQuestions: number;
    private questions: Array<IQuestionWrapper> = [];

    private _sideDrawerTransition: DrawerTransitionBase;

    constructor(private router: Router, private questionService: QuestionService, private settingsService: SettingsService) {
        this.questionNumber = 0;
        this.questionsAsked = 0;
        this.totalQuestions = settingsService.readSettings().totalQuestionsMain;
    }

    ngOnDestroy(): void {
        console.info("Last Message");
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
        this.next();
        this.showAnswerFlag = false;
    }

    get sideDrawerTransition(): DrawerTransitionBase {
        return this._sideDrawerTransition;
    }

    showAnswer(): void {
        this.showAnswerFlag = true;
    }

    previous(): void {
        this.showAnswerFlag = false;
        if (this.questionNumber > 0) {
            this.questionNumber = this.questionNumber - 1;
            this.questionWrapper = this.questions[this.questionNumber - 1];
        }
    }

    next(): void {
        if (this.questionNumber < this.totalQuestions) {
            this.showAnswerFlag = false;
            this.questionNumber = this.questionNumber + 1;
            if (this.questions.length >= this.questionNumber) {
                this.questionWrapper = this.questions[this.questionNumber - 1];
            } else {
                const question = this.questionService.getNextQuestion();
                this.questionWrapper = {question};
                this.questions.push(this.questionWrapper);
            }
        }
    }

    select(option: IOption): void {
        this.questionWrapper.selectedOption = option;
    }

    showResult(): void {
        const navigationExtras: NavigationExtras = {
            queryParams: {
                questions: JSON.stringify(this.questions)
            }
        };
        this.router.navigate(["home/result"], navigationExtras);
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
        return this.questionsAsked === this.totalQuestions;
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
}
