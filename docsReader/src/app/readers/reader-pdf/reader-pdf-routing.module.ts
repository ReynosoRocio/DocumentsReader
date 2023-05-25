import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReaderPDFComponent } from './reader-pdf.component';
const routes: Routes = [
  { path:'', component: ReaderPDFComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReaderPDFRoutingModule { }
