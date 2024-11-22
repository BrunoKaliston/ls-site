import { Component } from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

    constructor(
        private meta: Meta,
        private title: Title
    ) {
        this.meta.updateTag({name:"description", content:"LS estruturas solares | Sinta o sabor de Paris em cada pedacinho do nosso delicioso entrecôte e surpreenda-se com a suculência do corte, crocância das batatas fritas e o sabor incomparável do nosso molho que, apesar de ser uma receita secreta, todos já sabem: é maravilhoso!"})
        this.meta.updateTag({property:"og:description", content:"LS estruturas solares | Sinta o sabor de Paris em cada pedacinho do nosso delicioso entrecôte e surpreenda-se com a suculência do corte, crocância das batatas fritas e o sabor incomparável do nosso molho que, apesar de ser uma receita secreta, todos já sabem: é maravilhoso!"})
        this.meta.updateTag({property:"og:title", content:"LS estruturas solares | o verdadeiro sabor de paris"})
        this.title.setTitle("LS estruturas solares | o verdadeiro sabor de paris")
    }
}
