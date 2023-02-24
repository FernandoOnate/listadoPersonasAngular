import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Persona } from "../persona.model";

@Injectable()
export class DataServices {

    constructor(private httpClient: HttpClient) { }

    guardarPersonas(arrayPersonas: Array<Persona>) {
        this.httpClient.put(
            'https://listado-persona-8db64-default-rtdb.firebaseio.com/datosPersonas.json',
            arrayPersonas
        ).subscribe(
            {
                next: response => console.log('Resultado de guardar las personas: ', response),
                error: err => console.log('Error al enviar personas ', err)
            }
        )
    }
    getPersonas(){
        return this.httpClient.get('https://listado-persona-8db64-default-rtdb.firebaseio.com/datosPersonas.json')
    }
}