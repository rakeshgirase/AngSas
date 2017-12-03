import { Injectable, OnInit } from "@angular/core";
import * as appSettings from "application-settings";
import { ISetting } from "../home/questions/questions.model";
/**
 * Created by rakesh on 15-Nov-2017.
 */
const SETTINGS = "SETTINGS";

@Injectable()
export class SettingsService {
    DEFAULT_SETTING: ISetting = {totalQuestionsMain: 67, totalQuestionsShort: 10};

    readSettings(): ISetting {
        let setting: ISetting;
        try {
            setting = appSettings.hasKey(SETTINGS) ? JSON.parse(appSettings.getString(SETTINGS)) :
                this.DEFAULT_SETTING;
        } catch (error) {
            setting = this.DEFAULT_SETTING;
        }

        return setting;
    }

    saveTotalQuestions(totalQuestions: number): void {
        appSettings.setNumber(SETTINGS, totalQuestions);
    }

    saveSetting(setting: ISetting) {
        const newSetting: string = JSON.stringify(setting);
        appSettings.setString(SETTINGS, newSetting);
    }

}
