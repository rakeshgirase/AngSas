import {Injectable, OnInit} from "@angular/core";
import * as appSettings from "application-settings";
import {ISetting, State} from "../exam/questions/questions.model";

/**
 * Created by rakesh on 15-Nov-2017.
 */
const SETTINGS = "SETTINGS";

@Injectable()
export class SettingsService {
    static MAIN:string = "main";
    static SHORT:string = "short";
    DEFAULT_SETTING: ISetting = {totalQuestionsMain: 5, totalQuestionsShort: 3};
    private DEFAULT_STATE: State = {questions: [], questionNumber: 0, totalQuestions: 3};
    private DEFAULT_MAIN_STATE: State = {
        questions: [],
        questionNumber: 0,
        totalQuestions: this.DEFAULT_SETTING.totalQuestionsMain
    };

    private DEFAULT_SHORT_STATE: State = {
        questions: [],
        questionNumber: 0,
        totalQuestions: this.DEFAULT_SETTING.totalQuestionsShort
    };

    createSetting():void{
        if (appSettings.hasKey(SETTINGS)) {
            const cacheSet: ISetting = this.readSettings();
            this.DEFAULT_MAIN_STATE.totalQuestions = cacheSet.totalQuestionsMain;
            this.DEFAULT_SHORT_STATE.totalQuestions = cacheSet.totalQuestionsShort;
        }
        if (!appSettings.hasKey(SettingsService.MAIN)) {
            this.saveCache(SettingsService.MAIN, this.DEFAULT_MAIN_STATE);
        }
        if (!appSettings.hasKey(SettingsService.SHORT)) {
            this.saveCache(SettingsService.SHORT, this.DEFAULT_SHORT_STATE);
        }
    }

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

    saveCache(mode: string, state: State): void {
        const newState: string = JSON.stringify(state);
        appSettings.setString(mode, newState);
    }

    clearCache(mode: string): void {
        appSettings.remove(mode);
    }

    clearAll():void{
        this.clearCache(SettingsService.MAIN);
        this.clearCache(SettingsService.SHORT);
    }


    saveSetting(setting: ISetting) {
        const newSetting: string = JSON.stringify(setting);
        appSettings.setString(SETTINGS, newSetting);
    }

}
