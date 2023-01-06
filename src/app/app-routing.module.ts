import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercaDeComponent } from './shared/acerca-de/acerca-de.component';
import { IndexComponent } from './shared/index/index.component';
import { EstaPaginaComponent } from './shared/proyectos/esta-pagina/esta-pagina.component';
import { StreamPlusComponent } from './shared/proyectos/stream-plus/stream-plus.component';
import { TrabajosComponent } from './shared/trabajos/trabajos.component';

const routes: Routes = [
  {path: 'page/acerca-de', component: AcercaDeComponent},
  {path: '', component: IndexComponent},
  {path: 'page/trabajos', component: TrabajosComponent},
  {path: 'page/trabajos/esta-pagina', component: EstaPaginaComponent},
  {path: 'page/trabajos/stream-plus', component: StreamPlusComponent},
  {path: '**', redirectTo: ''},
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
