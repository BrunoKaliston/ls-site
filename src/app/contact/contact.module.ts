import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";

import {ContactPageComponent} from './contact-page/contact-page.component';
import {SharedModule} from "../shared/shared.module";

@NgModule({
    declarations: [
        ContactPageComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        SharedModule,
    ]
})
export class ContactModule {
}
