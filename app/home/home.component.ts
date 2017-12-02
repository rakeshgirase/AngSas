import {Component, OnInit, ViewChild} from "@angular/core";
import {DrawerTransitionBase, SlideInOnTopTransition} from "nativescript-pro-ui/sidedrawer";
import {RadSideDrawerComponent} from "nativescript-pro-ui/sidedrawer/angular";
import {IOption, IQuestionWrapper, IResult} from "./questions/questions.model";
import {QuestionService} from "./questions/question.service";
import {Router, NavigationExtras} from "@angular/router";
import {PageRoute} from "nativescript-angular/router";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    private result: IResult;
    private questionWrapper: IQuestionWrapper;

    private showAnswerFlag: boolean;

    private questionNumber: number;
    private questionsAsked: number;
    private totalQuestions: number;
    private questions: Array<IQuestionWrapper> = [];

    constructor(private router: Router, private questionService: QuestionService) {
        this.questionNumber = 0;
        this.questionsAsked = 0;
        this.totalQuestions = 10;
    }

    /*ngOnInit(): void {
     this.question = this.questionService.getNextQuestion();
     }*/
    /* ***********************************************************
     * Use the @ViewChild decorator to get a reference to the drawer component.
     * It is used in the "onDrawerButtonTap" function below to manipulate the drawer.
     *************************************************************/

    @ViewChild("drawer") drawerComponent: RadSideDrawerComponent;

    private _sideDrawerTransition: DrawerTransitionBase;

    /* ***********************************************************
     * Use the sideDrawerTransition property to change the open/close animation of the drawer.
     *************************************************************/

    ngOnInit(): void {
        this._sideDrawerTransition = new SlideInOnTopTransition();
        this.next();
        this.showAnswerFlag = false;
        this.result = {totalQuestions: this.totalQuestions, attemptedQuestions: 0, skipped: 0, correct: 0};
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

    select(option: IOption): void {
        this.questionWrapper.selectedOption = option;
    }

    getLabelBackground(option: IOption): string {
        let color = "white";
        if (this.showAnswerFlag && option.correct) {
            color = "lightgreen";
            console.info("Selected Color: lightgreen");
        } else if (!this.questionWrapper.selectedOption.correct) {
            console.info("Selected Color: red");
            color = "red";
        }
        console.info("Selected Color: " + color);

        return color;
    }

    next(): void {
        this.showAnswerFlag = false;
        this.questionNumber = this.questionNumber + 1;
        if (this.questions.length >= this.questionNumber) {
            console.info("Question exist...");
            this.questionWrapper = this.questions[this.questionNumber - 1];
        } else {
            console.info("Fetching New Question...");
            const question = this.questionService.getNextQuestion();
            console.info("Fetched Question..." + question);
            this.questionWrapper = {question: question};
            this.questions.push(this.questionWrapper);
        }
    }

    showResult(): void {
        const navigationExtras: NavigationExtras = {
            queryParams: {
                questions: JSON.stringify(this.questions)
            }
        };
        this.router.navigate(["home/result"], navigationExtras);
    }

    isLastQuestion(): boolean {
        return this.questionNumber === this.totalQuestions;
    }

    isFirstQuestion(): boolean {
        return this.questionNumber === 1;
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
