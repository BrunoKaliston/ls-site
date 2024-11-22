import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";

import {ContactPageComponent} from './contact-page/contact-page.component';
import {SharedModule} from "../shared/shared.module";

@NgModule({
    declarations: [
        ContactPageComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        SharedModule,
    ]
})
export class ContactModule {
}
