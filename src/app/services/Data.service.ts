import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Persona } from "../persona.model";
import { LoginService } from "./LoginService.service";

@Injectable()
export class DataServices {
    url: string = 'https://listado-persona-8db64-default-rtdb.firebaseio.com/datosPersonas';
    constructor(
        private httpClient: HttpClient,
        private loginService:LoginService
        ) {}

    guardarPersonas(arrayPersonas: Array<Persona>) {
        const token = this.loginService.getIdToken();

        this.httpClient.put(
            this.url + '.json?auth='+token,
            arrayPersonas
        ).subscribe(
            {
                next: response => { }// console.log('Resultado de guardar las personas: ', response),
                , error: err => { }// console.log('Error al enviar personas ', err)
            }
        )
    }
    getPersonas() {
        const token = this.loginService.getIdToken();
        return this.httpClient.get(this.url + '.json?auth='+token);
    }
    modificarPersona(index: number, persona: Persona) {
        const token = this.loginService.getIdToken();

        const url = this.url + '/' + index + '.json?auth='+token;
        this.httpClient.put(url, persona)
            .subscribe(
                {
                    next: response => { },
                    error: err => { }
                }
            )
    }
 
    eliminarPersona(id: number) {
        const token = this.loginService.getIdToken();

        const url = this.url + '/' + id + '.json?auth='+token;
        this.httpClient.delete(url)
            .subscribe(
                {
                    next: response => { console.log('eliminado ',response) },
                    error: err => { console.log('no eliminado ',err) }
                }
            )
    }
}
