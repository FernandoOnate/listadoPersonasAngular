import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
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
  @ViewChild('nombreInput') nombre: ElementRef;
  @ViewChild('apellidoInput') apellido: ElementRef;

  // COMENTADO POR CLASE VIEW CHILD
  // agregarPersona(nom:HTMLInputElement,ape:HTMLInputElement): void {
  agregarPersona(): void {
    // COMENTADO POR CLASE LOCAL REFERENCE
    // if (this.apellidoInput.length > 0 && this.nombreInput.length > 0) {
    // const personaNueva = new Persona(this.nombreInput, this.apellidoInput);

  // COMENTADO POR CLASE VIEW CHILD
    // if (nom.value.length > 0 && ape.value.length > 0) {
    //   const personaNueva = new Persona(nom.value, ape.value);

    if (this.nombre.nativeElement.value.length > 0 && this.apellido.nativeElement.value.length > 0) {
      const personaNueva = new Persona(this.nombre.nativeElement.value, this.apellido.nativeElement.value);

      // COMENTADO POR CLASE VIEWCHILD 
      // const personaNueva = new Persona(nom.value, ape.value);
      // this.personas.push(personaNueva);
      this.personaCreada.emit(personaNueva);
      this.showMessage = true;
      this.mensaje = 'Persona agregada!';
    } else {
      this.mensaje = 'Debes completar los campos!';
    }
  }
}