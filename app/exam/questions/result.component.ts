/**
 * Created by rakesh on 20-Nov-2017.
 */
import {Component, OnInit, ViewChild} from "@angular/core";
import {IQuestionWrapper} from "./questions.model";
import {PageRoute} from "nativescript-angular/router";
import "rxjs/add/operator/switchMap";
import {ActivatedRoute, NavigationExtras, Router} from "@angular/router";
import {RadSideDrawerComponent} from "nativescript-pro-ui/sidedrawer/angular";
import {AndroidActivityBackPressedEventData, AndroidApplication} from "application";
import * as application from "application";
import * as dialogs from "ui/dialogs";
import {isAndroid} from "platform";

@Component({
    selector: "show/result",
    moduleId: module.id,
    templateUrl: "./result.component.html"
})
export class ResultComponent implements OnInit {

    @ViewChild("drawer") drawerComponent: RadSideDrawerComponent;

    private right: number = 0;
    private wrong: number = 0;
    private totalQuestions: number;
    private mode: string;
    private questions: Array<IQuestionWrapper>;

    constructor(private pageRoute: PageRoute, private route: ActivatedRoute, private router: Router) {
        /*this.pageRoute.activatedRoute
         .switchMap((activatedRoute) => activatedRoute.params)
         .forEach((params) => {
         console.info("Paramuss: " + params.toString());
         });*/
        this.route.queryParams.subscribe((params) => {
            this.questions = JSON.parse(params.questions);
            this.totalQuestions = params.totalQuestions;
            this.mode = params.mode;
            this.calculateResult();
        });
    }

    ngOnInit(): void {
        if (!isAndroid) {
            return;
        }
        application.android.on(AndroidApplication.activityBackPressedEvent, (data: AndroidActivityBackPressedEventData) => {
            console.log("Back Button Pressed!!!!");
            /*if (this.router.isActive("/articles", false)) {
                data.cancel = true; // prevents default back button behavior
                this.logout();
            }*/
            data.cancel = true;


            /*dialogs.alert({
                title: "Your title",
                message: "Your message",
                okButtonText: "Your button text"
            }).then(() => {
                console.log("Dialog closed!");
            });*/
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
    }

    showDetailedResult(): void {
        const navigationExtras: NavigationExtras = {
            queryParams: {
                questions: JSON.stringify(this.questions)
            }
        };
        this.router.navigate(["exam/show/detail"], navigationExtras);
    }

    onDrawerButtonTap(): void {
        this.drawerComponent.sideDrawer.showDrawer();
    }
}