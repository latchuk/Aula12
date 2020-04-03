import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-exemplo-form-control',
  templateUrl: './exemplo-form-control.component.html',
  styleUrls: ['./exemplo-form-control.component.scss']
})
export class ExemploFormControlComponent implements OnInit {

  nome = new FormControl(null, [Validators.required, Validators.maxLength(32)]);
  sobrenome = new FormControl(null, [Validators.required, Validators.maxLength(16)]);
  email = new FormControl(null, [Validators.required, Validators.email]);
  senha = new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(16)]);
  receberNovidades = new FormControl(false);

  esconderSenha = true;

  jsonDados: string;

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.nome.setValue(this.appService.teste);
  }

  limpar() {

    this.nome.setValue(null);
    this.sobrenome.setValue(null);
    this.email.setValue(null);
    this.senha.setValue(null);
    this.receberNovidades.setValue(false);

    this.jsonDados = null;
  }

  enviar() {

    this.appService.teste = this.nome.value;

    this.nome.markAsTouched();
    this.sobrenome.markAsTouched();
    this.email.markAsTouched();
    this.senha.markAsTouched();
    this.receberNovidades.markAsTouched();

    if (this.nome.invalid ||
      this.sobrenome.invalid ||
      this.email.invalid ||
      this.senha.invalid ||
      this.receberNovidades.invalid) {

      return;

    }

    const dados = {
      nome: this.nome.value,
      sobrenome: this.sobrenome.value,
      email: this.email.value,
      senha: this.senha.value,
      receberNovidades: this.receberNovidades.value,
    };

    this.jsonDados = JSON.stringify(dados);

  }

}
