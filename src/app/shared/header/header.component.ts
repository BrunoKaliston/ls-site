import {Component, ElementRef, HostListener, Inject, Renderer2, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {DOCUMENT} from "@angular/common";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

    public menuList: { externalUrl?: string, url?: string, title: string }[] = [
        {url: '/', title: "Home"},
        {url: '/quemsomos', title: 'Quem somos'},
        {url: '/produtos', title: 'Produtos'},
        {url: '/contato', title: 'Contato'},
        {url: '/orcamento', title: 'Orçamento'},
        {url: '/privacidade', title: 'Política de Privacidade'},
    ];

    private currentPageIndex: number = null;
    private menuActive: boolean = false;
    private pageIsMobile: boolean = false;

    @ViewChild ('nav',{static: false}) nav : ElementRef;
    @ViewChild ('btnMob',{static: false}) btnMob : ElementRef;

    constructor(
        @Inject(DOCUMENT)
        private dom,
        private renderer: Renderer2,
        private router: Router
    ) {
        this.renderer.listen('window','click',(e:Event) => {
            if (this.isMobilePage()) {
                if (this.nav.nativeElement.contains(e.target) || this.btnMob.nativeElement.contains(e.target)) {
                    this.showMenu();
                } else {
                    this.hideMenu();
                }
            }
        });
    }

    @HostListener('window:resize', ['$event']) onWindowResize() {
        this.pageIsMobile = window.innerWidth <= 1010;
    }

    ngOnInit(): void {
        this.router.events.subscribe({next: () => {
            this.setCurrentPageActive(this.router.url);
        }})
        this.setCurrentPageActive(this.router.url);
        this.pageIsMobile = window.innerWidth <= 960;
    }

    getHeaderClass(): string {
        return this.router.url === '/' ? 'home-page' : ''
    }

    setCurrentPageActive(url:string): void {
        let index = this.menuList.findIndex(item => item['url'] == url)
        if (url.includes('cardapio')){
            index = 2;
        }
        this.currentPageIndex = index;
    }
    getCurrentPageIndex(): number {
        return this.currentPageIndex;
    }
    setCurrentPageIndex(menuItemIndex) {
        this.currentPageIndex = menuItemIndex;
    }

    isMobilePage(): boolean {
        return this.pageIsMobile
    }

    showMenu(): void {
        this.menuActive = this.isMobilePage() ? !this.menuActive : false;
    }
    menuIsActive(): boolean {
        return this.menuActive;
    }
    hideMenu(): void {
        this.menuActive = false;
    }
}
