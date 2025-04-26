import {NgModule} from '@angular/core';
import {BrowserModule, provideClientHydration} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import { provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";

import {AppComponent} from './app.component';
import {AboutModule} from "./about/about.module";
import {AngularSvgIconModule} from "angular-svg-icon";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ContactModule} from "./contact/contact.module";
import {FormSentModule} from "./form-sent/form-sent.module";
import {HomeModule} from "./home/home.module";
import {NotFoundModule} from "./not-found/not-found.module";
import {PrivacityModule} from "./privacity/privacity.module";
import {ProductModule} from "./product/product.module";
import {QuoteModule} from "./quote/quote.module";
import {SharedModule} from "./shared/shared.module";
import {WindowRefService} from "./shared/window/window-ref.service";

@NgModule({ declarations: [
        AppComponent,
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        AboutModule,
        ContactModule,
        FormSentModule,
        HomeModule,
        ProductModule,
        NotFoundModule,
        PrivacityModule,
        QuoteModule,
        SharedModule,
        AngularSvgIconModule.forRoot()],
    providers: [
        WindowRefService,
        provideClientHydration(), provideHttpClient(withInterceptorsFromDi())] })
export class AppModule {
}
