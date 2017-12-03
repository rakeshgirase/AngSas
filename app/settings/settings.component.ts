import { Component, OnInit, ViewChild } from "@angular/core";
import { DrawerTransitionBase, SlideInOnTopTransition } from "nativescript-pro-ui/sidedrawer";
import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";
import { ISetting } from "../home/questions/questions.model";
import { SettingsService } from "../shared/settings.service";

@Component({
    selector: "Settings",
    moduleId: module.id,
    templateUrl: "./settings.component.html"
})
export class SettingsComponent implements OnInit {
    /* ***********************************************************
    * Use the @ViewChild decorator to get a reference to the drawer component.
    * It is used in the "onDrawerButtonTap" function below to manipulate the drawer.
    *************************************************************/
    @ViewChild("drawer") drawerComponent: RadSideDrawerComponent;

    private _sideDrawerTransition: DrawerTransitionBase;
    private _setting: ISetting;

    constructor(private settingsService: SettingsService) {
    }

    /* ***********************************************************
    * Use the sideDrawerTransition property to change the open/close animation of the drawer.
    *************************************************************/
    ngOnInit(): void {
        this._sideDrawerTransition = new SlideInOnTopTransition();
        this._setting = this.settingsService.readSettings();
    }

    get sideDrawerTransition(): DrawerTransitionBase {
        return this._sideDrawerTransition;
    }

    /* ***********************************************************
    * According to guidelines, if you have a drawer on your page, you should always
    * have a button that opens it. Use the showDrawer() function to open the app drawer section.
    *************************************************************/
    onDrawerButtonTap(): void {
        this.drawerComponent.sideDrawer.showDrawer();
    }

    get totalQuestionsMain(): number {
        console.info("Inside Get Main");

        return this._setting.totalQuestionsMain;
    }

    set totalQuestionsMain(value: number) {
        console.info("Inside Set Main");
        // force iOS UISlider to work with discrete steps
        this._setting.totalQuestionsMain = Math.round(value);
    }

    get totalQuestionsShort(): number {
        console.info("Inside Get Custom");
        // force iOS UISlider to work with discrete steps

        return this._setting.totalQuestionsShort;
    }

    set totalQuestionsShort(value: number) {
        console.info("Inside Set Custome");
        // force iOS UISlider to work with discrete steps
        this._setting.totalQuestionsShort = Math.round(value);
    }

    get setting(): ISetting {
        return this._setting;
    }

    set setting(setting: ISetting) {
        this._setting = setting;
    }

    save(): void {
        console.info("Saved");
        this.settingsService.saveSetting(this._setting);
    }
}
