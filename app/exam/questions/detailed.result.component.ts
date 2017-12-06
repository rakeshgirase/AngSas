/**
 * Created by rakesh on 20-Nov-2017.
 */
import {Component, OnInit, ViewChild} from "@angular/core";
import {IOption, IQuestionWrapper} from "./questions.model";
import {PageRoute} from "nativescript-angular/router";
import "rxjs/add/operator/switchMap";
import {ActivatedRoute} from "@angular/router";
import {RadSideDrawerComponent} from "nativescript-pro-ui/sidedrawer/angular";

@Component({
    selector: "show/detail",
    moduleId: module.id,
    templateUrl: "./detailed.result.component.html"
})
export class DetailedResultComponent {

    @ViewChild("drawer") drawerComponent: RadSideDrawerComponent;

    private questions: Array<IQuestionWrapper>;

    constructor(private route: ActivatedRoute) {
        this.route.queryParams.subscribe((params) => {
            this.questions = JSON.parse(params["questions"]);
        });
    }

    getColor(questionWrapper: IQuestionWrapper, option: IOption): string {
        let color: string;
        if (questionWrapper.selectedOption && (option.tag === questionWrapper.selectedOption.tag)) {
            if (option.correct) {
                color = "green";
            } else {
                color = "red";
            }
        } else if (option.correct) {
            color = "lightgreen";
        }
        return color;
    }

    onDrawerButtonTap(): void {
        this.drawerComponent.sideDrawer.showDrawer();
    }

}