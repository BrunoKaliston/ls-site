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
        this.meta.updateTag({name:"description", content:"LS estruturas solares | Entregue ao seu cliente uma solução completa e confiável. Somos referência em estruturas solares."})
        this.meta.updateTag({property:"og:description", content:"LS estruturas solares | Entregue ao seu cliente uma solução completa e confiável. Somos referência em estruturas solares."})
        this.meta.updateTag({property:"og:title", content:"LS estruturas solares | Uma solução completa e confiável"})
        this.title.setTitle("LS estruturas solares | Uma solução completa e confiável")
    }
}
