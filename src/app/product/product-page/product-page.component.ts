import { Component } from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent {

    constructor(
        private meta: Meta,
        private title: Title
    ) {
        this.meta.updateTag({property:"og:description", content:"LS estruturas solares | Cardápio - Entradas, Menu Principal, Sobremesas, Bebidas"})
        this.meta.updateTag({name:"description", content:"LS estruturas solares | Cardápio - Entradas, Menu Principal, Sobremesas, Bebidas"})
        this.meta.updateTag({property:"og:title", content:"LS estruturas solares | Cardápio - visualizar"})
        this.title.setTitle("LS estruturas solares | Cardápio - visualizar")
    }

    public menuCategoryList: object[] = [
        {url:'/cardapio-entradas', title: 'Entradas'},
        {url:'/cardapio-principal', title: 'Menu Principal'},
        {url:'/cardapio-sobremesas', title: 'Sobremesas'},
        {url:'/cardapio-bebidas', title: 'Bebidas'},
    ]

}
