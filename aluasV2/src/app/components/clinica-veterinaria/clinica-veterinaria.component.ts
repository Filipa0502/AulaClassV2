import { Component, OnInit } from '@angular/core';
import { PhoneBookService } from 'src/app/services/phone-book.service';

@Component({
  selector: 'app-clinica-veterinaria',
  templateUrl: './clinica-veterinaria.component.html',
  styleUrls: ['./clinica-veterinaria.component.css']
})
export class ClinicaVeterinariaComponent implements OnInit {

  agendaService : PhoneBookService;
  constructor(phoneService : PhoneBookService) {
    this.agendaService = phoneService;
  }

  ngOnInit(): void {
  }

}
