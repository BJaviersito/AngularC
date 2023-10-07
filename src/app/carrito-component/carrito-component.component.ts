import { Component } from '@angular/core';
import { CargarScriptsService } from '../cargar-scripts.service';

@Component({
  selector: 'app-carrito-component',
  templateUrl: './carrito-component.component.html',
  styleUrls: ['./carrito-component.component.css']
})
export class CarritoComponentComponent {
  constructor(private _CargaScripts:CargarScriptsService)
  {
    _CargaScripts.Carga(["/carrito"]);
  }


}
