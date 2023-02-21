import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TablaEstudiantesComponent } from './components/tabla-estudiantes/tabla-estudiantes.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { TablaEstudiantesPromiseComponent } from './components/tabla-estudiantes-promise/tabla-estudiantes-promise.component';

@NgModule({
  declarations: [
    AppComponent,
    TablaEstudiantesComponent,
    TablaEstudiantesPromiseComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    MatTableModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
