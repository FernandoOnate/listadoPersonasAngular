import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PersonaComponent } from './persona/persona.component';
import { FormularioComponent } from './formulario/formulario.component';
import { LogginService } from './logginService.service';
import { PersonaService } from './personas.service';

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [LogginService,PersonaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
