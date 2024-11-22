import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ValidService {

    constructor() {}

    removeLetter(word: string) {
        return word.replace(/\D/g, "").toLowerCase();
    }
    removeSings(word: string) {
        return word.replace(/([-.*+?^=!:$%{}()|\[\]\/\\])/g, "").toLowerCase();
    }

    validEmail(email) {
        if(email == null)
            return false;

        let user = email.toString().substring(0, email.toString().indexOf("@"));
        let dom = email.toString().substring(email.toString().indexOf("@") + 1, email.toString().length);

        let format: RegExp;
        format = /[`!@#$%^&*()+ =\[\]{};':"\\|,<>\/?áàâãéèêíïóôõöúçñÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ~]/;
        if(format.test(user) || format.test(dom)){return  false;}

        return (user.length >= 1) &&
            (dom.length >= 3) &&
            (user.search("@") == -1) &&
            (dom.search("@") == -1) &&
            (user.search(" ") == -1) &&
            (dom.search(" ") == -1) &&
            (dom.search(".") != -1) &&
            (dom.indexOf(".") >= 1) &&
            (dom.lastIndexOf(".") < dom.length - 1);
    }

}
