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
        {url: '/produtos-estrutura1', title: 'Estrutura 1'},
        {url: '/produtos-estrutura2', title: 'Estrutura 2'},
        {url: '/produtos-emenda', title: 'Emenda'},
        {url: '/produtos-suportemedidor', title: 'Suporte medidor'},
    ]

}
