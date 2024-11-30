import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {IconService} from "../../services/icon/icon.service";
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";

@Component({
  selector: 'app-svg',
  templateUrl: './svg.component.html',
  styleUrls: ['./svg.component.scss']
})
export class SvgComponent implements OnChanges{

    @Input() svgReference: string;
    @Input() size: number = 20;
    @Input() color: string = 'cl-style-dk';
    @Input() hoverColor: string = '';
    @Input() customHeight: boolean = false;

    private svgUrl: string = '';
    private svgReferenceList: object = {
        brand: this.iconService.brand,
        caretRight: this.iconService.caretRight,
        caretUp: this.iconService.caretUp,
        check: this.iconService.check,
        facebook: this.iconService.facebook,
        hamburger: this.iconService.hamburger,
        home: this.iconService.home,
        instagram: this.iconService.instagram,
        logo: this.iconService.logo,
        user: this.iconService.user,
        users: this.iconService.users,
        whatsapp: this.iconService.whatsapp,
        shieldstar: this.iconService.shieldstar,
        lightbulbflash: this.iconService.lightbulbflash,
        cpu: this.iconService.cpu,
    };

    public colorCss: string = '';

    constructor(
        private iconService: IconService,
    ) {
    }

    ngOnInit() {
        this.colorCss = this.color;
    }

    ngOnChanges(changes: SimpleChanges) {
        if (this.svgReference) {
            this.svgUrl = this.svgReferenceList[this.svgReference];
        }
        this.colorCss = this.color;
    }

    iconHasColor(): boolean {
        return this.colorCss != '';
    }
    iconHasReference(): boolean {
        return this.svgUrl != '';
    }

    getSvgUrl(): string {
        return this.svgUrl;
    }

    getHeight(): string {
        let height = this.size.toString() + 'px';
        return this.customHeight ? 'auto' : height;
    }

}
