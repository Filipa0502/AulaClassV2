import { Component, OnInit } from '@angular/core';
import { ChuckService } from 'src/app/services/chuck.service';

@Component({
  selector: 'app-chuck',
  templateUrl: './chuck.component.html',
  styleUrls: ['./chuck.component.css']
})
export class ChuckComponent implements OnInit {

  constructor(private chuckService : ChuckService) { }

  ngOnInit(): void {
  }

  piada: string = "O que é que uma banana diz para a outra? Macacos me mordam";

  resultado : any;
  getJoke(){
    //this.piada = this.chuckService.piadaDoServico;
    this.chuckService.getPiada().subscribe(data => {this.resultado = data;
    this.piada = this.resultado.value});
  }
  piadas: any;
  getMoreJokes(valoraPesquisar: string){
    this.chuckService.getJokeFromCat(valoraPesquisar).subscribe(data => {this.piadas = data});
  }
}
