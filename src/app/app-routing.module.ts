import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonasComponent } from './personas/personas.component';
import { FormularioComponent } from './personas/formulario/formulario.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { LoginGuardian } from './guards/login.guardian';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: PersonasComponent,
    canActivate:[LoginGuardian]
  },
  {
    path: 'personas',
    component: PersonasComponent,
    canActivate: [LoginGuardian],
    children: [
      {
        path: 'agregar',
        component: FormularioComponent
      },
      {
        path: ':id',
        component: FormularioComponent
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  }
  ,
  {
    path: '**',
    component: ErrorComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
