import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  constructor() { }
  static readonly soma: string = '+';
  static readonly subtracao: string = '-';
  static readonly divisao: string = '/';
  static readonly multiplicacao: string = 'x';

  calcular(num1: number, num2:number, operacao: string): number
  {
    let resulatado: number;
    switch(operacao)
    {
      case CalculadoraService.soma:
        resulatado = num1 + num2;
        break;
      case CalculadoraService.subtracao:
        resulatado = num1 - num2;
        break;
      case CalculadoraService.divisao:
        resulatado = num1 / num2;
        break;
      case CalculadoraService.multiplicacao:
        resulatado = num1 * num2;
        break;
      default:
        resulatado = 0;
        break;
    }
    return resulatado;
  }
}
