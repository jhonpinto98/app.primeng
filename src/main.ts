import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { RouterModule, Routes, provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { FileUploadModule } from 'primeng/fileupload';
import { CommonModule } from '@angular/common';
import { DocumentoComponent } from './app/documento/documento.component';
import { ComparendoComponent } from './app/comparendo/comparendo.component';
import { TableBasicDemo } from './app/table-basic-demo';
import { PruebaComponent } from './app/prueba/prueba.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: '', component: TableBasicDemo },
  { path: 'documento', component: DocumentoComponent },
  { path: 'comparendo', component: ComparendoComponent },
  { path: 'prueba', component: PruebaComponent }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(),
    provideRouter(routes),
    importProvidersFrom(FileUploadModule, CommonModule, RouterModule,HttpClientModule)
  ],
}).catch((err) => console.error(err));
