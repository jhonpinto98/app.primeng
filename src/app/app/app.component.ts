import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DocumentoComponent } from '../documento/documento.component';
import { ComparendoComponent } from "../comparendo/comparendo.component";
import { PruebaComponent } from '../prueba/prueba.component';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterModule, DocumentoComponent, ComparendoComponent,PruebaComponent],
})
export class AppComponent {
  title = 'angular-routing-example';
}
