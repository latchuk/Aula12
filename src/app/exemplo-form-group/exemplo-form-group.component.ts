import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
    selector: 'app-exemplo-form-group',
    templateUrl: './exemplo-form-group.component.html',
    styleUrls: ['./exemplo-form-group.component.scss']
})
export class ExemploFormGroupComponent implements OnInit {

    // formulario = new FormGroup({
    //   nome: new FormControl(null, [Validators.required, Validators.maxLength(32)]),
    //   sobrenome: new FormControl(null, [Validators.required, Validators.maxLength(16)]),
    //   email: new FormControl(null, [Validators.required, Validators.email]),
    //   senha: new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(16)]),
    //   receberNovidades: new FormControl(false)
    // });

    formulario = new FormGroup({
        data1: new FormControl(null),
        data2: new FormControl(null),
        nome: new FormControl(null),
    });

    esconderSenha = true;

    jsonDados: string;

    constructor(private appService: AppService) { }

    ngOnInit(): void {
        this.formulario.controls['nome'].setValue(this.appService.teste);
    }

    limpar() {
        this.jsonDados = null;
    }

    enviar() {

        this.appService.teste = this.formulario.controls['nome'].value;

        if (this.formulario.invalid) {
            return;
        }

        const dados = this.formulario.value;

        this.jsonDados = JSON.stringify(dados);

    }

}
