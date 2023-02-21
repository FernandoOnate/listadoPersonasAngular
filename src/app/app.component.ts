import { Component } from '@angular/core';
import { Persona } from './persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado de personas';
  apellidoInput = '';
  nombreInput = '';
  mensaje = '';
  showMessage = false;
  personas: Persona[] = [
    new Persona('Juanito', 'Alcachofas'),
    new Persona('Pepito', 'Perez'),
    new Persona('Lorena', 'Castro')
  ];
  agregarPersona(): void {
    if (this.apellidoInput.length > 0 && this.nombreInput.length > 0) {
      const personaNueva = new Persona(this.nombreInput, this.apellidoInput);
      this.personas.push(personaNueva);
      this.showMessage = true;
      this.mensaje = 'Persona agregada!';
    }else{
      this.mensaje = 'Debes completar los campos!';
    }

  }
}
