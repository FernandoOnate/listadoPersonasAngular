import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona.model';
import { PersonaService } from '../personas.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit{
  personas:Persona[];

  constructor(private personaService:PersonaService){}
  
  ngOnInit():void{
    this.personas = this.personaService.personas; 
  }
}
