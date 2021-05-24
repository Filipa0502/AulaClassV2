import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FormsModule } from '@angular/forms';
import { EvAndRefComponent } from './components/ev-and-ref/ev-and-ref.component';
import { ClinicaVeterinariaComponent } from './components/clinica-veterinaria/clinica-veterinaria.component';
import { FourOrFourComponent } from './components/four-or-four/four-or-four.component';
import { ListaDeComprasComponent } from './components/lista-de-compras/lista-de-compras.component';
import { AddComponent } from './components/lista-de-compras/add/add.component';
import { BuyComponent } from './components/lista-de-compras/buy/buy.component';
import { PColorComponent } from './components/p-color/p-color.component';
import { ChuckComponent } from './components/chuck/chuck.component';
import { CookiesComponent } from './components/cookies/cookies.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CalculatorComponent,
    NavBarComponent,
    EvAndRefComponent,
    ClinicaVeterinariaComponent,
    FourOrFourComponent,
    ListaDeComprasComponent,
    AddComponent,
    BuyComponent,
    PColorComponent,
    ChuckComponent,
    CookiesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
