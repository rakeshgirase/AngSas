import {NgModule} from "@angular/core";
import {Routes} from "@angular/router";
import {NativeScriptRouterModule} from "nativescript-angular/router";
import {ResultComponent} from "./home/questions/result.component";
import {DetailedResultComponent} from "./home/questions/detailed.result.component";

const routes: Routes = [
    {path: "", redirectTo: "/main/main", pathMatch: "full"},
    {path: "main/:mode", loadChildren: "./home/home.module#HomeModule"},
    {path: "short", loadChildren: "./browse/browse.module#BrowseModule"},
    {path: "practice", loadChildren: "./search/search.module#SearchModule"},
    {path: "featured", loadChildren: "./featured/featured.module#FeaturedModule"},
    {path: "settings", loadChildren: "./settings/settings.module#SettingsModule"}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {
}
