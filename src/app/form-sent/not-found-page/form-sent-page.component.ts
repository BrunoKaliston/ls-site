import { Component } from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";
import {Router} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-form-sent-page',
  templateUrl: './form-sent-page.component.html',
  styleUrls: ['./form-sent-page.component.scss']
})
export class FormSentPageComponent {

    constructor(
        private locationNav: Location,
        private router: Router,
        private meta: Meta,
        private title: Title
    ) {
        const navigation = this.router.getCurrentNavigation();
        if (!navigation || !navigation.extras || !navigation.extras.state && navigation.extras.state['success'] != 1) {
            this.locationNav.back();
        }
        this.meta.updateTag({name:"description", content:"LS estruturas solares | Mensagem enviada com Sucesso! Em breve entraremos em contato."})
        this.meta.updateTag({property:"og:description", content:"LS estruturas solares | Mensagem enviada com Sucesso! Em breve entraremos em contato."})
        this.meta.updateTag({property:"og:title", content:"LS estruturas solares | Mensagem enviada com Sucesso" })
        this.title.setTitle("LS estruturas solares | Mensagem enviada com Sucesso")
    }
}
