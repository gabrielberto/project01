import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  validateLength = false;
  validateUppercase = false;
  validateNumber = false;
  OneCondition = false;
  TwoCondition = false;
  ThreeCondition = false;

  touched = false;


  constructor() {}

  validatesenha(senha: any) {
    if (senha.length >= 6) {
      this.validateLength = true;
    } else {

      this.validateLength = false;
    }

    var letras_maiusculas = "ABCDEFGHYJKLMNOPQRSTUVWXYZ";
    if (senha.match(/[A-Z]/)) {
      this.validateUppercase = true;
    } else {
      this.validateUppercase = false;
    }

    var numeros = '0123456789'
    if (senha.match(/[0-9]/)) {
      this.validateNumber = true;
    } else {
      this.validateNumber = false;
    }

    this.validateClass();
    this.touched = true;
  }

  validateClass() {
    if (this.validateLength || this.validateUppercase || this.validateNumber) {
      this.OneCondition = true;
    } else {
      this.OneCondition = false;
    }

    if ((this.validateLength && this.validateUppercase) ||
      (this.validateLength && this.validateNumber) ||
      (this.validateUppercase && this.validateNumber)) {
      this.TwoCondition = true;
    } else {
      this.TwoCondition = false;
    }

    if (this.validateLength && this.validateUppercase && this.validateNumber) {
      this.ThreeCondition = true;
    } else {
      this.ThreeCondition = false;
    }
  }

}

