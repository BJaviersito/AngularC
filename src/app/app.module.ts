import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CargarScriptsService } from './cargar-scripts.service';

import { AppComponent } from './app.component';
import { ShopComponent } from './shop/shop.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { CarroComponent } from './carro/carro.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ContacComponentComponent } from './contac-component/contac-component.component';
import { ShopComponentComponent } from './shop-component/shop-component.component';
import { CuentaComponentComponent } from './cuenta-component/cuenta-component.component';
import { AboutComponentComponent } from './about-component/about-component.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PoliticaComponentComponent } from './politica-component/politica-component.component';
import { CarritoComponentComponent } from './carrito-component/carrito-component.component';
import { PrivacidadComponentComponent } from './privacidad-component/privacidad-component.component';
import { LegalComponentComponent } from './legal-component/legal-component.component';

const appRoutes:Routes=[
  {path:"",component:HomeComponentComponent},
  {path:"shop",component:ShopComponentComponent},
  {path:"cuenta",component:CuentaComponentComponent},
  {path:"about",component:AboutComponentComponent},
  {path:"contac",component:ContacComponentComponent},
  {path:"carrito",component:CarritoComponentComponent},
  {path:"politica",component: PoliticaComponentComponent},
  {path:"legal",component: LegalComponentComponent},
  {path:"privacidad",component: PrivacidadComponentComponent},
  
];

@NgModule({
  declarations: [
    AppComponent,ShopComponent,BodyComponent,FooterComponent, CarroComponent,
    CarroComponent, HomeComponentComponent, ContacComponentComponent, ShopComponentComponent, 
    CuentaComponentComponent, AboutComponentComponent, PoliticaComponentComponent, CarritoComponentComponent, PrivacidadComponentComponent, LegalComponentComponent
  ],
  imports: [
    BrowserModule,FormsModule,RouterModule.forRoot(appRoutes)
  ],
  providers: [CargarScriptsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
