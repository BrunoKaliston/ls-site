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
        {costumers: 1, category: 'sobremesas', delivery: true, photoUrl: 'assets/img/produtos/sobremesa-marquise-chocolat.avif', title: 'Marquise au Chocolat', description:'Um delicioso mousse de chocolate belga, aromatizado com café, cobertura de calda de cacau com mini trufas de chocolate.'},
        {category: 'bebidas', delivery: true, photoUrl: null, title: 'Branco Moscato 200 ml', description:'Uma Taça de vinho da casa servida em uma elegante garrafinha de 200 ml.'},
        {category: 'entradas', delivery: true, photoUrl: 'assets/img/produtos/entrada-burrata-bufula.avif', title: 'Burrata de Búfula', description: 'Burrata de búfula artesanal servida sobre uma cama de tomates cereja assados acompanhada de torradas e molho pesto.'},
        {costumers: 1, category: 'principal', delivery: true, photoUrl: 'assets/img/produtos/principal-executive.avif', title: 'Executive: Steak de Carne com Batatas Fritas e Molho Secreto', description:'150 gramas de proteína, um suculento corte de carne nobre in natura (crua), grelhado à perfeição no ponto de sua preferência. Servido com batatas fritas e acompanhadas do nosso delicioso e exclusivo molho secreto 80 ml. - Relação Peso in natura x peso grelhado Batatas fritas 300 gramas (peso in natura) Steak de Carne 150 gramas de proteína in natura (crua). Todos os nossos produtos com descrição de peso, são pesados Crus (in natura) e sofrem alterações em seu peso e tamanho após ser grelhado, quanto mais passar o ponto, mais perderá a gramatura.'},
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
        const referArray: object = {entradas: 'Entradas', principal: 'Menu Principal', sobremesas: 'Sobremesas', bebidas: 'Bebidas'}
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
