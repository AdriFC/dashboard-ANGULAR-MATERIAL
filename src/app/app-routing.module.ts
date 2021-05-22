import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  // Ruta vacía redirecciona al login
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path:'login', component: LoginComponent },
  //Carga perezosa, solo carga los componentes necesarios
  { path: 'dashboard', loadChildren: () => import('./components/dashboard/dashboard.module').then(x=> x.DashboardModule) },
  // Ruta no existente redirecciona al login
  { path: '**', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
