import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";

import {MenuPageComponent} from './menu-page/menu-page.component';
import {MenuPageOpenComponent} from "./menu-page-open/menu-page-open.component";
import {SharedModule} from "../shared/shared.module";

@NgModule({
    declarations: [
        MenuPageComponent,
        MenuPageOpenComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        SharedModule
    ]
})
export class MenuModule {
}
