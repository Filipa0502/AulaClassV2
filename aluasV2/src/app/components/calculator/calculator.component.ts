import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() { }

  valor1 = 0;
  valor2 = 0;
  sinal = "";
  resultado;

  calcula()
  {
    //this.resultado = Number(this.valor1) + Number(this.valor2);
    this.resultado = eval(this.valor1+ this.sinal +this.valor2)
  }

  ngOnInit(): void {
  }

}
