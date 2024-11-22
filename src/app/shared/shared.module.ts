import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from "./header/header.component";
import {RouterModule} from "@angular/router";
import {SvgComponent} from './svg/svg.component';
import {AngularSvgIconModule} from "angular-svg-icon";
import {BreadcrumbComponent} from './breadcumb/breadcrumb.component';

@NgModule({
    declarations: [
        BreadcrumbComponent,
        FooterComponent,
        HeaderComponent,
        SvgComponent
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        SvgComponent,
        BreadcrumbComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        AngularSvgIconModule
    ]
})
export class SharedModule {
}
