import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona.model';
import { PersonaService } from '../personas.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {
  personas: Persona[];

  constructor(private personaService: PersonaService) { }

  ngOnInit(): void {
    this.personaService.obtenerPersonasBD().subscribe(
      {
        next: (personasResponse: Persona[] | any) => {
          this.personas = personasResponse;
          this.personaService.setPersonasArray(personasResponse);
        },
        error: err => console.log('error al traer en la bd ', err)
      }
    );

  }
}
