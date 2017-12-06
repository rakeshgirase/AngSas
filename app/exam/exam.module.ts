import {NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import {NativeScriptModule} from "nativescript-angular/nativescript.module";

import {SharedModule} from "../shared/shared.module";
import {ExamRoutingModule} from "./exam-routing.module";
import {ExamComponent} from "./exam.component";
import {ResultComponent} from "./questions/result.component";
import {DetailedResultComponent} from "./questions/detailed.result.component";

@NgModule({
    imports: [
        NativeScriptModule,
        ExamRoutingModule,
        SharedModule
    ],
    declarations: [
        ExamComponent,
        ResultComponent,
        DetailedResultComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ExamModule { }
