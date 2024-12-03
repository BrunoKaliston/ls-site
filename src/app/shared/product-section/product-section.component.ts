import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-section',
  templateUrl: './product-section.component.html',
  styleUrls: ['./product-section.component.scss']
})
export class ProductSectionComponent {

    public menuCategoryList: object[] = [
        {url: '/orcamento', title: 'Estrutura 1'},
        {url: '/orcamento', title: 'Estrutura 2'},
        {url: '/orcamento', title: 'Emenda'},
        {url: '/orcamento', title: 'Suporte medidor'},
    ]

    constructor() {}

}
