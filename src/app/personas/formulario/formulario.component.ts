import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Persona } from '../../persona.model';
import { LogginService } from '../../logginService.service';
import { PersonaService } from '../../personas.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  // SI NO SE QUIERE AGREGAR PROVIDER EN CADA COMPONENTE SE PUEDE AGREGAR
  // EL SERVICIO COMO PROVEEDOR EN EL APP MODULE
  // providers:[LogginService]
})
export class FormularioComponent implements OnInit {
  index: number;
  // COMENTADO POR CLASE REFERENCIA LOCAL EN ANGULAR 288
  nombreInput: string;
  apellidoInput: string;
  mensaje = '';
  showMessage = false;

  @ViewChild('nombreInput') nombre: ElementRef;
  @ViewChild('apellidoInput') apellido: ElementRef;

  constructor(
    private logginService: LogginService,
    private personasService: PersonaService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.personasService.saludar.subscribe(
      (index: number) => { alert('El indice es ' + index) },
      (e: any) => { console.log('error ', e) }
    )
  }
  ngOnInit(): void {
    this.index = this.route.snapshot.params['id'];
    if (this.index) {
      const persona: Persona = this.personasService.encontrarPersona(this.index);
      this.nombreInput = persona.nombre;
      this.apellidoInput = persona.apellido;
    }
  }
  // COMENTADO POR CLASE DATA SERVICE EN ANGULAR
  // @Output() personaCreada = new EventEmitter<Persona>();
  // COMENTADO POR CLASE VIEW CHILD
  // agregarPersona(nom:HTMLInputElement,ape:HTMLInputElement): void {
  onGuardarPersona(): void {
    const personaNueva = new Persona(this.nombreInput, this.apellidoInput);

    if (this.index) {
      this.personasService.modificarPersona(this.index, personaNueva);
    } else {
      // COMENTADO POR CLASE LOCAL REFERENCE
      if (this.apellidoInput.length > 0 && this.nombreInput.length > 0) {

        // COMENTADO POR CLASE VIEW CHILD
        // if (nom.value.length > 0 && ape.value.length > 0) {
        //   const personaNueva = new Persona(nom.value, ape.value);

        // if (this.nombre.nativeElement.value.length > 0 && this.apellido.nativeElement.value.length > 0) {
        //   const personaNueva = new Persona(this.nombre.nativeElement.value, this.apellido.nativeElement.value);

        // COMENTADO POR CLASE VIEWCHILD 
        // const personaNueva = new Persona(nom.value, ape.value);
        // this.personas.push(personaNueva);

        // COMENTADO POR CLASE DATA SERVICES EN ANGULAR
        // this.personaCreada.emit(personaNueva);

        this.personasService.agregarPersona(personaNueva);
        this.showMessage = true;
        this.mensaje = 'Persona agregada!';
        this.logginService.enviaMensajeConsola(this.mensaje);
      } else {
        this.mensaje = 'Debes completar los campos!';
      }
    }
    setTimeout(() => {
      this.router.navigate(['personas']);
    }, 2000);
  }

  eliminarPersona(){
    if(this.index != null){
      this.personasService.eliminarPersona(this.index);
      setTimeout(() => {
          this.router.navigate(['personas']);
      }, 1000);
    }
  }
}
