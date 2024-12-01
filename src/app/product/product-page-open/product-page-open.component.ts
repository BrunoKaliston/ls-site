import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-product-page-open',
  templateUrl: './product-page-open.component.html',
  styleUrls: ['./product-page-open.component.scss']
})
export class ProductPageOpenComponent {

    public menuList: object[] = []
    public urlRefer: string = ''
    public description: string = ''

    private menuListAll: object[] = [
        {category: 'estrutura1', photoUrl: 'assets/img/photo-1.avif', title: 'Lorem ipsum dolor sit', description: 'Nulla pulvinar urna vel massa tristique porta. Nullam laoreet bibendum libero ac tincidunt. Proin tincidunt at mauris in facilisis. Sed tempor velit ac fringilla porta. Mauris a iaculis augue, sit amet placerat elit. Proin id metus id sem dapibus gravida in quis est. Maecenas semper urna sed magna rutrum feugiat. Etiam eleifend feugiat dui. Ut interdum leo a metus sollicitudin placerat.'},
        {category: 'estrutura2', photoUrl: 'assets/img/photo-1.avif', title: 'Lorem ipsum dolor sit', description: 'Nulla pulvinar urna vel massa tristique porta. Nullam laoreet bibendum libero ac tincidunt. Proin tincidunt at mauris in facilisis. Sed tempor velit ac fringilla porta. Mauris a iaculis augue, sit amet placerat elit. Proin id metus id sem dapibus gravida in quis est. Maecenas semper urna sed magna rutrum feugiat. Etiam eleifend feugiat dui. Ut interdum leo a metus sollicitudin placerat.'},
        {category: 'emenda', photoUrl: 'assets/img/photo-1.avif', title: 'Lorem ipsum dolor sit', description: 'Nulla pulvinar urna vel massa tristique porta. Nullam laoreet bibendum libero ac tincidunt. Proin tincidunt at mauris in facilisis. Sed tempor velit ac fringilla porta. Mauris a iaculis augue, sit amet placerat elit. Proin id metus id sem dapibus gravida in quis est. Maecenas semper urna sed magna rutrum feugiat. Etiam eleifend feugiat dui. Ut interdum leo a metus sollicitudin placerat.'},
        {category: 'suportemedidor', photoUrl: 'assets/img/photo-1.avif', title: 'Lorem ipsum dolor sit', description: 'Nulla pulvinar urna vel massa tristique porta. Nullam laoreet bibendum libero ac tincidunt. Proin tincidunt at mauris in facilisis. Sed tempor velit ac fringilla porta. Mauris a iaculis augue, sit amet placerat elit. Proin id metus id sem dapibus gravida in quis est. Maecenas semper urna sed magna rutrum feugiat. Etiam eleifend feugiat dui. Ut interdum leo a metus sollicitudin placerat.'},
    ];

    constructor(
        private meta: Meta,
        private router: Router,
        private title: Title
    ) {
        this.urlRefer = this.router.url.split('-').reverse()[0];

        this.meta.updateTag({name:"description", content:"LS estruturas solares | Produtos - " + this.urlRefer})
        this.meta.updateTag({property:"og:description", content:"LS estruturas solares | Produtos - " + this.urlRefer})
        this.meta.updateTag({property:"og:title", content:"LS estruturas solares | Produtos de "+ this.urlRefer})
        this.title.setTitle("LS estruturas solares | Produtos de "+ this.urlRefer)

        this.menuList = this.getList(this.urlRefer)
    }

    getDescription(): string {
        const referArray: object = {estrutura1: 'Estrutura 1', estrutura2: 'Estrutura 2', emenda: 'Emenda', suportemedidor: 'Suporte medidor'}
        return referArray[this.urlRefer] || '';
    }

    getList(reference): object[] {
        return  this.menuListAll.filter(item => item['category'] == reference)
    }

    getCostumerText(costumers: number): string {
        const text = costumers.toString() +' pessoas';
        return costumers == 1 ? 'Individual' : text;
    }
}
