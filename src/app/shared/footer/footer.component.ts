import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

    public menuList: { externalUrl?: string, url?: string, title: string }[] = [
        {url: '/', title: "Home"},
        {url: '/quemsomos', title: 'Quem somos'},
        {url: '/produtos', title: 'Produtos'},
        {url: '/contato', title: 'Contato'},
        {url: '/orcamento', title: 'Orçamento'},
        // {url: '/privacidade', title: 'Política de Privacidade'},
    ];

    private color: string = 'cl-style-lt'

    getCurrentYear(): number {
        let today = new Date();
        return today.getFullYear()
    }

    setColor(color): void {
        this.color = color
    }
    getColor(): string {
        return this.color;
    }

}
