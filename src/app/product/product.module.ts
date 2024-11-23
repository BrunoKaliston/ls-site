import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";

import {ProductPageComponent} from './product-page/product-page.component';
import {ProductPageOpenComponent} from "./product-page-open/product-page-open.component";
import {SharedModule} from "../shared/shared.module";

@NgModule({
    declarations: [
        ProductPageComponent,
        ProductPageOpenComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        SharedModule
    ]
})
export class ProductModule {
}
