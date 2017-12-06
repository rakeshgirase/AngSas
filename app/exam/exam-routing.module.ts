import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { ExamComponent } from "./exam.component";
import { DetailedResultComponent } from "./questions/detailed.result.component";
import { ResultComponent } from "./questions/result.component";

const routes: Routes = [
    {path: "", component: ExamComponent},
    {path: "result", component: ResultComponent},
    {path: "detail", component: DetailedResultComponent}
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class ExamRoutingModule {
}
