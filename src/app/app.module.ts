import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PorNombreComponent } from './pages/por-nombre/por-nombre.component';
import { PorDepartamentoComponent } from './pages/por-departamento/por-departamento.component';
import { VerResidenteComponent } from './pages/ver-residente/ver-residente.component';
import { ConfiguracionComponent } from './pages/configuracion/configuracion.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { VisitasComponent } from './pages/visitas/visitas.component';

@NgModule({
  declarations: [
    AppComponent,
    PorNombreComponent,
    PorDepartamentoComponent,
    VerResidenteComponent,
    ConfiguracionComponent,
    VisitasComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
