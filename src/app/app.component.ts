import { Component, OnInit } from '@angular/core';
import { Persona } from './persona.model';
import { PersonaService } from './personas.service';
import { LoginService } from './services/LoginService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [PersonaService]
})
export class AppComponent implements OnInit {
  titulo = 'Listado de personas';
  constructor(private loginService: LoginService) { }
  ngOnInit(): void { }

  logOut() {
    this.loginService.logOut()
  }
  
  isAuth(): boolean {
    return this.loginService.isAuth();
  }
  // COMENTADO POR ROUTING CLASE
  // personas:Persona[];

  // constructor(private personaService:PersonaService){}

  // ngOnInit():void{
  //   this.personas = this.personaService.personas; 
  // }

  // COMENTADO POR CLASE DATA SERVICE EN ANGULAR
  // personaEmitida(event: Persona): void {
  // this.personas.push(event);
  //   this.personaService.agregarPersona(event);
  // }
}
