import {NgModule} from '@angular/core';
import {AngularSvgIconModule} from "angular-svg-icon";
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";

import {BreadcrumbComponent} from './breadcumb/breadcrumb.component';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from "./header/header.component";
import {PhotoSectionComponent} from "./photo-section/photo-section.component";
import {ProductSectionComponent} from "./product-section/product-section.component";
import {SvgComponent} from './svg/svg.component';
import {CarouselModule} from "ngx-owl-carousel-o";
import {WhatsHopperComponent} from "./whats-hopper/whats-hopper.component";

@NgModule({
    declarations: [
        BreadcrumbComponent,
        FooterComponent,
        HeaderComponent,
        PhotoSectionComponent,
        ProductSectionComponent,
        SvgComponent,
        WhatsHopperComponent
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        SvgComponent,
        BreadcrumbComponent,
        ProductSectionComponent,
        PhotoSectionComponent,
        WhatsHopperComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        AngularSvgIconModule,
        CarouselModule
    ]
})
export class SharedModule {
}
