import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoQueHagoComponent } from './shared/lo-que-hago/lo-que-hago.component';
import { QuienSoyComponent } from './shared/quien-soy/quien-soy.component';
import { ProyectosComponent } from './shared/proyectos/proyectos.component';
import { AcercaDeComponent } from './shared/acerca-de/acerca-de.component';
import { IndexComponent } from './shared/index/index.component';
import { EstaPaginaComponent } from './shared/proyectos/esta-pagina/esta-pagina.component';
import { ThisPageComponent } from './shared/proyectos/displays/this-page/this-page.component';
import { ProximamenteComponent } from './shared/proyectos/displays/proximamente/proximamente.component';
import { TrabajosComponent } from './shared/trabajos/trabajos.component';
import { ProyectoScrapingStreamComponent } from './shared/proyectos/displays/proyecto-scraping-stream/proyecto-scraping-stream.component';
import { StreamPlusComponent } from './shared/proyectos/stream-plus/stream-plus.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoQueHagoComponent,
    QuienSoyComponent,
    ProyectosComponent,
    AcercaDeComponent,
    IndexComponent,
    EstaPaginaComponent,
    ThisPageComponent,
    ProximamenteComponent,
    TrabajosComponent,
    ProyectoScrapingStreamComponent,
    StreamPlusComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
