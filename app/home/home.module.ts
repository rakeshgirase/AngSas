import {NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import {NativeScriptModule} from "nativescript-angular/nativescript.module";

import {SharedModule} from "../shared/shared.module";
import {HomeRoutingModule} from "./home-routing.module";
import {HomeComponent} from "./home.component";
import {ResultComponent} from "./questions/result.component";
import {DetailedResultComponent} from "./questions/detailed.result.component";

@NgModule({
    imports: [
        NativeScriptModule,
        HomeRoutingModule,
        SharedModule
    ],
    declarations: [
        HomeComponent,
        ResultComponent,
        DetailedResultComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class HomeModule { }
