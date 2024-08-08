import { Component } from '@angular/core';
import { DocumentoComponent } from '../documento/documento.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comparendo',
  templateUrl: './comparendo.component.html',
  styleUrls: ['./comparendo.component.css'],
  standalone: true,
  imports: [CommonModule, DocumentoComponent]
})
export class ComparendoComponent {
  recursoUuid: string = 'some-uuid-value';

  actualizarDocumentos(documentos: any[]) {
    console.log('Documentos actualizados:', documentos);
  }
}
