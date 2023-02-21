import { Injectable } from "@angular/core";
import { LogginService } from "./logginService.service";
import { Persona } from "./persona.model";
// es necesario este decorador para hacerle saber a angular que 
// este servicio se puede dejar inyectar por otro servicio
@Injectable()
export class PersonaService {
    constructor(private loginService: LogginService) { }
    personas: Persona[] = [
        new Persona('Juanito', 'Alcachofas'),
        new Persona('Pepito', 'Perez'),
        new Persona('Lorena', 'Castro')
    ];
    agregarPersona(persona: Persona): void {
        this.personas.push(persona);
        this.loginService.enviaMensajeConsola('La persona se agregó: ' + persona.nombre + ' ' + persona.apellido);
    }
}