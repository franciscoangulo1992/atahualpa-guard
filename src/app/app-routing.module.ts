import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { PorNombreComponent } from './pages/por-nombre/por-nombre.component';
import { PorDepartamentoComponent } from './pages/por-departamento/por-departamento.component';
import { VerResidenteComponent } from "./pages/ver-residente/ver-residente.component";
import { ConfiguracionComponent } from "./pages/configuracion/configuracion.component";
import { VisitasComponent } from "./pages/visitas/visitas.component";

const routes: Routes = [{
    path: '',
    component: PorNombreComponent,
    pathMatch: "full"
},
{
    path: 'departamento',
    component: PorDepartamentoComponent
},
{
    path: 'configuracion',
    component: ConfiguracionComponent
},
{
    path: 'visitas',
    component: VisitasComponent
},
{
    path: 'residente/:id',
    component: VerResidenteComponent
},
{
    path: '**',
    redirectTo: ''
}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }