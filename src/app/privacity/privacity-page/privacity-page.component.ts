import {Component} from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-news-page',
  templateUrl: './privacity-page.component.html',
  styleUrls: ['./privacity-page.component.scss']
})
export class PrivacityPageComponent {

    constructor(
        private meta: Meta,
        private title: Title,
    ) {
        this.meta.updateTag({name:"description", content:"LS estruturas solares | Política de privacidade. A Estruturas Solares valoriza a privacidade de seus usuários e está comprometida em proteger os dados pessoais que você compartilha conosco."})
        this.meta.updateTag({property:"og:description", content:"LS estruturas solares | Política de privacidade. A Estruturas Solares valoriza a privacidade de seus usuários e está comprometida em proteger os dados pessoais que você compartilha conosco."})
        this.meta.updateTag({property:"og:title", content:"LS estruturas solares | Política de privacidade" })
        this.title.setTitle("LS estruturas solares | Política de privacidade")
    }
}
