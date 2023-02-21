import { Persona } from "./persona.model";

export class PersonaService {
    personas: Persona[] = [
        new Persona('Juanito', 'Alcachofas'),
        new Persona('Pepito', 'Perez'),
        new Persona('Lorena', 'Castro')
    ];

    agregarPersona(persona: Persona): void {
        this.personas.push(persona);
    }
}