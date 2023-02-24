import { EventEmitter, Injectable } from "@angular/core";
import { LogginService } from "./logginService.service";
import { Persona } from "./persona.model";
import { DataServices } from "./services/Data.service";
// es necesario este decorador para hacerle saber a angular que 
// este servicio se puede dejar inyectar por otro servicio
@Injectable()
export class PersonaService {
    saludar = new EventEmitter<number>();

    constructor(private loginService: LogginService,private dataService:DataServices) { }

    personas: Persona[] = [];
    // para que el array no quede vacio hay que llenarlo
    setPersonasArray(arrayPersonas:Persona[]){
        this.personas = arrayPersonas;
    }

    agregarPersona(persona: Persona): void {
        // this.loginService.enviaMensajeConsola('La persona se agregó: ' + persona.nombre + ' ' + persona.apellido);
        if(this.personas == null){
            this.personas = [];
        }
        this.personas.push(persona);
        this.dataService.guardarPersonas(this.personas);
    }
    obtenerPersonasBD(){
        return this.dataService.getPersonas();
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