import {Inject, Injectable} from '@angular/core';
import {DOCUMENT} from "@angular/common";
import {Meta} from "@angular/platform-browser";

@Injectable({
    providedIn: 'root'
})
export class HeadService {

    private urlSiteStart = 'https://lsestruturassolares.aqis.com.br';

    constructor(
        @Inject(DOCUMENT) private dom,
        private meta: Meta
    ) {}

    setUrl(urlFinal: string): void {
        let url: string = urlFinal ? this.urlSiteStart+'/'+urlFinal : this.urlSiteStart;
        this.updateCanonicalUrl(url)
        this.updateOGUrl(url)
    }

    private updateOGUrl(url:string){
        this.meta.updateTag({property:"og:url", content: url})

    }
    private updateCanonicalUrl(url:string){
        const head = this.dom.getElementsByTagName('head')[0];
        let element: HTMLLinkElement= this.dom.querySelector(`link[rel='canonical']`) || null
        if (element==null) {
            element= this.dom.createElement('link') as HTMLLinkElement;
            head.appendChild(element);
        }
        element.setAttribute('rel','canonical')
        element.setAttribute('href',url)
    }
}
