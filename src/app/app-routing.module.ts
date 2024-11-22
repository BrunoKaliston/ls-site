import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AboutPageComponent} from "./about/about-page/about-page.component";
import {HomePageComponent} from "./home/home-page/home-page.component";
import {MenuPageComponent} from "./menu/menu-page/menu-page.component";
import {MenuPageOpenComponent} from "./menu/menu-page-open/menu-page-open.component";
import {NotFoundPageComponent} from "./not-found/not-found-page/not-found-page.component";
import {ContactPageComponent} from "./contact/contact-page/contact-page.component";

const routes: Routes = [
    {path: '',  component: HomePageComponent},
    // quemsomos
    // produtos
    // contato
    // orçamento
    // privacidade
    {path: 'quemsomos', component: AboutPageComponent},
    {path: 'quemsomos/', component: AboutPageComponent},
    {path: 'contato',  component: ContactPageComponent},
    {path: 'contato/',  component: ContactPageComponent},

    {path: 'cardapio', component: MenuPageComponent},
    {path: 'cardapio/', component: MenuPageComponent},
    {path: 'cardapio-entradas', component: MenuPageOpenComponent},
    {path: 'cardapio-entradas/', component: MenuPageOpenComponent},
    {path: 'cardapio-principal', component: MenuPageOpenComponent},
    {path: 'cardapio-principal/', component: MenuPageOpenComponent},
    {path: 'cardapio-sobremesas', component: MenuPageOpenComponent},
    {path: 'cardapio-sobremesas/', component: MenuPageOpenComponent},
    {path: 'cardapio-bebidas', component: MenuPageOpenComponent},
    {path: 'cardapio-bebidas/', component: MenuPageOpenComponent},
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
