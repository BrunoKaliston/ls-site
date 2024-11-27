import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class IconService {

    public brand: string = 'assets/svg-icons/site/brand.svg'
    public caretRight: string = 'assets/svg-icons/arrow/jf-caret-right-sm.svg'
    public caretUp: string = 'assets/svg-icons/arrow/jf-caret-up-sm.svg'
    public check: string = 'assets/svg-icons/interface/jf-check.svg'
    public facebook: string = 'assets/svg-icons/social/jf-facebook.svg'
    public hamburger: string = 'assets/svg-icons/interface/jf-hamburger.svg'
    public home: string = 'assets/svg-icons/interface/jf-home.svg'
    public logo: string = 'assets/svg-icons/site/logo.svg'
    public instagram: string = 'assets/svg-icons/social/jf-instagram.svg'
    public user: string = 'assets/svg-icons/user/jf-user.svg'
    public users: string = 'assets/svg-icons/user/jf-users.svg'

    public shieldstar: string = 'assets/svg-icons/site/shield-star.svg';
    public lightbulbflash: string = 'assets/svg-icons/site/lightbulb-flash.svg';
    public cpu: string = 'assets/svg-icons/site/cpu.svg';

    constructor() {
    }
}
