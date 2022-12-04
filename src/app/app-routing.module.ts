import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { PorNombreComponent } from './pages/por-nombre/por-nombre.component';
import { PorDepartamentoComponent } from './pages/por-departamento/por-departamento.component';
import { VerResidenteComponent } from "./pages/ver-residente/ver-residente.component";

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