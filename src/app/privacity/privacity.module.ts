import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";

import {PrivacityPageComponent} from "./privacity-page/privacity-page.component";
import {SharedModule} from "../shared/shared.module";

@NgModule({
    declarations: [
        PrivacityPageComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        SharedModule
    ]
})
export class PrivacityModule {
}
