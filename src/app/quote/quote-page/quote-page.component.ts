import {Component} from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {ValidService} from "../../services/valid/valid.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-quote-page',
  templateUrl: './quote-page.component.html',
  styleUrls: ['./quote-page.component.scss']
})
export class QuotePageComponent {

    private mailerRouter: string = 'https://lsestruturassolares.com.br/mailer_quote.php'

    public contactForm: FormGroup;
    public sending: boolean = false;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private http: HttpClient,
        private meta: Meta,
        private validService: ValidService,
        private title: Title
    ) {
        this.meta.updateTag({name:"description", content:"LS estruturas solares | Orçamento - solicite um orçamento"})
        this.meta.updateTag({property:"og:description", content:"LS estruturas solares | Orçamento - solicite um orçamento"})
        this.meta.updateTag({property:"og:title", content:"LS estruturas solares | Orçamento" })
        this.title.setTitle("LS estruturas solares | Orçamento")
        this.contactForm = formBuilder.group({
            name: new FormControl(null, [Validators.required]),
            email: new FormControl(null, [Validators.required]),
            phone: new FormControl(null, [Validators.required]),
            subject: new FormControl(null, [Validators.required]),
            message: new FormControl(null, [Validators.required]),
            cnpj: new FormControl(null, [Validators.required]),
        });
    }


    resetForm(): void {
        this.contactForm.reset();
    }

    sendMail() {
        this.sending = true;
        if (!this.formIsValid()) {
            this.sending = false;
            return
        }

        this.postEmail(this.contactForm.value,(response) => {
            if (!response.error) {
                this.router.navigate(['/enviadocomsucesso'],{state:{success: '1'}})
                this.resetForm();
            } else {
                alert('Não foi possivel enviar os dados agora, por favor tente novamente mais tarde.');
            }
            this.sending = false
        })
    }

    formIsValid(): boolean {
        if (this.contactForm.get('name').value == null) {
            alert('Nome não informado.')
            return false;
        }
        if (!this.validService.validEmail(this.contactForm.get('email').value)) {
            alert('E-mail inválido.')
            return false;
        }
        if (this.contactForm.get('phone').value == null) {
            alert('Telefone não informado.')
            return false;
        }
        if (this.contactForm.get('cnpj').value == null) {
            alert('Telefone não informado.')
            return false;
        }
        if (this.contactForm.get('subject').value == null) {
            alert('Assuno não informado.')
            return false;
        }
        if (this.contactForm.get('message').value == null) {
            alert('Escreva sua mensagem.')
            return false;
        }
        return true
    }

    postEmail(body, callback) {
        const url = this.mailerRouter;

        let header = new HttpHeaders({
            'Content-Type':'application/json',
        });
        return this.http.post( url, body, {headers: header}).subscribe((res) => { callback({data: res}) }, (error) => { callback({error}) })
    }
}
