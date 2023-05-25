import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Connection2ApiService } from 'src/services/connection2-api.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import * as pdfjs from 'pdfjs-dist';
import { GlobalWorkerOptions } from 'pdfjs-dist';
import { pdfDefaultOptions } from 'ngx-extended-pdf-viewer';

@Component({
  selector: 'app-reader-pdf',
  templateUrl: './reader-pdf.component.html',
  styleUrls: ['./reader-pdf.component.css']
})
export class ReaderPDFComponent implements OnInit {
  @ViewChild('pdfViewer') pdfViewer?: ElementRef;

  pdfUrl: SafeResourceUrl = '';
  pdfBase64= '';
  showMeThis = false;
  constructor(private Conni: Connection2ApiService, private sanitizer: DomSanitizer) { 
    pdfDefaultOptions.assetsFolder = 'bleeding-edge';
  }

  ngOnInit(): void {
    GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.14.305/pdf.worker.min.js'; // Ruta al archivo "pdf.worker.js"
  }
  cargarPDF(blob: Blob) {
    const pdfBlob = blob; // Obtén el objeto Blob del PDF
    this.pdfUrl = this.sanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(pdfBlob));
  }

  buttonClick(){
    this.Conni.obtenerDatos().then((data) => {
      //console.log(data);
      this.showPDF(data.split(',')[1]);
      this.showPDF2(data.split(',')[1]);
      this.showMeThis = true;

    }).catch((error) => {
      console.log(error);
    });
  }

  buttonClick2(){
    this.Conni.obtenerDatos2().then((data) => {
      console.log(data);
    }).catch((error) => {
      console.log(error);
    });
  }

  showPDF(pdfB64:any){
    const pdfBase64 = pdfB64; // Reemplaza con tu archivo PDF en base64
    const canvas = this.pdfViewer?.nativeElement;
    let loadingTask = pdfjs.getDocument({ data: atob(pdfBase64) });
    loadingTask.promise.then((pdf) => {
      pdf.getPage(1).then((page) => {
        const viewport = page.getViewport({ scale: 1 });
        const context = canvas.getContext('2d');
        canvas.height = viewport.height;
        canvas.width = viewport.width;
  
        const renderContext = {
          canvasContext: context,
          viewport: viewport
        };
  
        page.render(renderContext);
      });
    }, (err)=>{
      console.log(err);
    });
  }


  showPDF2(pdfB64:any){
    this.pdfBase64 = pdfB64; // La cadena en base64 del PDF que deseas mostrar

  }

}
