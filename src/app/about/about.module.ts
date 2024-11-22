import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";

import {AboutPageComponent} from "./about-page/about-page.component";
import {SharedModule} from "../shared/shared.module";


@NgModule({
    declarations: [
        AboutPageComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        SharedModule
    ]
})
export class AboutModule {
}
