import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { HomeComponent } from "./home.component";
import { DetailedResultComponent } from "./questions/detailed.result.component";
import { ResultComponent } from "./questions/result.component";

const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "result", component: ResultComponent},
    {path: "detail", component: DetailedResultComponent}
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class HomeRoutingModule {
}
