import { Component } from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrls: ['./not-found-page.component.scss']
})
export class NotFoundPageComponent {

    constructor(
        private meta: Meta,
        private title: Title
    ) {
        this.meta.updateTag({name:"description", content:"LS estruturas solares | Ops, página não encontrada! A página que você procura não existe ou o endereço foi digitado errado."})
        this.meta.updateTag({property:"og:description", content:"LS estruturas solares | Ops, página não encontrada! A página que você procura não existe ou o endereço foi digitado errado."})
        this.meta.updateTag({property:"og:title", content:"LS estruturas solares | página não encontrada" })
        this.title.setTitle("LS estruturas solares | página não encontrada")
    }
}
