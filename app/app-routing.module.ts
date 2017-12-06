import {NgModule} from "@angular/core";
import {Routes} from "@angular/router";
import {NativeScriptRouterModule} from "nativescript-angular/router";
import {ResultComponent} from "./exam/questions/result.component";
import {DetailedResultComponent} from "./exam/questions/detailed.result.component";

const routes: Routes = [
    {path: "", redirectTo: "/exam/main", pathMatch: "full"},
    {path: "exam/:mode", loadChildren: "./exam/exam.module#ExamModule"},
    {path: "exam/short", loadChildren: "./browse/browse.module#BrowseModule"},
    {path: "exam/practice", loadChildren: "./search/search.module#SearchModule"},
    //{path: "featured", loadChildren: "./featured/featured.module#FeaturedModule"},
    {path: "settings", loadChildren: "./settings/settings.module#SettingsModule"}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {
}
