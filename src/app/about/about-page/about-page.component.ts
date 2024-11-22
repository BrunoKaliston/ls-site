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
        this.meta.updateTag({name:"description", content:"LS estruturas solares | O L’Entrecôte de Paris é um restaurante com prato único. Isto mesmo, apenas um único prato é servido todos os dias, semanas, meses e anos em nossos restaurantes."})
        this.meta.updateTag({property:"og:description", content:"LS estruturas solares | O L’Entrecôte de Paris é um restaurante com prato único. Isto mesmo, apenas um único prato é servido todos os dias, semanas, meses e anos em nossos restaurantes."})
        this.meta.updateTag({property:"og:title", content:"LS estruturas solares | Quem somos" })
        this.title.setTitle("LS estruturas solares | Quem somos")
    }

}
