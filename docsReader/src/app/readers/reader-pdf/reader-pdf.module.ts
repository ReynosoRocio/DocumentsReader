import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReaderPDFRoutingModule } from './reader-pdf-routing.module';
import { ReaderPDFComponent } from './reader-pdf.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

@NgModule({
  declarations: [ReaderPDFComponent],
  imports: [
    CommonModule,
    ReaderPDFRoutingModule,
    NgxExtendedPdfViewerModule
  ],
  exports: [ReaderPDFComponent]
})
export class ReaderPDFModule { }
