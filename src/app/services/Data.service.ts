import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Persona } from "../persona.model";

@Injectable()
export class DataServices {
    url: string = 'https://listado-persona-8db64-default-rtdb.firebaseio.com/datosPersonas';
    constructor(private httpClient: HttpClient) { }

    guardarPersonas(arrayPersonas: Array<Persona>) {
        this.httpClient.put(
            this.url + '.json',
            arrayPersonas
        ).subscribe(
            {
                next: response => { }// console.log('Resultado de guardar las personas: ', response),
                , error: err => { }// console.log('Error al enviar personas ', err)
            }
        )
    }
    getPersonas() {
        return this.httpClient.get(this.url + '.json')
    }
    modificarPersona(index: number, persona: Persona) {
        const url = this.url + '/' + index + '.json';
        this.httpClient.put(url, persona)
            .subscribe(
                {
                    next: response => { },
                    error: err => { }
                }
            )
    }

    eliminarPersona(id: number) {
        const url = this.url + '/' + id + '.json';
        this.httpClient.delete(url)
            .subscribe(
                {
                    next: response => { console.log('eliminado ',response) },
                    error: err => { console.log('no eliminado ',err) }
                }
            )
    }
}
