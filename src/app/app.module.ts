import {NgModule} from '@angular/core';
import {BrowserModule, provideClientHydration} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";

import {AppComponent} from './app.component';
import {AboutModule} from "./about/about.module";
import {AngularSvgIconModule} from "angular-svg-icon";
import {HomeModule} from "./home/home.module";
import {MenuModule} from "./menu/menu.module";
import {NotFoundModule} from "./not-found/not-found.module";
import {SharedModule} from "./shared/shared.module";
import {ContactModule} from "./contact/contact.module";

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AboutModule,
        ContactModule,
        HomeModule,
        MenuModule,
        NotFoundModule,
        SharedModule,
        HttpClientModule,
        AngularSvgIconModule.forRoot()
    ],
    providers: [provideClientHydration()],
    bootstrap: [AppComponent]
})
export class AppModule {
}
