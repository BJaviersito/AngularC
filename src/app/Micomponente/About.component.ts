import { Component } from "@angular/core";

@Component({
    selector: 'About',
    templateUrl: `./About.component.html`
})
export class About{
    myimage:String = "assets/capiimagenes/capiinfo.png";
    
    constructor(){
        
        console.log("componente cargado")
    }

}