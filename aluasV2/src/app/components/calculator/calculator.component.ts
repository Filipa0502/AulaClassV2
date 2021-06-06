import { Component, OnInit } from '@angular/core';
import { CalculadoraService } from 'src/app/services/calculadora.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor(private calculadoraService: CalculadoraService) { }

  /*valor1 = 0;
  valor2 = 0;
  sinal = "";
  resultado;

  calcula()
  {
    //this.resultado = Number(this.valor1) + Number(this.valor2);
    this.resultado = eval(this.valor1+ this.sinal +this.valor2)
  }
*/
  ngOnInit(): void {
  }

  private numero1: string;
  private numero2: string;
  private resultado: number;
  private operacao: string;

  /*--------------------iniciar e limpar-------------------------*/
  limpar(): void
  {
    this.numero1 = '0';
    this.numero2 = null;
    this.operacao = null;
    this.resultado = null;
  }

  /*---------------------clicar numero------------------------*/
  adicionarNumero(numero: string): void {
    if (this.operacao === null) {
      this.numero1 = this.concatenarNumero(this.numero1, numero);
    } else {
      this.numero2 = this.concatenarNumero(this.numero2, numero);
    }
  }

  concatenarNumero(numAtual: string, numConcat: string): string {
    if (numAtual === '0' || numAtual === null) {
      numAtual = '';
    }

    if (numConcat === '.' && numAtual === '') {
      return '0.';
    }

    if (numConcat === '.' && numAtual.indexOf('.') > -1) {
      return numAtual;
    }

    return numAtual + numConcat;
  }


  /*---------------------------operaçoes-------------------------*/
  definirOperacao(operacao: string): void {
    if (this.operacao === null) {
      this.operacao = operacao;
      return;
    }

    if (this.numero2 !== null) {
      this.resultado = this.calculadoraService.calcular(
        parseFloat(this.numero1),
        parseFloat(this.numero2),
        this.operacao);

      this.operacao = operacao;
      this.numero1 = this.resultado.toString();
      this.numero2 = null;
      this.resultado = null;
    }
  }


  /*--------------------------------fazer o calculo---------------------------------*/
  calcular(): void {
    if (this.numero2 === null) {
      return;
    }

    this.resultado = this.calculadoraService.calcular(
      //parseFloat - analisa um argumento string, e retorna um numero de ponto flutuante
      parseFloat(this.numero1),
      parseFloat(this.numero2),
      this.operacao);
  }

  /*---------------------------aparecer no display--------------------------*/
  get display(): string {
    if (this.resultado !== null) {
      return this.resultado.toString();
    }

    if (this.numero2 !== null) {
      return this.numero2;
    }

    return this.numero1;
  }
}
