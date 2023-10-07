import { Component } from '@angular/core';
import { CargarScriptsService } from '../cargar-scripts.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cuenta-component',
  templateUrl: './cuenta-component.component.html',
  styleUrls: ['./cuenta-component.component.css']
})
export class CuentaComponentComponent {
  constructor(private _CargaScripts:CargarScriptsService)
  {
    _CargaScripts.Carga(["/polar"]) ;
  }
  ngOnInit(): void {
      
  }
  cuenta(form:NgForm){
    const email=form.value.email
    const password=form.value.password
  }
  
}

