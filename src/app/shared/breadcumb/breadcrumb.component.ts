import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

    @Input() color: string = 'cl-style-detail-lt';

    public urlList: object[] = [];

    private titleRefer: object = {
        home: "Home",
        lentrecote: "A LS",
        cardapio: "Cardápio",
        contato: "Fale Conosco",
        entradas: 'Entradas',
        principal: 'Menu Principal',
        sobremesas: 'Sobremesas',
        bebidas: 'Bebidas',
    }

    constructor(
        private router: Router
    ) {}

    ngOnInit() {
        const currentUrl = this.router.url;
        this.urlList = [];
        currentUrl.split('/').forEach(item => {
            if (item != '' && !item.includes('-')) {
                this.urlList.push({
                    url: '/' + item,
                    title: this.titleRefer[item]
                })
            }
            if (item.includes('-')) {
                this.urlList.push({
                    url: '/' + item.split('-')[0],
                    title: this.titleRefer[item.split('-')[0]]
                })
                this.urlList.push({
                    url: '/' + item.split('-')[1],
                    title: this.titleRefer[item.split('-')[1]]
                })
            }
        })

    }
}
