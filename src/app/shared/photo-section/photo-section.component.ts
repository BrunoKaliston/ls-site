import {Component, OnInit} from '@angular/core';
import {OwlOptions} from "ngx-owl-carousel-o";

@Component({
    selector: 'app-photo-section',
    templateUrl: './photo-section.component.html',
    styleUrls: ['./photo-section.component.scss']
})
export class PhotoSectionComponent implements OnInit {

    public photoList: object[] = [
        {imgSrc: '../assets/img/photo-1.avif'},
        {imgSrc: '../assets/img/photo-2.avif'},
        {imgSrc: '../assets/img/photo-3.avif'},
        {imgSrc: '../assets/img/photo-4.avif'},
        {imgSrc: '../assets/img/photo-5.avif'},
        {imgSrc: '../assets/img/photo-6.avif'},
        {imgSrc: '../assets/img/photo-7.avif'},
        {imgSrc: '../assets/img/photo-8.avif'},
    ];

    public carouselOptions: OwlOptions = {
        loop: true,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: false,
        dots: false,
        navSpeed: 500,
        navText: ['', ''],
        responsive: {
            0: {items: 1},
            500: {items: 2},
            700: {items: 3},
            990: {items: 4},
            1081: {items: 5}
        },
        margin: 10
    }
    public generationList: object[] = [
        {imgSrc: 'assets/img/site/generation-icon-1.avif', externalUrl: 'https://mkt.goakira.com.br/formatacao-franquias', title: 'Formatação de Franquias', text: 'Transforme o seu negócio em uma franquia de sucesso.',},
        {imgSrc: 'assets/img/site/generation-icon-2.avif', externalUrl: 'https://goakira.com.br/expansao-terceirizada', title: 'Expansão de Franquias', text: 'Cresça de forma estruturada e organizada.',},
        {imgSrc: 'assets/img/site/generation-icon-3.avif', externalUrl: 'https://mkt.goakira.com.br/geomarketing', title: 'Estudo de Geomarketing', text: 'Encontre o ponto comercial ideal para o seu negócio.',},
        {imgSrc: 'assets/img/site/generation-icon-4.avif', externalUrl: 'https://goakiradesign.com/', title: 'Arquitetura Comercial e Corporativa', text: 'Tenha um projeto arquitetônico que aumente suas vendas.',},
        {imgSrc: 'assets/img/site/generation-icon-5.avif', externalUrl: 'https://goakira.com.br/cursos-e-treinamentos', title: 'Educação Corporativa', text: 'Treine seu time com a Goakira.',},
    ];

    constructor() {
        this.carouselOptions.nav = true;
    }

    ngOnInit(): void {}

}
