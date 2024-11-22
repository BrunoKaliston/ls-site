import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";

import {NotFoundPageComponent} from './not-found-page/not-found-page.component';
import {SharedModule} from "../shared/shared.module";

@NgModule({
    declarations: [
        NotFoundPageComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        SharedModule
    ]
})
export class NotFoundModule {
}
