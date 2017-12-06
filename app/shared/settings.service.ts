import {Injectable, OnInit} from "@angular/core";
import * as appSettings from "application-settings";
import {ISetting, State} from "../home/questions/questions.model";

/**
 * Created by rakesh on 15-Nov-2017.
 */
const SETTINGS = "SETTINGS";

@Injectable()
export class SettingsService {
    DEFAULT_SETTING: ISetting = {totalQuestionsMain: 3, totalQuestionsShort: 3};
    private DEFAULT_STATE: State = {questions: [], questionNumber: 0, totalQuestions: 3 };

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

    readCache(mode: string): State {
        let state: State;
        try {
            state = appSettings.hasKey(mode) ? JSON.parse(appSettings.getString(mode)) :
                this.DEFAULT_STATE;
        } catch (error) {
            state = this.DEFAULT_STATE;
        }
        return state;
    }

    saveCache(mode:string, state:State):void{
        const newState: string = JSON.stringify(state);
        appSettings.setString(mode, newState);
    }

    clearCache(mode:string):void{
        appSettings.remove(mode);
    }


    saveSetting(setting: ISetting) {
        const newSetting: string = JSON.stringify(setting);
        appSettings.setString(SETTINGS, newSetting);
    }

}
