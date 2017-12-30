import {Injectable, OnInit} from "@angular/core";
import * as appSettings from "application-settings";
import {IQuestion, ISetting, State} from "../exam/questions/questions.model";

/**
 * Created by rakesh on 15-Nov-2017.
 */
const SETTINGS = "SETTINGS";

@Injectable()
export class SettingsService {
    static VERSION_NUMBER: number = 2;
    static VERSION: string = "VERSION";
    static MAIN: string = "main";
    static SHORT: string = "short";
    static QUESTIONS: string = "questions";
    DEFAULT_SETTING: ISetting = {totalQuestionsMain: 67, totalQuestionsShort: 15};
    private DEFAULT_STATE: State = {questions: [], questionNumber: 0, totalQuestions: 15};
    DEFAULT_MAIN_STATE: State = {
        questions: [],
        questionNumber: 0,
        totalQuestions: this.DEFAULT_SETTING.totalQuestionsMain
    };

    private DEFAULT_SHORT_STATE: State = {
        questions: [],
        questionNumber: 0,
        totalQuestions: this.DEFAULT_SETTING.totalQuestionsShort
    };

    createSetting(): void {
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
            state = appSettings.hasKey(mode) ? JSON.parse(appSettings.getString(mode)) : this.DEFAULT_STATE;
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

    clearAll(): void {
        if(!appSettings.hasKey(SettingsService.VERSION) || appSettings.getNumber(SettingsService.VERSION) < SettingsService.VERSION_NUMBER){
            this.clearCache(SettingsService.MAIN);
            this.clearCache(SettingsService.SHORT);
            this.clearCache(SettingsService.QUESTIONS);
        }
        appSettings.setNumber(SettingsService.VERSION, SettingsService.VERSION_NUMBER);
    }

    saveSetting(setting: ISetting) {
        const newSetting: string = JSON.stringify(setting);
        appSettings.setString(SETTINGS, newSetting);
        let state: State = this.readCache(SettingsService.MAIN);
        if (setting.totalQuestionsMain > state.totalQuestions) {
            state.totalQuestions = setting.totalQuestionsMain;
            this.saveCache(SettingsService.MAIN, state);
        }
        state = this.readCache(SettingsService.SHORT);
        if (setting.totalQuestionsMain > state.totalQuestions) {
            state.totalQuestions = setting.totalQuestionsShort;
            this.saveCache(SettingsService.SHORT, state)
        }
    }

    saveQuestions(questions: Array<IQuestion>): void {
        const json: string = JSON.stringify(questions);
        appSettings.setString(SettingsService.QUESTIONS, json);
    }

    readQuestions(): Array<IQuestion> {
        let questions: Array<IQuestion>;
        try {
            questions = this.hasQuestions() ? JSON.parse(appSettings.getString(SettingsService.QUESTIONS)) : [];
        } catch (error) {
            questions = [];
        }
        return questions;
    }

    hasQuestions(): boolean {
        return appSettings.hasKey(SettingsService.QUESTIONS);
    }
}
