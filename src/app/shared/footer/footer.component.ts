import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

    getCurrentYear(): number {
        let today = new Date();
        return today.getFullYear()
    }

}
