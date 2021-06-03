import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { ChuckComponent } from './components/chuck/chuck.component';
import { ClinicaVeterinariaComponent } from './components/clinica-veterinaria/clinica-veterinaria.component';
import { CookiesComponent } from './components/cookies/cookies.component';
import { EvAndRefComponent } from './components/ev-and-ref/ev-and-ref.component';
import { FourOrFourComponent } from './components/four-or-four/four-or-four.component';
import { HomeComponent } from './components/home/home.component';
import { AddComponent } from './components/lista-de-compras/add/add.component';
import { BuyComponent } from './components/lista-de-compras/buy/buy.component';
import { ListaDeComprasComponent } from './components/lista-de-compras/lista-de-compras.component';
import { FColorComponent } from './components/p-color/f-color/f-color.component';
import { PColorComponent } from './components/p-color/p-color.component';


const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"home", component:HomeComponent},
  {path:"calculadora", component:CalculatorComponent},
  {path:"evRef", component:EvAndRefComponent},
  {path:"cookies", component:CookiesComponent},
  {path:"clinica", component:ClinicaVeterinariaComponent},
  {path:"notFound", component:FourOrFourComponent},
  {path:"chuck", component:ChuckComponent},
  {path:"listaDeCompras", component:ListaDeComprasComponent,
    children:
    [
      {path:"add", component:AddComponent},
      {path:"buy", component:BuyComponent}
    ]
  },
  {path:"pColor", component:PColorComponent,
    children:
    [
      {path:"fColor", component:FColorComponent},
    ]
  },
  {path:"**", redirectTo:"notFound"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
