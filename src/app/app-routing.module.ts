import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AboutPageComponent} from "./about/about-page/about-page.component";
import {ContactPageComponent} from "./contact/contact-page/contact-page.component";
import {HomePageComponent} from "./home/home-page/home-page.component";
import {NotFoundPageComponent} from "./not-found/not-found-page/not-found-page.component";
import {PrivacityPageComponent} from "./privacity/privacity-page/privacity-page.component";
import {ProductPageComponent} from "./product/product-page/product-page.component";
import {QuotePageComponent} from "./quote/quote-page/quote-page.component";

const routes: Routes = [
    {path: '',  component: HomePageComponent},
    {path: 'contato',  component: ContactPageComponent},
    {path: 'contato/',  component: ContactPageComponent},
    {path: 'orcamento',  component: QuotePageComponent},
    {path: 'orcamento/',  component: QuotePageComponent},
    {path: 'privacidade',  component: PrivacityPageComponent},
    {path: 'privacidade/',  component: PrivacityPageComponent},
    // {path: 'produtos', component: ProductPageComponent},
    // {path: 'produtos/', component: ProductPageComponent},
    {path: 'quemsomos', component: AboutPageComponent},
    {path: 'quemsomos/', component: AboutPageComponent},
    {path: '404', component: NotFoundPageComponent},
    {path: '404/', component: NotFoundPageComponent},
    {path: '**', pathMatch: 'full', redirectTo: '404', data:{skipLocationChange: true }},
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        initialNavigation: 'enabledBlocking',
        onSameUrlNavigation: 'reload',
        scrollPositionRestoration: 'top',
    })],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
