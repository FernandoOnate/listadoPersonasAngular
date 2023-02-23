import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewPersonComponent } from './view-person/view-person.component';
import { PersonasComponent } from './personas/personas.component';
import { FormularioComponent } from './personas/formulario/formulario.component';

const routes: Routes = [
  {
    path: '',
    pathMatch:'full',
    component: PersonasComponent
  },
  {
    path: 'personas',
    component: PersonasComponent
  },
  {
    path: 'personas/agregar',
    component: FormularioComponent
  },
  {
    path: 'personas/:id',
    component: FormularioComponent
  },
  {
    path: '**',
    component: ViewPersonComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
