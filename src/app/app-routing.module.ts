import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { HomeComponent } from './home/home.component';
import { ExemploNgModelComponent } from './exemplo-ng-model/exemplo-ng-model.component';
import { ExemploFormControlComponent } from './exemplo-form-control/exemplo-form-control.component';
import { ExemploFormGroupComponent } from './exemplo-form-group/exemplo-form-group.component';


const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'exemploNgModel', component: ExemploNgModelComponent },
  { path: 'exemploFormControl', component: ExemploFormControlComponent },
  { path: 'exemploFormGroup', component: ExemploFormGroupComponent },
  { path: '**', component: PaginaNaoEncontradaComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
