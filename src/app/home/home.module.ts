import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomePageComponent} from './home-page/home-page.component';
import {SharedModule} from "../shared/shared.module";
import {RouterModule} from "@angular/router";

@NgModule({
    declarations: [
        HomePageComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        SharedModule
    ]
})
export class HomeModule {
}
