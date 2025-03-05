import {Component} from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent {

    constructor(
        private meta: Meta,
        private title: Title,
    ) {
        this.meta.updateTag({name:"description", content:"LS estruturas solares | A LS Estruturas Solares nasceu com o propósito de entregar soluções de qualidade no mercado de energia solar, atendendo à crescente demanda por estruturas robustas e eficientes."})
        this.meta.updateTag({property:"og:description", content:"LS estruturas solares | A LS Estruturas Solares nasceu com o propósito de entregar soluções de qualidade no mercado de energia solar, atendendo à crescente demanda por estruturas robustas e eficientes."})
        this.meta.updateTag({property:"og:title", content:"LS estruturas solares | Quem somos" })
        this.title.setTitle("LS estruturas solares | Quem somos")
    }

}
