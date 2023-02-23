import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Persona } from '../../persona.model';
import { LogginService } from '../../logginService.service';
import { PersonaService } from '../../personas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  // SI NO SE QUIERE AGREGAR PROVIDER EN CADA COMPONENTE SE PUEDE AGREGAR
  // EL SERVICIO COMO PROVEEDOR EN EL APP MODULE
  // providers:[LogginService]
})
export class FormularioComponent {
  constructor(
    private logginService: LogginService,
    private personasService: PersonaService,
    private router:Router
  ) {
    this.personasService.saludar.subscribe(
      (index: number) => { alert('El indice es '+index) },
      (e: any) => { console.log('error ',e)}
    )
  }

  // COMENTADO POR CLASE DATA SERVICE EN ANGULAR
  // @Output() personaCreada = new EventEmitter<Persona>();


  // COMENTADO POR CLASE REFERENCIA LOCAL EN ANGULAR 288
  // nombreInput = '';
  // apellidoInput = '';
  mensaje = '';
  showMessage = false;
  @ViewChild('nombreInput') nombre: ElementRef;
  @ViewChild('apellidoInput') apellido: ElementRef;

  // COMENTADO POR CLASE VIEW CHILD
  // agregarPersona(nom:HTMLInputElement,ape:HTMLInputElement): void {
    onGuardarPersona(): void {
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

      // COMENTADO POR CLASE DATA SERVICES EN ANGULAR
      // this.personaCreada.emit(personaNueva);

      this.personasService.agregarPersona(personaNueva);
      this.showMessage = true;
      this.mensaje = 'Persona agregada!';
      this.logginService.enviaMensajeConsola(this.mensaje);

      setTimeout(() => {
        this.router.navigate(['personas']);
      }, 2000);
    } else {
      this.mensaje = 'Debes completar los campos!';
    }
  }
}
