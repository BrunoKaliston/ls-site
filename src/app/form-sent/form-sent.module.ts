import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";

import {FormSentPageComponent} from './not-found-page/form-sent-page.component';
import {SharedModule} from "../shared/shared.module";

@NgModule({
    declarations: [
        FormSentPageComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        SharedModule
    ]
})
export class FormSentModule {
}
