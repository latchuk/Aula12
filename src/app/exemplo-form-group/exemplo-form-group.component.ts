import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, AbstractControl, ValidationErrors } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-exemplo-form-group',
  templateUrl: './exemplo-form-group.component.html',
  styleUrls: ['./exemplo-form-group.component.scss']
})
export class ExemploFormGroupComponent implements OnInit {

  formulario = new FormGroup({
    nome: new FormControl(null, [this.somenteNumeros]),
    sobrenome: new FormControl(null, [Validators.required, Validators.maxLength(16)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    senha: new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(16)]),
    receberNovidades: new FormControl(false)
  });

  esconderSenha = true;

  jsonDados: string;

  primeiraValidacao = false;

  constructor(private appService: AppService) { }

  ngOnInit(): void {

  }

  validacaoPersonalizada(control: AbstractControl): ValidationErrors | null {

    console.log(this.primeiraValidacao);

    if (control.value === 'marcos') {
      return null;
    }

    return { validacaoPersonalizada: true };

  }

  somenteNumeros(control: AbstractControl): ValidationErrors | null {
    const texto = control.value;

    console.log(texto);

    if (isNaN(Number(texto))) {
      return { somenteNumeros: true };
    } else {
      return null;
    }

  }


  limpar() {
    this.jsonDados = null;
  }

  enviar() {

    if (this.formulario.invalid) {
      return;
    }

    const dados = this.formulario.value;

    this.jsonDados = JSON.stringify(dados);

  }

}
