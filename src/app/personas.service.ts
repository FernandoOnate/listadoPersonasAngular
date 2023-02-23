import { EventEmitter, Injectable } from "@angular/core";
import { LogginService } from "./logginService.service";
import { Persona } from "./persona.model";
// es necesario este decorador para hacerle saber a angular que 
// este servicio se puede dejar inyectar por otro servicio
@Injectable()
export class PersonaService {
    saludar = new EventEmitter<number>();

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
    encontrarPersona(id:number){
        const personaEncontrada = this.personas[id];
        return personaEncontrada;
    }
    modificarPersona(id:number,personaNueva:Persona){
        const personaVieja = this.personas[id];
        personaVieja.nombre = personaNueva.nombre;
        personaVieja.apellido = personaNueva.apellido;
    }
    eliminarPersona(id:number){
        this.personas.splice(id,1);
    }
}