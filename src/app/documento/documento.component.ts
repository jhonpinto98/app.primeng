import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadModule } from 'primeng/fileupload';

@Component({
  selector: 'app-documento',
  templateUrl: './documento.component.html',
  styleUrls: ['./documento.component.css'],
  standalone: true,
  imports: [CommonModule, FileUploadModule]
})
export class DocumentoComponent {
  @Input() recursoUuid!: string;
  @Output() documentosActualizados = new EventEmitter<any[]>();

  documentos: any[] = [];

  onUpload(event: any) {
    for (let file of event.files) {
      this.documentos.push({
        uuid: this.generateUUID(),
        nombre: file.name,
        path: 'path/to/file',
        tipo: file.type,
        recurso_uuid: this.recursoUuid
      });
    }
    this.documentosActualizados.emit(this.documentos);
  }

  private generateUUID(): string {
    return 'xxxx-xxxx-4xxx-yxxx-xxxx-xxxx-xxxx-xxxx'.replace(/[xy]/g, function (c) {
      const r = (Math.random() * 16) | 0,
        v = c == 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }
}
