import { Component, EventEmitter, Output } from '@angular/core';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  @Output() personaCreada = new EventEmitter<Persona>();
  // COMENTADO POR CLASE REFERENCIA LOCAL EN ANGULAR 288
  // nombreInput = '';
  // apellidoInput = '';
  mensaje = '';
  showMessage = false;

  
  agregarPersona(nom:HTMLInputElement,ape:HTMLInputElement): void {
    // if (this.apellidoInput.length > 0 && this.nombreInput.length > 0) {
      // const personaNueva = new Persona(this.nombreInput, this.apellidoInput);
    if (nom.value.length > 0 && ape.value.length > 0) {
      const personaNueva = new Persona(nom.value, ape.value);
      // this.personas.push(personaNueva);
      this.personaCreada.emit(personaNueva);
      this.showMessage = true;
      this.mensaje = 'Persona agregada!';
    }else{
      this.mensaje = 'Debes completar los campos!';
    }
  }
}
