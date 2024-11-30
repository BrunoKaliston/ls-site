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
        this.meta.updateTag({property:"og:description", content:"LS estruturas solares | Produtos - Entradas, Menu Principal, Sobremesas, Bebidas"})
        this.meta.updateTag({name:"description", content:"LS estruturas solares | Produtos - Entradas, Menu Principal, Sobremesas, Bebidas"})
        this.meta.updateTag({property:"og:title", content:"LS estruturas solares | Produtos - visualizar"})
        this.title.setTitle("LS estruturas solares | Produtos - visualizar")
    }

    public menuCategoryList: object[] = [
        {url:'/produtos-entradas', title: 'Entradas'},
        {url:'/produtos-principal', title: 'Menu Principal'},
        {url:'/produtos-sobremesas', title: 'Sobremesas'},
        {url:'/produtos-bebidas', title: 'Bebidas'},
    ]

}
