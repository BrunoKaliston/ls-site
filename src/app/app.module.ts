import {NgModule} from '@angular/core';
import {BrowserModule, provideClientHydration} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";

import {AppComponent} from './app.component';
import {AboutModule} from "./about/about.module";
import {AngularSvgIconModule} from "angular-svg-icon";
import {ContactModule} from "./contact/contact.module";
import {HomeModule} from "./home/home.module";
import {ProductModule} from "./product/product.module";
import {NotFoundModule} from "./not-found/not-found.module";
import {PrivacityModule} from "./privacity/privacity.module";
import {QuoteModule} from "./quote/quote.module";
import {SharedModule} from "./shared/shared.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        AboutModule,
        ContactModule,
        HomeModule,
        ProductModule,
        NotFoundModule,
        PrivacityModule,
        QuoteModule,
        SharedModule,
        HttpClientModule,
        AngularSvgIconModule.forRoot()
    ],
    providers: [provideClientHydration()],
    bootstrap: [AppComponent]
})
export class AppModule {
}
