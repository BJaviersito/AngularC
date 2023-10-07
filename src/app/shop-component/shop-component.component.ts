import { Component } from '@angular/core';
import { CargarScriptsService } from './../cargar-scripts.service';

@Component({
  selector: 'app-shop-component',
  templateUrl: './shop-component.component.html',
  styleUrls: ['./shop-component.component.css']
})
export class ShopComponentComponent {

  constructor(private _CargaScripts:CargarScriptsService)
  {
    _CargaScripts.Carga(["/funtions"]);
  }

}
