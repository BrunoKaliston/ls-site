import {Component} from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ValidService} from "../../services/valid/valid.service";

@Component({
    selector: 'app-menu-page',
    templateUrl: './contact-page.component.html',
    styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent {

    private mailerRouter: string = 'https://lsestruturassolares.aqis.com.br/mailer.php'

    public contactForm: FormGroup;
    public sending: boolean = false;

    constructor(
        private formBuilder: FormBuilder,
        private http: HttpClient,
        private meta: Meta,
        private validService: ValidService,
        private title: Title
    ) {
        this.meta.updateTag({name: "description", content: "O LS estruturas solares | Contato."})
        this.meta.updateTag({property: "og:description", content: "O LS estruturas solares | Contato."})
        this.meta.updateTag({property: "og:title", content: "LS estruturas solares | Contato"})
        this.title.setTitle("LS estruturas solares | Contato")

        this.contactForm = formBuilder.group({
            name: new FormControl(null, [Validators.required]),
            email: new FormControl(null, [Validators.required]),
            phone: new FormControl(null, [Validators.required]),
            subject: new FormControl(null, [Validators.required]),
            message: new FormControl(null, [Validators.required]),
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
                alert('Seus dados foram enviados com sucesso.');
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
        if (this.contactForm.get('subject').value == null) {
            alert('Selecione um assunto.')
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


