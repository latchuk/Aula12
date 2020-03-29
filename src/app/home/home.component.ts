import { Component, OnInit } from '@angular/core';
import { Exemplo } from './exemplo.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  exemplos: Exemplo[] = [];

  constructor() { }

  ngOnInit(): void {

    this.exemplos = [

      {
        titulo: 'Formulário com NgModel',
        subtitulo: 'Formulário simples utilizando o NgModel',
        descricao: 'Esse exemplo mostra como contruir um formulário simples e utilizar o binding com o NgModel para capturar o valor de um input.',
        urlCodigo: 'https://github.com/latchuk/Aula12',
        urlExemplo: '/exemploNgModel'
      }

    ];

  }

  navegarNovaAba(url: string) {
    window.open(url);
  }

}
