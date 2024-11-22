import {Component, HostListener, OnInit} from '@angular/core';
import {Meta} from "@angular/platform-browser";
import {Router} from "@angular/router";
import {HeadService} from "./services/head/head.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

    private scrollY: number = 0;

    constructor(
        private meta: Meta,
        private router: Router,
        private headService: HeadService
    ) {
        this.meta.updateTag({property:"author", content:"Hexah Digital - https://www.hexah.com.br"});
        this.meta.updateTag({rel:"canonical", content: 'https://ls.aqis.com.br'})
        this.meta.updateTag({property:"copyright", content: "LS estruturas solares - 2025"});
        this.meta.updateTag({property:"googlebot", content:"INDEX, FOLLOW"});
        this.meta.updateTag({property:"robots", content:"INDEX, FOLLOW"});
        this.meta.updateTag({property:"og:image", content:"https://www.ls.aqis.com.br/assets/img/lentreconte-site.avif"})
        this.meta.updateTag({property:"og:image:width", content: '1505'})
        this.meta.updateTag({property:"og:image:height", content: '873'})
        this.meta.updateTag({property:"og:keywords", content:"LS, ls, estruturas solares, placas solares"})
        this.meta.updateTag({property:"og:locale", content:"pt_BR" })
        this.meta.updateTag({property:"og:locale:alternate", content:"en_GB"})
        this.meta.updateTag({property:'og:site_name', content: "LS estruturas solares"})
        this.meta.updateTag({property:"og:type", content:"website"})
    }

    ngOnInit(): void {
        this.router.events.subscribe({next: (t) => {
                if (t.type == 14) {
                    this.headService.setUrl(this.router.url.slice(1));
                }
            }})
    }

    @HostListener('window:scroll', ['$event'])
    WindowScrollEvent(event: KeyboardEvent) {
        this.scrollY = window.scrollY
        const fadeList = document.querySelectorAll("[class*=fade]:not(.off),[class*=slide]:not(.off)");
        const endScreen = window.innerHeight*0.99;
        fadeList.forEach(item => {
            if (item.getBoundingClientRect().top < endScreen && !item.classList.contains('idle')) {
                item.classList.add('off');
                return;
            }
            if (item.getBoundingClientRect().top > 0 && !item.classList.contains('idle')) {
                item.classList.add('idle');
            }
            if (item.getBoundingClientRect().top < endScreen && item.classList.contains('idle')) {
                item.classList.remove('idle');
                item.classList.add('off');
            }
        })
    }


    pageNotFound(): boolean {
        return this.router.url === '/404'
    }

    showScrollUp(): boolean {
        return  this.scrollY > 0;
    }
    scrollUp(): void {
        window.scroll({top: 0, left: 0, behavior: 'smooth'});
    }
}
