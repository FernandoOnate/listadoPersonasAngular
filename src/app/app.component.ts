import { Component } from '@angular/core';
import { Persona } from './persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado de personas';
  personas: Persona[] = [
    new Persona('Juanito', 'Alcachofas'),
    new Persona('Pepito', 'Perez'),
    new Persona('Lorena', 'Castro')
  ];
  personaEmitida(event:Persona):void{
    this.personas.push(event);
  }
}
