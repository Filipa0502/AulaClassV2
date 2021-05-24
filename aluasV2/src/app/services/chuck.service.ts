import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChuckService {

  constructor(private httpAsk : HttpClient) { }


  piadaDoServico ="Veio do Servico";

  link = "https://api.chucknorris.io/jokes/random";
  link2= "https://api.chucknorris.io/jokes/search";
  getPiada(){
    return this.httpAsk.get(this.link);
  }

  getJokeFromCat(valoraPesquisar: string){
    return this.httpAsk.get(this.link2, {
      params:{'query': valoraPesquisar}
    });

  }



}
