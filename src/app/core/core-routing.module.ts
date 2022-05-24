import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//! He creado esta conexión de módulos para el LazyLoad

const routes: Routes = [ 

//todo Rutas principales
// {path: '',
// loadChildren: () => import('./components/home/main.module').then( m => m.MainModule)},

  
//todo Ruta cuando introduces una url inexistente (OJO EL ORDEN IMPORTA)
  {path:'**', redirectTo:''},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
