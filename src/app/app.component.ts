import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  validate1 = false;
  validate2 = false;
  validate3 = false;
  barValidate = 0;

  constructor() { }

  validatesenha(senha: any) {
    if (senha.length >= 6) {
      this.validate1 = true;
    } else {

      this.validate1 = false;
    }

    var letras_maiusculas = "ABCDEFGHYJKLMNOPQRSTUVWXYZ";

    if (senha.match(/[A-Z]/)) {
      this.validate2 = true;
    } else {
      this.validate2 = false;
    }


    var numeros = '0123456789'

    if (senha.match(/[0-9]/)) {
      this.validate3 = true;
    } else {
      this.validate3 = false;
    }

    console.log(senha);
  }

}

