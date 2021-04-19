import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ev-and-ref',
  templateUrl: './ev-and-ref.component.html',
  styleUrls: ['./ev-and-ref.component.css']
})
export class EvAndRefComponent implements OnInit {

  constructor() { }

  corBackGround="";
  changeColor()
  {
    //this.corBackGround = "red"
    this.corBackGround = this.corBackGround == "red" ? 'white':'red';
  }

  ngOnInit(): void {
  }

}
